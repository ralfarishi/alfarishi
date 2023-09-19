import { useEffect, useState } from 'react'

import { getLatestCommitInfo } from '../lib/githubApi'
import { ListItem } from '@chakra-ui/react'
import { Meta } from './work'

const CommitInfo = ({ repoName }) => {
  const [latestCommitInfo, setLatestCommitInfo] = useState(null)

  useEffect(() => {
    const fetchLatestCommitInfo = async () => {
      try {
        const commitInfo = await getLatestCommitInfo(repoName)
        setLatestCommitInfo(commitInfo)
      } catch (error) {
        console.error('Error fetching latest commit info:', error)
      }
    }

    fetchLatestCommitInfo()
  }, [repoName])

  return (
    <>
      <ListItem>
        <Meta>Last Update</Meta>
        <span>
          {latestCommitInfo
            ? new Date(latestCommitInfo.commit.author.date).toLocaleDateString(
                'en-US',
                {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric'
                }
              )
            : 'No last commit information'}
        </span>
      </ListItem>
      <ListItem>
        <Meta>Last Commit</Meta>
        <span>
          {latestCommitInfo
            ? latestCommitInfo.commit.message
            : 'No last commit information'}
        </span>
      </ListItem>
    </>
  )
}

export default CommitInfo
