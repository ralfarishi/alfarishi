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

const Work = () => {
  return (
    <Layout
      title="Arya Tech Mandiri"
      description="The digital storefront for a tech company that actually does tech. Clean lines, zero bugs, and 100% corporate chic."
      image="/images/works/arya-tech/arya-tech.png"
      slug="works/arya-tech"
    >
      <Title>
        Arya Tech Mandiri{' '}
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
          2024
        </Badge>
      </Title>

      <WorkStats>
        <StatBox label="Stack">React, Bootstrap 5</StatBox>
        <StatBox label="Platform">Website</StatBox>
        <StatBox label="Nature">Corporate Chic</StatBox>
        <StatBox label="Live Preview">Coming Soon</StatBox>
      </WorkStats>

      <Box mb={16}>
        <SubTitle>The Mission</SubTitle>
        <P>
          The digital storefront for a tech company that actually does tech.
          Clean lines, zero bugs (mostly), and 100% corporate chic. A testament
          to the power of a well-organized <code>&lt;div&gt;</code>.
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
          src="/images/works/arya-tech/arya-tech.png"
          alt="Home page"
        />
        <WorkImage
          my={0}
          src="/images/works/arya-tech/arya-tech-2.png"
          alt="About page"
        />
      </SimpleGrid>
    </Layout>
  )
}

export default Work
