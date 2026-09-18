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
      title="CredX"
      description="Command-line credential management with encryption. A digital vault in your terminal for secure password storage."
      image="/images/works/credx/credx-2.png"
      slug="works/credx"
    >
      <Title year="2023">CredX</Title>

      <WorkStats>
        <StatBox label="Stack">Python, CLI Tool, Cryptography</StatBox>
        <StatBox label="Platform">CLI (Terminal)</StatBox>
        <StatBox label="Security">AES Encryption</StatBox>
        <StatBox label="Source">
          <WorkLink href="https://github.com/ralfarishi/CredX">CredX</WorkLink>
        </StatBox>
        <CommitInfo repoName="CredX" />
      </WorkStats>

      {/* MISSION & OVERVIEW */}
      <Box mb={16}>
        <SubTitle>The Mission</SubTitle>
        <P>
          Command-line credential management for engineers who live in the
          terminal. Because &quot;123456&quot; isn&apos;t a security strategy,
          it&apos;s a prayer. CredX provides a hardened local vault where
          sensitive access tokens, secrets, and credentials can be generated,
          securely encrypted, and managed without relying on third-party cloud
          intermediaries.
        </P>
      </Box>

      {/* TECHNICAL HIGHLIGHTS */}
      <Box mb={16}>
        <SubTitle>Technical Specifications</SubTitle>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              AES-256 Encryption
            </Text>
            <Text opacity={0.7} fontSize="sm">
              All stored records are encrypted at rest using Python&apos;s
              cryptography primitives. Each vault item is protected by key
              derivation with unique salts, preventing rainbow table attacks.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              Master Key Hashing
            </Text>
            <Text opacity={0.7} fontSize="sm">
              Single master authentication key using PBKDF2 with SHA-256.
              Zero-knowledge local verification ensures master passwords are
              never stored in plaintext on disk.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              Entropy Password Generator
            </Text>
            <Text opacity={0.7} fontSize="sm">
              Built-in cryptographically secure pseudo-random number generator
              (CSPRNG) that outputs configurable alphanumeric and
              special-character passwords with custom entropy thresholds.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="800" fontSize="lg" mb={2}>
              Zero-Dependency Terminal UX
            </Text>
            <Text opacity={0.7} fontSize="sm">
              Lightweight CLI interface designed for fast pipeline integration,
              shell scripting, and quick clipboard synchronization without
              bloated external dependencies.
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
        Terminal Preview
      </Heading>

      <SimpleGrid columns={1} spacing={{ base: 4, md: 12 }}>
        <WorkImage
          priority
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

      <WorkPagination currentId="credx" />
    </Layout>
  )
}

export default Work
