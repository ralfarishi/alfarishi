import {
  Badge,
  Box,
  Link,
  useColorModeValue,
  SimpleGrid,
  Heading
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Title,
  WorkImage,
  SubTitle,
  WorkStats,
  StatBox
} from '../../components/work'
import P from '../../components/paragraph'
import CommitInfo from '../../components/commit-info'

const Work = () => {
  const accentColor = useColorModeValue('#E29578', '#D4A373')

  return (
    <Layout
      title="ARnimal"
      description="Bringing the zoo to your living room with augmented reality. Pokemon Go, but you actually learn something."
      image="/images/works/arnimal/arnimal-cat.png"
      slug="works/arnimal"
    >
      <Title>
        ARnimal{' '}
        <Badge
          ml={2}
          px={2}
          py={1}
          fontSize="10px"
          fontWeight="bold"
          letterSpacing="0.1em"
          variant="subtle"
          borderRadius="full"
          colorScheme="orange"
          opacity={0.8}
        >
          2022
        </Badge>
      </Title>

      <WorkStats>
        <StatBox label="Stack">Spark AR, JS</StatBox>
        <StatBox label="Platform">Instagram</StatBox>
        <StatBox label="Nature">Augmented Reality</StatBox>
        <StatBox label="Source">
          <Link
            href="https://github.com/ralfarishi/Animal-AR"
            isExternal
            color={accentColor}
          >
            Animal-AR <ExternalLinkIcon ml={1} />
          </Link>
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
    </Layout>
  )
}

export default Work
