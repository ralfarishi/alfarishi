import {
  Badge,
  Box,
  useColorModeValue,
  Heading,
  SimpleGrid
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
import CommitInfo from '../../components/commit-info'

const Work = () => {
  return (
    <Layout
      title="Eduflex RESTful API"
      description="A RESTful API for education platforms. CRUD-ing your way to a degree with Express JS and Laravel microservices."
      image="/images/works/eduflex/edu-1.png"
      slug="works/eduflex"
    >
      <Title>
        Eduflex RESTful API{' '}
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
          2023
        </Badge>
      </Title>

      <WorkStats>
        <StatBox label="Stack">Express JS & Laravel</StatBox>
        <StatBox label="Platform">Website & Mobile (REST API)</StatBox>
        <CommitInfo repoName="eduflex-restful-api" />
      </WorkStats>

      <Box mb={16}>
        <SubTitle>The Mission</SubTitle>
        <P>
          CRUD-ing your way to a degree. A RESTful API for people who want to
          flex their brain. Status: 200 OK (Knowledge Received). It&apos;s like
          a digital university, but without the student loans.
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
        Product Preview
      </Heading>

      <SimpleGrid columns={1} spacing={{ base: 4, md: 12 }}>
        <WorkImage
          my={0}
          src="/images/works/eduflex/edu-1.png"
          alt="Micro Arsitechture"
        />
        <WorkImage
          my={0}
          src="/images/works/eduflex/edu-2.png"
          alt="API Specs"
        />
      </SimpleGrid>
    </Layout>
  )
}

export default Work
