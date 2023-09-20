import axios from 'axios'

export async function getLatestCommitInfo(repoName) {
  const repoOwner = 'ralfarishi'

  try {
    const response = await axios.get(
      `https://api.github.com/repos/${repoOwner}/${repoName}/commits`
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
