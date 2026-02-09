import { useEffect, useState } from 'react'
import { StatBox } from './work'

const CommitInfo = ({ repoName }) => {
  const [commitInfo, setCommitInfo] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchcommitInfo = async () => {
      try {
        const response = await fetch(`/api/commit/${repoName}`)

        if (!response.ok) {
          throw new Error('Failed to fetch commit info')
        }

        const commitInfo = await response.json()
        setCommitInfo(commitInfo)
      } catch {
        setCommitInfo(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchcommitInfo()
  }, [repoName])

  return (
    <>
      <StatBox label="Last Update">
        {isLoading
          ? 'Summoning the dates...'
          : commitInfo
            ? new Date(commitInfo.date).toLocaleDateString('en-US', {
                month: 'short',
                day: '2-digit',
                year: 'numeric'
              })
            : 'Stuck in 1970'}
      </StatBox>
      <StatBox label="Last Commit">
        {isLoading
          ? 'Reading the manual...'
          : commitInfo
            ? commitInfo.message
            : 'Commitment issues'}
      </StatBox>
    </>
  )
}

export default CommitInfo
