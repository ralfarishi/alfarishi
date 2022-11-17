import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Box
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="ARnimal">
    <Container>
      <Title>
        ARnimal <Badge>2022</Badge>
      </Title>
      <P>
        AR project that is useful for animal education for children. There are
        five different types of animals and there are fun facts about each
        animal.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Instagram (Android & iOS)</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, Spark AR</span>
        </ListItem>
        <ListItem>
          <Meta>Feature</Meta>
          <span>User can tap the phone to change the animal</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/ralfarishi/Animal-AR" target="_blank">
            github.com/ralfarishi/Animal-AR <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      {/* <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://itunes.apple.com/app/id1035645520?mt=8"
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/works/appstore.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box> */}

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/arnimal-cat.png" alt="arnimal" />
        <WorkImage src="/images/works/arnimal-elephant.png" alt="arnimal" />
        <WorkImage src="/images/works/arnimal-rabbit.png" alt="arnimal" />
        <WorkImage src="/images/works/arnimal-wolf.png" alt="arnimal" />
      </SimpleGrid>
      <Box align="center" my={6}>
        <WorkImage
          src="/images/works/arnimal-eagle.png"
          alt="arnimal"
          width="250px"
        />
      </Box>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
