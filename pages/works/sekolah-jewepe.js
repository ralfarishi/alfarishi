import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
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
      title="Sekolah JeWePe"
      description="A blog platform built with Laravel for academic management. Where Eloquent models meet academic deadlines."
      image="/images/works/sekolah-jewepe/jwp-1.png"
      slug="works/sekolah-jewepe"
    >
      <Title year="2023">Sekolah JeWePe</Title>

      <WorkStats>
        <StatBox label="Stack">Laravel 13, Livewire 4, TALL Stack</StatBox>
        <StatBox label="Platform">Website</StatBox>
        <StatBox label="Source">
          <WorkLink href="https://github.com/ralfarishi/larablog">
            larablog
          </WorkLink>
        </StatBox>
        <CommitInfo repoName="larablog" />
      </WorkStats>

      {/* MISSION & OVERVIEW */}
      <Box mb={16}>
        <SubTitle>The Mission</SubTitle>
        <P>
          Where Eloquent models meet academic deadlines. Built as an
          institutional content hub for education management, Sekolah JeWePe
          provides a full-featured publishing platform with multi-role
          authoring, real-time editorial feedback, and instant search. Proving
          that modern PHP with the TALL stack is lightning-fast, reactive, and
          remarkably expressive.
        </P>
      </Box>

      {/* TECHNICAL SPECIFICATIONS */}
      <Box mb={16}>
        <SubTitle>Technical Specifications</SubTitle>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              TALL Stack & Livewire 4
            </Text>
            <Text opacity={0.7} fontSize="sm">
              Single-page application (SPA) responsiveness without heavy client
              framework overhead. Livewire delivers reactive server-driven UI
              state, instant input validation, and zero full-page reloads.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              Laravel Reverb WebSockets
            </Text>
            <Text opacity={0.7} fontSize="sm">
              First-party real-time broadcasting server powering instant
              notification pings, live comment threads, and active user presence
              tracking across article drafting sessions.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              Headless Tiptap JSON Editor
            </Text>
            <Text opacity={0.7} fontSize="sm">
              Custom rich-text drafting environment serializing structured JSON
              nodes instead of messy raw HTML. Supports inline media embeds,
              code blocks, and clean responsive output.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              Laravel Scout Full-Text Search
            </Text>
            <Text opacity={0.7} fontSize="sm">
              Indexed search engine enabling sub-100ms article indexing,
              category cross-referencing, and fuzzy keyword matching across
              historical archives.
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

      <SimpleGrid columns={1} spacing={{ base: 4, md: 12 }}>
        <WorkImage
          priority
          my={0}
          src="/images/works/sekolah-jewepe/jwp-1.png"
          alt="jwp preview"
        />
        <WorkImage
          my={0}
          src="/images/works/sekolah-jewepe/jwp-2.png"
          alt="jwp preview"
        />
        <WorkImage
          my={0}
          src="/images/works/sekolah-jewepe/jwp-3.png"
          alt="jwp preview"
        />
        <WorkImage
          my={0}
          src="/images/works/sekolah-jewepe/jwp-4.png"
          alt="jwp preview"
        />
      </SimpleGrid>

      <WorkPagination currentId="sekolah-jewepe" />
    </Layout>
  )
}

export default Work
