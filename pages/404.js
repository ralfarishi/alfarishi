import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const NotFound = () => {
  const accentColor = useColorModeValue('#B85D3B', '#D4A373')

  return (
    <Layout title="Not Found" noindex>
      <Box px={6} textAlign="center" py={12}>
        <Heading
          as="h1"
          fontSize={{ base: '6xl', md: '8xl' }}
          fontFamily="heading"
          fontWeight="900"
          letterSpacing="-0.04em"
          lineHeight="0.9"
          color={accentColor}
          mt={6}
        >
          404
        </Heading>
        <Heading
          as="h2"
          fontSize={{ base: '2xl', md: '3xl' }}
          fontFamily="heading"
          fontWeight="800"
          mt={6}
        >
          Lost in Space
        </Heading>
        <Text
          fontFamily="serif"
          fontSize={{ base: 'xl', md: '2xl' }}
          fontStyle="italic"
          opacity={0.8}
          mt={4}
          textAlign="center"
        >
          The page you&apos;re looking for was not found.
        </Text>
        <Divider my={6} opacity={0.2} maxW="md" mx="auto" />
        <Box my={6} align="center">
          <Button as={NextLink} href="/" variant="pill-outline">
            Return to home
          </Button>
        </Box>
      </Box>
    </Layout>
  )
}

export default NotFound
