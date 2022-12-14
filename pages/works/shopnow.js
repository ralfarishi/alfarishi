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
  <Layout title="Shop Now">
    <Container>
      <Title>
        Shop Now <Badge>2022</Badge>
      </Title>
      <P>
        A useful website for shopping from anywhere and anytime. Provides a wide
        range of products such as gadgets, furniture, fashion, and others.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Laravel</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website Only</span>
        </ListItem>
        <ListItem>
          <Meta>Features</Meta>
          <span>
            Login/Logout, Checkout with Midtrans, Shipping Information
          </span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/ralfarishi/Larastore" target="_blank">
            github.com/ralfarishi/Larastore <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/works/shopnow-thumb.png" alt="shopnow" />
      <WorkImage src="/images/works/shopnow-category.png" alt="shopnow" />
      <WorkImage src="/images/works/shopnow-product.png" alt="shopnow" />
      <WorkImage src="/images/works/shopnow-checkout.png" alt="shopnow" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
