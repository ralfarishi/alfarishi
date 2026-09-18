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
      title="Eduflex RESTful API"
      description="A RESTful API for education platforms. CRUD-ing your way to a degree with Express JS and Laravel microservices."
      image="/images/works/eduflex/edu-1.png"
      slug="works/eduflex"
    >
      <Title year="2023">Eduflex RESTful API</Title>

      <WorkStats>
        <StatBox label="Stack">Express.js, Laravel, REST API</StatBox>
        <StatBox label="Platform">Website & Mobile (REST API)</StatBox>
        <StatBox label="Source">
          <WorkLink href="https://github.com/ralfarishi/eduflex-restful-api">
            View Repo
          </WorkLink>
        </StatBox>
        <CommitInfo repoName="eduflex-restful-api" />
      </WorkStats>

      {/* MISSION & OVERVIEW */}
      <Box mb={16}>
        <SubTitle>The Mission</SubTitle>
        <P>
          Architecting scalable education infrastructure for multi-platform
          delivery. Eduflex is a decoupled RESTful API ecosystem designed to
          power student LMS portals, course enrollments, and real-time grading
          pipelines across both mobile and web clients. Built with resilience,
          strict input validation, and clear API contract specifications.
        </P>
      </Box>

      {/* API SPECIFICATIONS */}
      <Box mb={16}>
        <SubTitle>Architecture & API Design</SubTitle>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              Decoupled Service Flow
            </Text>
            <Text opacity={0.7} fontSize="sm">
              Combines Express.js for high-throughput, low-latency
              micro-endpoints alongside Laravel for complex relational business
              logic, background queues, and reporting.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              JWT Stateless Authentication
            </Text>
            <Text opacity={0.7} fontSize="sm">
              Secure token-based authentication using JSON Web Tokens (JWT) with
              role-based access control (RBAC) distinguishing students,
              instructors, and system administrators.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              Strict Input Validation
            </Text>
            <Text opacity={0.7} fontSize="sm">
              Schema-driven request sanitization and type enforcement protecting
              endpoints against SQL injection, parameter tampering, and
              unauthorized resource mutation.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              Standardized JSON Payloads
            </Text>
            <Text opacity={0.7} fontSize="sm">
              Consistent API envelope structure with explicit HTTP status codes,
              structured error payloads, and paginated query cursors for
              seamless mobile client consumption.
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
          src="/images/works/eduflex/edu-1.png"
          alt="Microservice Architecture"
        />
        <WorkImage
          my={0}
          src="/images/works/eduflex/edu-2.png"
          alt="API Specs"
        />
      </SimpleGrid>

      <WorkPagination currentId="eduflex" />
    </Layout>
  )
}

export default Work
