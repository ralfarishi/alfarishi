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
  const accentColor = useColorModeValue('#E29578', '#D4A373')

  return (
    <Layout title="Not Found">
      <Container maxW="container.md" px={6} centerContent>
        <Heading
          as="h1"
          fontSize={{ base: '6xl', md: '8xl' }}
          fontFamily="'Outfit', sans-serif"
          fontWeight="900"
          letterSpacing="-0.04em"
          lineHeight="0.9"
          color={accentColor}
          mt={10}
        >
          404
        </Heading>
        <Heading
          as="h2"
          fontSize={{ base: '2xl', md: '3xl' }}
          fontFamily="'Outfit', sans-serif"
          fontWeight="800"
          mt={6}
        >
          Lost in Space
        </Heading>
        <Text
          fontFamily="'Instrument Serif', serif"
          fontSize={{ base: 'xl', md: '2xl' }}
          fontStyle="italic"
          opacity={0.8}
          mt={4}
          textAlign="center"
        >
          The page you&apos;re looking for was not found.
        </Text>
        <Divider my={6} opacity={0.2} />
        <Box my={6} align="center">
          <Button
            as={NextLink}
            href="/"
            variant="outline"
            borderColor={accentColor}
            color={accentColor}
            borderRadius="full"
            px={8}
            height="52px"
            fontWeight="800"
            fontFamily="'Outfit', sans-serif"
            letterSpacing="0.02em"
            transition="all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
            _hover={{
              bg: accentColor,
              color: useColorModeValue('white', '#F0EAD6'),
              transform: 'translateY(-2px)',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
            }}
          >
            Return to home
          </Button>
        </Box>
      </Container>
    </Layout>
  )
}

export default NotFound

