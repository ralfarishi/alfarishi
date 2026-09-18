import { useRouter } from 'next/router'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import BackToTop from '../back-to-top'

const Main = ({ children }) => {
  const router = useRouter()
  return (
    <Box as="main" pb={{ base: 28, md: 16 }}>
      <NavBar path={router.asPath} />

      <Container
        maxW="container.lg"
        px={{ base: 4, md: 8 }}
        pt={{ base: 20, md: 24 }}
      >
        {children}

        <Footer />
      </Container>

      <BackToTop />
    </Box>
  )
}

export default Main
