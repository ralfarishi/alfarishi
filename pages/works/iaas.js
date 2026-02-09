import {
  Badge,
  Box,
  Heading,
  Link,
  SimpleGrid,
  useColorModeValue
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
    <Layout
      title="Intan Angkasa Air Service"
      description="Corporate website for a helicopter company. Deploying high-altitude solutions with Laravel 10."
      image="/images/works/iaas/iaas-1.png"
      slug="works/iaas"
    >
      <Title>
        Intan Angkasa Air Service{' '}
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
        <StatBox label="Stack">Laravel 10</StatBox>
        <StatBox label="Platform">Website</StatBox>
        <StatBox label="Nature">Corporate</StatBox>
        <StatBox label="Live Preview">
          <Link href="https://intanangkasa.com" isExternal color={accentColor}>
            intanangkasa.com <ExternalLinkIcon ml={1} />
          </Link>
        </StatBox>
      </WorkStats>

      <Box mb={16}>
        <SubTitle>The Mission</SubTitle>
        <P>
          Deploying high-altitude solutions. A website for a helicopter company
          that helps their business take off. Higher than your localhost, but
          just as accessible. We keep the UI light so the aircraft can stay
          heavy.
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
        <WorkImage my={0} src="/images/works/iaas/iaas-1.png" alt="Home page" />
        <WorkImage
          my={0}
          src="/images/works/iaas/iaas-2.png"
          alt="About page"
        />
      </SimpleGrid>
    </Layout>
  )
}

export default Work
