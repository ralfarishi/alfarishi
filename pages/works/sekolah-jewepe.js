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
          A web-based article application developed for Jewepe Schools. This
          project was created to fulfill the final assignment requirement from
          the Gunadarma Certification Agency, focusing on functionality and
          simplicity for school use.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Laravel 10, Bootstrap 5 & AOS </span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website</span>
          </ListItem>
          <ListItem>
            <Meta>Features</Meta>
            <span>
              CRUD article, comment management, category management, make
              comment, search article.
            </span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/ralfarishi/larablog" target="_blank">
              github.com/ralfarishi/larablog <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <CommitInfo repoName="larablog" />
        </List>

        <Heading as="h4" fontSize={16} my={6}>
          <Center>Preview</Center>
        </Heading>

        <WorkImage
          src="/images/works/sekolah-jewepe/jwp-1.png"
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
        <WorkImage
          src="/images/works/sekolah-jewepe/jwp-4.png"
          alt="jwp preview"
        />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
