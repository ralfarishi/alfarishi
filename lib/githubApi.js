import axios from 'axios'

export async function getLatestCommitInfo(repoName) {
  const repoOwner = 'ralfarishi'

  try {
    const response = await axios.get(
      `https://api.github.com/repos/${repoOwner}/${repoName}/commits`
    )
    if (response.status === 200) {
      const latestCommit = response.data[0]
      return latestCommit
    } else {
      console.error('Error fetching latest commit info.')
      return null
    }
  } catch (error) {
    console.error(
      'An error occured when trying to get data from GitHub API:',
      error
    )
    return null
  }
}
