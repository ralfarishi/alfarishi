import { Heading, SimpleGrid, Box, Text } from '@chakra-ui/react'
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
import Layout from '../../components/layouts/article'
import CommitInfo from '../../components/commit-info'

const Work = () => {
  return (
    <Layout
      title="Suzerain Save Editor"
      description="Manipulate the political fabric of Sordland with this save editor. Rewriting history, one JSON line at a time."
      image="/images/works/suzerain-save-editor/suzerain.png"
      slug="works/suzerain-save-editor"
    >
      {/* HEADER SECTION */}
      <Title year="2025">Suzerain The Game</Title>

      {/* QUICK INFO GRID (SPEC SHEET) */}
      <WorkStats>
        <StatBox label="Stack">Bun, Vite, Tailwind, TypeScript</StatBox>
        <StatBox label="Platform">Web Application</StatBox>
        <StatBox label="Source">
          <WorkLink href="https://github.com/ralfarishi/suzerain-save-editor">
            View Repo
          </WorkLink>
        </StatBox>
        <StatBox label="Live Preview">
          <WorkLink href="https://suzerain-save-editor.vercel.app/">
            View Site
          </WorkLink>
        </StatBox>
        <CommitInfo repoName="suzerain-save-editor" />
      </WorkStats>

      {/* DESCRIPTION */}
      <Box mb={16}>
        <SubTitle>The Mission</SubTitle>
        <P>
          Because being a president is hard enough without having to live with
          your choices. Manipulate the political fabric of Sordland with this
          interactive save editor. Rewriting history, balancing the national
          budget, and averting geopolitical crises — one JSON line at a time. No
          impeachment guaranteed.
        </P>
      </Box>

      {/* FEATURE SPOTLIGHT */}
      <Box mb={16}>
        <SubTitle>Engineering & Features</SubTitle>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              Client-Side Local Parser
            </Text>
            <Text opacity={0.7} fontSize="sm">
              Processes proprietary nested game save files 100% locally
              in-browser using modern Web APIs, guaranteeing absolute privacy,
              zero server uploads, and instant processing of multi-megabyte save
              states.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              Fuzzy Variable Auto-fill
            </Text>
            <Text opacity={0.7} fontSize="sm">
              Search and auto-completion engine indexing hundreds of political
              variables, economic indices, and faction relationships with live
              validation to prevent game save corruption.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              Non-Destructive Delta Exports
            </Text>
            <Text opacity={0.7} fontSize="sm">
              Maintains original save file structure, headers, and metadata
              formatting. Only targeted key-value pairs are modified, ensuring
              seamless game engine re-hydration without crash triggers.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              Instant State Snapshot & Revert
            </Text>
            <Text opacity={0.7} fontSize="sm">
              In-memory state staging allowing players to preview variable
              changes, calculate budget impacts, and roll back unintended edits
              with a single click before export.
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
        priority
        src="/images/works/suzerain-save-editor/suzerain.png"
        alt="Suzerain Preview"
      />

      {/* BOTTOM PAGINATION */}
      <WorkPagination currentId="suzerain-save-editor" />
    </Layout>
  )
}

export default Work
