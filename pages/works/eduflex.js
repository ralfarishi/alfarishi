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
    <Layout title="Eduflex">
      <Container>
        <Title>
          Eduflex RESTful API <Badge>2023</Badge>
        </Title>
        <P>
          A microservices system utilizing RESTful API has been implemented for
          the Eduflex online course platform.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Express JS & Laravel 10</span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website & Mobile</span>
          </ListItem>
          <CommitInfo repoName="eduflex-restful-api" />
        </List>

        <Heading as="h4" fontSize={16} my={6}>
          <Center>Preview</Center>
        </Heading>

        <WorkImage
          src="/images/works/eduflex/edu-1.png"
          alt="Micro Arsitechture"
        />
        <WorkImage src="/images/works/eduflex/edu-2.png" alt="API Specs" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
