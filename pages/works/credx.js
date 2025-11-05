import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Center,
  Link
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

import CommitInfo from '../../components/commit-info'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  return (
    <Layout title="CredX">
      <Container>
        <Title>
          CredX <Badge>2023</Badge>
        </Title>
        <P>A program to store personal account credential in command line</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python</span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>CLI (Command Line Interface)</span>
          </ListItem>
          <ListItem>
            <Meta>Feature</Meta>
            <span>Login & data encryption</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/ralfarishi/CredX" target="_blank">
              github.com/ralfarishi/CredX <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <CommitInfo repoName="CredX" />
        </List>

        <Heading as="h4" fontSize={16} my={6}>
          <Center>Preview</Center>
        </Heading>

        <WorkImage
          src="/images/works/credx/credx-2.png"
          alt="CredX preview 1"
        />
        <WorkImage
          src="/images/works/credx/credx-3.png"
          alt="CredX preview 2"
        />
      </Container>
    </Layout>
  )
}

export default Work
