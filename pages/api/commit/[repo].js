export default async function handler(req, res) {
  const { repo } = req.query
  const repoOwner = 'ralfarishi'

  try {
    const response = await fetch(
      `https://api.github.com/repos/${repoOwner}/${repo}/commits`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'alfarishi-portfolio'
        }
      }
    )

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
  } catch (error) {
    console.error('Error fetching commit info:', error)
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    })
  }
}
