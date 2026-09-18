import { useEffect, useState } from 'react'
import { Skeleton, Text } from '@chakra-ui/react'
import { StatBox } from './work'

const CommitInfo = ({ repoName }) => {
  const [commitInfo, setCommitInfo] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    const fetchCommitInfo = async () => {
      try {
        const response = await fetch(`/api/commit/${repoName}`)

        if (!response.ok) {
          throw new Error('Failed to fetch commit info')
        }

        const data = await response.json()
        if (isMounted) {
          setCommitInfo(data)
        }
      } catch {
        if (isMounted) {
          setCommitInfo(null)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    fetchCommitInfo()

    return () => {
      isMounted = false
    }
  }, [repoName])

  return (
    <>
      <StatBox label="Last Update">
        <Skeleton isLoaded={!isLoading} minH="20px" borderRadius="md">
          <Text as="span">
            {commitInfo?.date
              ? new Date(commitInfo.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric'
                })
              : 'Public on GitHub'}
          </Text>
        </Skeleton>
      </StatBox>
      <StatBox label="Last Commit">
        <Skeleton isLoaded={!isLoading} minH="20px" borderRadius="md">
          <Text
            as="span"
            noOfLines={1}
            title={commitInfo?.message || 'Active Repository'}
          >
            {commitInfo?.message || 'Active Repository'}
          </Text>
        </Skeleton>
      </StatBox>
    </>
  )
}

export default CommitInfo
