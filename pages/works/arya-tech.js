import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Arya Tech Mandiri">
      <Container>
        <Title>
          Arya Tech Mandiri <Badge>2024</Badge>
        </Title>
        <P>A company website for Arya Tech Mandiri</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React & Bootstrap 5</span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website</span>
          </ListItem>
          <ListItem>
            <Meta>Live Preview</Meta>
            <span>Not yet released</span>
          </ListItem>
        </List>

        <Heading as="h4" fontSize={16} my={6}>
          <Center>Preview</Center>
        </Heading>

        <WorkImage
          src="/images/works/arya-tech/arya-tech.png"
          alt="Home page"
        />
        <WorkImage
          src="/images/works/arya-tech/arya-tech-2.png"
          alt="About page"
        />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
