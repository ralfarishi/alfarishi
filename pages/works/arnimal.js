import { Box, SimpleGrid, Heading } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import {
  Title,
  WorkImage,
  SubTitle,
  WorkStats,
  StatBox,
  WorkLink,
  WorkPagination
} from '../../components/work'
import P from '../../components/paragraph'
import CommitInfo from '../../components/commit-info'

const Work = () => {
  return (
    <Layout
      title="ARnimal"
      description="Bringing the zoo to your living room with augmented reality. Pokemon Go, but you actually learn something."
      image="/images/works/arnimal/arnimal-cat.png"
      slug="works/arnimal"
    >
      <Title year="2022">ARnimal</Title>

      <WorkStats>
        <StatBox label="Stack">Spark AR, JavaScript, 3D</StatBox>
        <StatBox label="Platform">Instagram</StatBox>
        <StatBox label="Nature">Augmented Reality</StatBox>
        <StatBox label="Source">
          <WorkLink href="https://github.com/ralfarishi/Animal-AR">
            Animal-AR
          </WorkLink>
        </StatBox>
        <CommitInfo repoName="Animal-AR" />
      </WorkStats>

      <Box mb={16}>
        <SubTitle>The Mission</SubTitle>
        <P>
          Bringing the zoo to your living room without the smell or the danger.
          Pokemon Go, but you actually learn something. Augmenting reality
          because the base version had too many bugs. Animals in 3D, physics in
          C#.
        </P>
      </Box>

      <Heading
        as="h4"
        fontSize={16}
        mb={6}
        textAlign="center"
        opacity={0.5}
        textTransform="uppercase"
        letterSpacing="widest"
      >
        Experience Preview
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 4, md: 6 }}
        mb={6}
      >
        <WorkImage
          priority
          my={0}
          src="/images/works/arnimal/arnimal-cat.png"
          alt="arnimal"
        />
        <WorkImage
          my={0}
          src="/images/works/arnimal/arnimal-elephant.png"
          alt="arnimal"
        />
        <WorkImage
          my={0}
          src="/images/works/arnimal/arnimal-rabbit.png"
          alt="arnimal"
        />
        <WorkImage
          my={0}
          src="/images/works/arnimal/arnimal-wolf.png"
          alt="arnimal"
        />
      </SimpleGrid>

      <Box maxW="400px" mx="auto">
        <WorkImage
          src="/images/works/arnimal/arnimal-eagle.png"
          alt="arnimal"
        />
      </Box>

      <WorkPagination currentId="arnimal" />
    </Layout>
  )
}

export default Work
