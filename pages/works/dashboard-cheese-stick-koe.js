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
      title="Dashboard Cheese Stick Koe"
      description="Custom admin dashboard for invoice creation with auto-calculated pricing and PNG export. Monitoring the cheesy enterprise with crisp efficiency."
      image="/images/works/cheese-stick-koe/dashboard.png"
      slug="works/dashboard-cheese-stick-koe"
    >
      <Title year="2025">Dashboard Cheese Stick Koe</Title>

      <WorkStats>
        <StatBox label="Stack">
          Next.js 15, Drizzle ORM, Supabase, TypeScript
        </StatBox>
        <StatBox label="Platform">Website</StatBox>
        <StatBox label="Source">
          <WorkLink href="https://github.com/ralfarishi/cheese-stick-koe-dashboard">
            View Repo
          </WorkLink>
        </StatBox>
        <StatBox label="Deployment">Vercel</StatBox>
        <CommitInfo repoName="cheese-stick-koe-dashboard" />
      </WorkStats>

      {/* MISSION & OVERVIEW */}
      <Box mb={16}>
        <SubTitle>The Mission</SubTitle>
        <P>
          The &quot;big cheese&quot; of operational dashboards. Built for a
          commercial snack enterprise, this custom back-office system automates
          wholesale invoice calculations, order tracking, and instant receipt
          generation. Turning hours of manual receipt drafting into a sub-second
          automated export flow.
        </P>
      </Box>

      {/* CORE CAPABILITIES */}
      <Box mb={16}>
        <SubTitle>Engineering Highlights</SubTitle>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              Next.js 15 App Router
            </Text>
            <Text opacity={0.7} fontSize="sm">
              Leveraging React Server Components (RSC) and Server Actions for
              rapid data mutations, minimizing client bundle size and ensuring
              snappy navigation across administrative views.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              Drizzle ORM & Supabase
            </Text>
            <Text opacity={0.7} fontSize="sm">
              Type-safe SQL query layer interfacing with PostgreSQL on Supabase
              using Drizzle ORM and Drizzle Kit. Relational schema models
              orders, customer tiers, and invoice line items with zero runtime
              overhead.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              Dynamic Canvas PNG Generation
            </Text>
            <Text opacity={0.7} fontSize="sm">
              High-resolution client-side canvas renderer that converts styled
              DOM invoice templates into crisp, shareable PNG receipts ready for
              direct WhatsApp and email dispatches.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              Real-time Pricing Engine
            </Text>
            <Text opacity={0.7} fontSize="sm">
              Reactive form calculations handling tiered wholesale discounts,
              custom quantities, and tax calculations instantaneously as items
              are added or modified.
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

      <WorkPagination currentId="dashboard-cheese-stick-koe" />
    </Layout>
  )
}

export default Work
