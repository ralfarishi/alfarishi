export default async function handler(req, res) {
  const { repo } = req.query
  const repoOwner = 'ralfarishi'

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Validate repo name (alphanumeric, hyphens, underscores only)
  const repoPattern = /^[a-zA-Z0-9_-]+$/
  if (!repo || !repoPattern.test(repo)) {
    return res.status(400).json({ error: 'Invalid repository name' })
  }

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 5000)

  try {
    const response = await fetch(
      `https://api.github.com/repos/${repoOwner}/${repo}/commits?per_page=1`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'Mozilla/5.0 (compatible; alfarishi-portfolio/1.0)'
        },
        signal: controller.signal
      }
    )

    clearTimeout(timeoutId)

    if (!response.ok) {
      return res.status(response.status).json({
        error: 'Failed to fetch commit info'
      })
    }

    const data = await response.json()

    if (!data || data.length === 0) {
      return res.status(404).json({
        error: 'No commits found'
      })
    }

    const latestCommit = data[0]

    const commitInfo = {
      message: latestCommit.commit.message,
      date: latestCommit.commit.author.date
    }

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=86400'
    )

    res.status(200).json(commitInfo)
  } catch {
    clearTimeout(timeoutId)
    res.status(500).json({ error: 'Internal server error' })
  }
}
