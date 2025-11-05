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
import CommitInfo from '../../components/commit-info'

const Work = () => {
  return (
    <Layout title="Dashboard Cheese Stick Koe">
      <Container>
        <Title>
          Dashboard Cheese Stick Koe <Badge>2025</Badge>
        </Title>
        <P>
          A custom web-based dashboard designed to streamline invoice creation
          and management for a Cheese Stick Koe company. Features include
          product selection, auto-calculated pricing, export invoice to png, and
          a responsive UI optimized for daily operational use.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js 15, Supabase, Prisma, Shadcn, Tailwind</span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website</span>
          </ListItem>
          <ListItem>
            <Meta>Features</Meta>
            <span>
              Login, CRUD (product, size&price, invoice), export invoice to png
            </span>
          </ListItem>
          <ListItem>
            <Meta>Live Preview</Meta>
            <span>Private 😁</span>
          </ListItem>

          <CommitInfo repoName="cheese-stick-koe-dashboard" />
        </List>

        <Heading as="h4" fontSize={16} my={6}>
          <Center>Preview</Center>
        </Heading>

        <WorkImage
          src="/images/works/cheese-stick-koe/dashboard.png"
          alt="Home page"
        />
        <WorkImage
          src="/images/works/cheese-stick-koe/create-invoice.png"
          alt="Create Invoice page"
        />
        <WorkImage
          src="/images/works/cheese-stick-koe/export-to-image.png"
          alt="Export to PNG"
        />
      </Container>
    </Layout>
  )
}

export default Work
