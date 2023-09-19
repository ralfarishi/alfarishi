import axios from 'axios'

export async function getLatestCommitInfo(repoName) {
  const REPO_OWNER = process.env.NEXT_PUBLIC_REPO_OWNER
  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN

  try {
    const response = await axios.get(
      `https://api.github.com/repos/${REPO_OWNER}/${repoName}/commits`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`
        }
      }
    )
    if (response.status === 200) {
      const latestCommit = response.data[0] // Mendapatkan informasi commit terakhir
      return latestCommit
    } else {
      console.error('Gagal mengambil informasi commit terakhir.')
      return null
    }
  } catch (error) {
    console.error(
      'Terjadi kesalahan saat mengambil data dari GitHub API:',
      error
    )
    return null
  }
}
