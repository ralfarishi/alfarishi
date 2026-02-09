import {
  Badge,
  Box,
  Link,
  useColorModeValue,
  Heading,
  SimpleGrid
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
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
  const accentColor = useColorModeValue('#E29578', '#D4A373')

  return (
    <Layout
      title="Cheese Stick Koe"
      description="E-commerce catalog serving snacks over HTTP. 100% responsive, Bekasi's crunchiest exports gone digital."
      image="/images/works/cheese-stick-koe/cheese_stick_1.jpg"
      slug="works/cheese-stick-koe"
    >
      <Title>
        Cheese Stick Koe{' '}
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
        <StatBox label="Stack">Next.js, Tailwind</StatBox>
        <StatBox label="Platform">Website</StatBox>
        <StatBox label="Nature">E-Commerce Catalog</StatBox>
        <StatBox label="Live Preview">
          <Link
            href="https://cheesestick-koe.my.id/"
            isExternal
            color={accentColor}
          >
            cheesestick-koe.my.id <ExternalLinkIcon ml={1} />
          </Link>
        </StatBox>
        <CommitInfo repoName="Cheese-Stick-Koe" />
      </WorkStats>

      <Box mb={16}>
        <SubTitle>The Mission</SubTitle>
        <P>
          Serving snacks over HTTP. 100% responsive, 0% trans-fat (on the
          website, at least). Bekasi&apos;s crunchiest exports gone digital.
          Warning: May cause excessive window shopping and real-world cravings.
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
          src="/images/works/cheese-stick-koe/cheese_stick_1.jpg"
          alt="Cheese Stick Koe"
        />
        <WorkImage
          my={0}
          src="/images/works/cheese-stick-koe/cheese_stick_2.jpg"
          alt="Cheese Stick Koe"
        />
      </SimpleGrid>
    </Layout>
  )
}

export default Work
