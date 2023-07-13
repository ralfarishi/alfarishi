// import Head from 'next/head'
import { useRouter } from 'next/router'

import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

// import { DefaultSeo } from 'next-seo'

const Main = ({ children }) => {
  const router = useRouter()
  return (
    <Box as="main" pb={8}>
      {/* <Head>
        
        <meta name="description" content="Ramiza's homepage" />
        <meta name="author" content="Ramiza Al Farishi" />
        <meta name="twitter:title" content="Ramiza Al Farishi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Ramiza Al Farishi" />
        <meta name="og:title" content="Ramiza Al Farishi" />
        <title>Ramiza Al Farishi - Homepage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <DefaultSeo {...seo} />
      </Head> */}

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
