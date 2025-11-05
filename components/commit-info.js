import { useEffect, useState } from 'react'
import { ListItem } from '@chakra-ui/react'
import { Meta } from './work'

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
      } catch (error) {
        console.error('Error fetching commit info:', error)
        setCommitInfo(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchcommitInfo()
  }, [repoName])

  return (
    <>
      <ListItem>
        <Meta>Last Update</Meta>
        <span>
          {isLoading
            ? 'Loading...'
            : commitInfo
              ? new Date(commitInfo.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric'
                })
              : 'Not available'}
        </span>
      </ListItem>
      <ListItem>
        <Meta>Last Commit</Meta>
        <span>
          {isLoading
            ? 'Loading...'
            : commitInfo
              ? commitInfo.message
              : 'Not available'}
        </span>
      </ListItem>
    </>
  )
}

export default CommitInfo
