import { Badge, Box, Heading, SimpleGrid } from '@chakra-ui/react'
import {
  Title,
  WorkImage,
  SubTitle,
  WorkStats,
  StatBox
} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout
      title="Dashboard Cheese Stick Koe"
      description="Custom admin dashboard for invoice creation with auto-calculated pricing and PNG export. Monitoring the cheesy enterprise with crisp efficiency."
      image="/images/works/cheese-stick-koe/dashboard.png"
      slug="works/dashboard-cheese-stick-koe"
    >
      <Title>
        Dashboard Cheese Stick Koe{' '}
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

      <WorkStats>
        <StatBox label="Stack">Next.js 15, Prisma, Supabase</StatBox>
        <StatBox label="Platform">Website</StatBox>
        <StatBox label="Source">Private</StatBox>
        <StatBox label="Live Preview">Private</StatBox>
      </WorkStats>

      <Box mb={16}>
        <SubTitle>The Mission</SubTitle>
        <P>
          The &quot;big cheese&quot; of data visualization. A custom dashboard
          designed to streamline invoice creation. Features include
          auto-calculated pricing, export to PNG, and a UI as crisp as the
          snacks themselves. Monitoring the cheesy enterprise with crisp
          efficiency.
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
          src="/images/works/cheese-stick-koe/dashboard.png"
          alt="Home page"
        />
        <WorkImage
          my={0}
          src="/images/works/cheese-stick-koe/create-invoice.png"
          alt="Create Invoice page"
        />
        <WorkImage
          my={0}
          src="/images/works/cheese-stick-koe/export-to-image.png"
          alt="Export to PNG"
        />
      </SimpleGrid>
    </Layout>
  )
}

export default Work
