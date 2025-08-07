import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Center,
  Link
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import CommitInfo from '../../components/commit-info'

const Work = () => {
  return (
    <Layout title="Suzerain The Game">
      <Container>
        <Title>
          Suzerain The Game <Badge>2025</Badge>
        </Title>
        <P>
          A web-based tool that allows players to modify their save data in the
          political role-playing game Suzerain. It provides an intuitive
          interface to edit decisions, character attributes, and key variables.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS, Javascript</span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website</span>
          </ListItem>
          <ListItem>
            <Meta>Features</Meta>
            <span>Auto fill input, reset input value, dark mode</span>
          </ListItem>
          <ListItem>
            <Meta>Live Preview</Meta>
            <Link
              href="https://ralfarishi.github.io/suzerain-save-modifier/"
              target="_blank"
            >
              ralfarishi.github.io/suzerain-save-modifier
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <CommitInfo repoName="suzerain-save-modifier" />
        </List>

        <Heading as="h4" fontSize={16} my={6}>
          <Center>Preview</Center>
        </Heading>

        <WorkImage
          src="/images/works/suzerain-file-modifier/suzerain.png"
          alt="Home page"
        />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
