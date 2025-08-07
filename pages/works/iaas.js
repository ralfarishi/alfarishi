import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  return (
    <Layout title="Intan Angkasa Air Service">
      <Container>
        <Title>
          Intan Angkasa Air Service <Badge>2023</Badge>
        </Title>
        <P>
          A company profile website created for IAAS, an aviation service
          provider. It includes a dynamic dashboard for managing client data,
          fleet details, news updates, and other company information.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Laravel 10</span>
          </ListItem>
          <ListItem>
            <Meta>Features</Meta>
            <span>
              CRUD clients, fleet, news, comment management, and more.
            </span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website</span>
          </ListItem>
          <ListItem>
            <Meta>Live Preview</Meta>
            <Link href="https://intanangkasa.com" target="_blank">
              intanangkasa.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <Heading as="h4" fontSize={16} my={6}>
          <Center>Preview</Center>
        </Heading>

        <WorkImage src="/images/works/iaas/iaas-1.png" alt="Home page" />
        <WorkImage src="/images/works/iaas/iaas-2.png" alt="About page" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
