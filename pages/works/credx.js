import {
  Badge,
  Box,
  Link,
  Text,
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
      title="CredX"
      description="Command-line credential management with encryption. A digital vault in your terminal for secure password storage."
      image="/images/works/credx/credx-2.png"
      slug="works/credx"
    >
      <Title>
        CredX{' '}
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
        <StatBox label="Stack">Python</StatBox>
        <StatBox label="Platform">CLI</StatBox>
        <StatBox label="Security">Encrypted</StatBox>
        <StatBox label="Source">
          <Link
            href="https://github.com/ralfarishi/CredX"
            isExternal
            color={accentColor}
          >
            CredX <ExternalLinkIcon ml={1} />
          </Link>
        </StatBox>
        <CommitInfo repoName="CredX" />
      </WorkStats>

      <Box mb={16}>
        <SubTitle>The Mission</SubTitle>
        <P>
          Command-line credential crating. Because &quot;123456&quot; isn&apos;t
          a security strategy, it&apos;s a prayer. A digital vault in your
          terminal.
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
        Terminal Preview
      </Heading>

      <SimpleGrid columns={1} spacing={{ base: 4, md: 12 }}>
        <WorkImage
          my={0}
          src="/images/works/credx/credx-2.png"
          alt="CredX preview 1"
        />
        <WorkImage
          my={0}
          src="/images/works/credx/credx-3.png"
          alt="CredX preview 2"
        />
      </SimpleGrid>
    </Layout>
  )
}

export default Work
