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
      title="Sekolah JeWePe"
      description="A blog platform built with Laravel for academic management. Where Eloquent models meet academic deadlines."
      image="/images/works/sekolah-jewepe/jwp-1.png"
      slug="works/sekolah-jewepe"
    >
      <Title>
        Sekolah JeWePe{' '}
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
        <StatBox label="Stack">Laravel 10, Bootstrap 5</StatBox>
        <StatBox label="Platform">Website</StatBox>
        <StatBox label="Source">
          <Link
            href="https://github.com/ralfarishi/larablog"
            isExternal
            color={accentColor}
          >
            larablog <ExternalLinkIcon ml={1} />
          </Link>
        </StatBox>
        <CommitInfo repoName="larablog" />
      </WorkStats>

      <Box mb={16}>
        <SubTitle>The Mission</SubTitle>
        <P>
          Where Eloquent models meet academic deadlines. A blog platform built
          with Laravel because PHP is still alive and kicking. It&apos;s like a
          digital diary, but your teacher can actually grade it.
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
    </Layout>
  )
}

export default Work
