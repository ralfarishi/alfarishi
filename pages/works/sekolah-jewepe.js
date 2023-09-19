import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

import CommitInfo from '../../components/commit-info'

const Work = () => {
  return (
    <Layout title="Sekolah JeWePe">
      <Container>
        <Title>
          Sekolah JeWePe <Badge>2023</Badge>
        </Title>
        <P>
          Web based online article application for Jewepe schools was made to
          fulfill the final assignment from the Gunadarma Certification Agency
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Laravel 9 & Bootstrap</span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website</span>
          </ListItem>
          <ListItem>
            <Meta>Features</Meta>
            <span>
              Admin: CRUD article, delete comment. User: Add comment. Filter
              comments if there are rude sentences & search article{' '}
            </span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/ralfarishi/sekolah-jewepe"
              target="_blank"
            >
              github.com/ralfarishi/sekolah-jewepe <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <CommitInfo repoName="sekolah-jewepe" />
        </List>

        <Heading as="h4" fontSize={16} my={6}>
          <Center>Preview</Center>
        </Heading>

        <WorkImage
          src="/images/works/sekolah-jewepe/jwp-1.png"
          alt="jwp preview"
        />
        <WorkImage
          src="/images/works/sekolah-jewepe/jwp-4.png"
          alt="jwp preview"
        />
        <WorkImage
          src="/images/works/sekolah-jewepe/jwp-2.png"
          alt="jwp preview"
        />
        <WorkImage
          src="/images/works/sekolah-jewepe/jwp-3.png"
          alt="jwp preview"
        />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
