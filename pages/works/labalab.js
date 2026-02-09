import {
  Badge,
  Heading,
  SimpleGrid,
  Box,
  Text,
  useColorModeValue,
  Link
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

const Work = () => {
  const accentColor = useColorModeValue('#E29578', '#D4A373')
  return (
    <Layout title="LabaLab">
      {/* HEADER SECTION */}
      <Title>
        LabaLab{' '}
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
          2026
        </Badge>
      </Title>

      {/* QUICK INFO GRID */}
      <WorkStats>
        <StatBox label="Stack">Next.js, Drizzle, Supabase, Tailwind</StatBox>
        <StatBox label="Platform">Website</StatBox>
        <StatBox label="Source">
          <Link
            href="https://github.com/ralfarishi/labalab"
            isExternal
            color={accentColor}
          >
            View Repo <ExternalLinkIcon ml={1} />
          </Link>
        </StatBox>
        <StatBox label="Live Preview">
          <Link
            href="https://labalab.vercel.app/"
            isExternal
            color={accentColor}
          >
            View Site <ExternalLinkIcon ml={1} />
          </Link>
        </StatBox>
      </WorkStats>

      {/* MISSION DESCRIPTION */}
      <Box mb={16}>
        <SubTitle>The Mission</SubTitle>
        <P>
          Inventory management for people who&apos;d rather be doing literally
          anything else. LabaLab turns retail chaos into structured data,
          proving that productivity isn&apos;t just for people in white lab
          coats. We&apos;re bringing order to the stockroom, one barcode at a
          time.
        </P>
      </Box>

      {/* FEATURE SPOTLIGHT */}
      <Box mb={16}>
        <SubTitle>The Tech Specs</SubTitle>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              Wireless Synergy
            </Text>
            <Text opacity={0.7} fontSize="sm">
              Bluetooth scanner pairing that actually works. We&apos;ve solved
              the age-old mystery of &quot;why won&apos;t it connect?&quot; so
              you can start scanning instead of swearing.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              The Inventory Inquisition
            </Text>
            <Text opacity={0.7} fontSize="sm">
              Methodical stock-checking for the meticulous. Cross-reference your
              physical reality with our digital one. If it&apos;s not in the
              app, did it even exist?
            </Text>
          </Box>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              Digital Cash Cow
            </Text>
            <Text opacity={0.7} fontSize="sm">
              A POS flow so streamlined it makes parting with money feel like a
              premium experience. Mobile-ready for when the queue stretches out
              the door.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              Crystal Ball Analytics
            </Text>
            <Text opacity={0.7} fontSize="sm">
              Real-time shift reports that tell you exactly how the day is
              going. Data-driven insights to help you decide if it&apos;s a
              &quot;coffee&quot; day or a &quot;stronger coffee&quot; day.
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
        Interface Overview
      </Heading>

      <SimpleGrid columns={1} spacing={{ base: 4, md: 12 }}>
        <WorkImage
          my={0}
          src="/images/works/labalab/dashboard.png"
          alt="LabaLab Dashboard"
        />
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 4, md: 6 }}>
          <WorkImage
            my={0}
            src="/images/works/labalab/pos.png"
            alt="LabaLab POS"
          />
          <WorkImage
            my={0}
            src="/images/works/labalab/inventory.png"
            alt="LabaLab Inventory"
          />
        </SimpleGrid>
        <WorkImage
          my={0}
          src="/images/works/labalab/scanner-pairing.png"
          alt="LabaLab Scanner Pairing"
        />
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 4, md: 6 }}>
          <WorkImage
            my={0}
            src="/images/works/labalab/stock-audit.png"
            alt="LabaLab Stock Audit"
          />
          <WorkImage
            my={0}
            src="/images/works/labalab/shift-report.png"
            alt="LabaLab Shift Report"
          />
        </SimpleGrid>
      </SimpleGrid>
    </Layout>
  )
}

export default Work
