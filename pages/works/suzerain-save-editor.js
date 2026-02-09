import {
  Badge,
  Heading,
  Link,
  SimpleGrid,
  Box,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import {
  Title,
  WorkImage,
  SubTitle,
  WorkStats,
  StatBox
} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import CommitInfo from '../../components/commit-info'

const Work = () => {
  const accentColor = useColorModeValue('#E29578', '#D4A373')

  return (
    <Layout
      title="Suzerain Save Editor"
      description="Manipulate the political fabric of Sordland with this save editor. Rewriting history, one JSON line at a time."
      image="/images/works/suzerain-save-editor/suzerain.png"
      slug="works/suzerain-save-editor"
    >
      {/* HEADER SECTION */}
      <Title>
        Suzerain The Game{' '}
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
          2025
        </Badge>
      </Title>

      {/* QUICK INFO GRID (SPEC SHEET) */}
      <WorkStats>
        <StatBox label="Stack">Bun, Vite, Tailwind</StatBox>
        <StatBox label="Platform">Web Application</StatBox>
        <StatBox label="Source">
          <Link
            href="https://github.com/ralfarishi/suzerain-save-editor"
            isExternal
            color={accentColor}
          >
            View Repo <ExternalLinkIcon ml={1} />
          </Link>
        </StatBox>
        <StatBox label="Live Preview">
          <Link
            href="https://suzerain-save-editor.vercel.app/"
            isExternal
            color={accentColor}
          >
            View Site <ExternalLinkIcon ml={1} />
          </Link>
        </StatBox>
        <CommitInfo repoName="suzerain-save-editor" />
      </WorkStats>

      {/* DESCRIPTION */}
      <Box mb={16}>
        <SubTitle>The Mission</SubTitle>
        <P>
          Because being a president is hard enough without having to live with
          your choices. Manipulate the political fabric of Sordland with this
          save editor. Rewriting history, one JSON line at a time. No
          impeachment guaranteed.
        </P>
      </Box>

      {/* FEATURE SPOTLIGHT */}
      <Box mb={16}>
        <SubTitle>Features</SubTitle>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              Intelligence Auto-fill
            </Text>
            <Text opacity={0.7} fontSize="sm">
              Advanced input detection that populates game variables instantly
              as you type.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              Nuclear Reset
            </Text>
            <Text opacity={0.7} fontSize="sm">
              Instantly revert any accidental changes to the baseline state
              without corrupting the save.
            </Text>
          </Box>
        </SimpleGrid>
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
        Product Preview
      </Heading>

      <WorkImage
        src="/images/works/suzerain-save-editor/suzerain.png"
        alt="Suzerain Preview"
      />
    </Layout>
  )
}

export default Work
