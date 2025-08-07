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

const Work = () => (
  <Layout title="Trinias Prima Sejahtera">
    <Container>
      <Title>
        Trinias Prima Sejahtera <Badge>2023</Badge>
      </Title>
      <P>
        An official landing page developed for Trinitas Prima Sejahtera. The
        page was designed to represent the company&apos;s identity and promote
        their services in a clean and professional layout.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5, Bootstrap5, AOS, Swiper, etc</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Live Preview</Meta>
          <Link href="https://trinitasprimasejahtera.com/" target="_blank">
            trinitasprimasejahtera.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage
        src="/images/works/trinitas/trinitas_2.png"
        alt="Cheese Stick Koe"
      />
      <WorkImage
        src="/images/works/trinitas/trinitas_1.png"
        alt="Cheese Stick Koe"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
