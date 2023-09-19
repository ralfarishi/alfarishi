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
    <Layout title="Cheese Stick Koe">
      <Container>
        <Title>
          Cheese Stick Koe <Badge>2022</Badge>
        </Title>
        <P>
          Official website page for Cheese Stick Koe. Cheese Stick Koe is snack
          & cake store based in Bekasi.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML5, Bootstrap5, AOS, Swiper, etc</span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website & Mobile</span>
          </ListItem>
          <ListItem>
            <Meta>Live Preview</Meta>
            <Link href="https://cheesestick-koe.online/" target="_blank">
              cheesestick-koe.online <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <CommitInfo repoName="Cheese-Stick-Koe" />
        </List>

        <Heading as="h4" fontSize={16} my={6}>
          <Center>Preview</Center>
        </Heading>

        <WorkImage
          src="/images/works/cheese-stick-koe/cheese_stick_1.jpg"
          alt="Cheese Stick Koe"
        />
        <WorkImage
          src="/images/works/cheese-stick-koe/cheese_stick_2.jpg"
          alt="Cheese Stick Koe"
        />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
