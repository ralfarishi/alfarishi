import {
  Badge,
  Box,
  Link,
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
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  const accentColor = useColorModeValue('#E29578', '#D4A373')

  return (
    <Layout
      title="Pasar Top Up"
      description="A game top-up platform with asynchronous transactions. Fueling gaming addictions with minimal friction."
      image="/images/works/pstopup/pstopup.png"
      slug="works/pstopup"
    >
      <Title>
        Pasar Top Up{' '}
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
        <StatBox label="Stack">PHP Native</StatBox>
        <StatBox label="Platform">Website (Game Top-Up)</StatBox>
        <StatBox label="Live Preview">
          <Link href="https://pasartopupid.com" isExternal color={accentColor}>
            pasartopupid.com <ExternalLinkIcon ml={1} />
          </Link>
        </StatBox>
      </WorkStats>

      <Box mb={16}>
        <SubTitle>The Mission</SubTitle>
        <P>
          Asynchronous transactions for synchronous victories. Fueling gaming
          addictions with minimal friction. Like a gas station for pixels, but
          without the smell of petrol. Top-up before your health reaches 0.
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
          src="/images/works/pstopup/pstopup.png"
          alt="Home page"
        />
        <WorkImage
          my={0}
          src="/images/works/pstopup/pstopup-2.png"
          alt="Voucher page"
        />
      </SimpleGrid>
    </Layout>
  )
}

export default Work
