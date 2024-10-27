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
    <Layout title="Pasar Top Up">
      <Container>
        <Title>
          Pasar Top Up <Badge>2024</Badge>
        </Title>
        <P>
          A website designed to provide gamers with a quick and secure way to
          purchase in-game credits. I did not made the whole website, but i
          maintained and refactored some of the web code functionality.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>PHP Native</span>
          </ListItem>
          <ListItem>
            <Meta>Features</Meta>
            <span>
              Authentication, automatic transaction for 24 hours, find my
              transaction,
            </span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website</span>
          </ListItem>
          <ListItem>
            <Meta>Live Preview</Meta>
            <Link href="https://pasartopupid.com" target="_blank">
              pasartopupid.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <Heading as="h4" fontSize={16} my={6}>
          <Center>Preview</Center>
        </Heading>

        <WorkImage src="/images/works/pstopup/pstopup.png" alt="Home page" />
        <WorkImage
          src="/images/works/pstopup/pstopup-2.png"
          alt="Voucher page"
        />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
