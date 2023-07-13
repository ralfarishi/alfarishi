import NextLink from 'next/link'

import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import { Heading, Box, Link } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Code = ({ children, language }) => (
  <SyntaxHighlighter language={language} style={dracula}>
    {children}
  </SyntaxHighlighter>
)

export const CustomHeading = ({ children, fs, mb }) => (
  <Heading display="inline-block" as="h3" fontSize={fs} mb={mb}>
    {children}
  </Heading>
)

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/blogs" passHref>
      <Link>Blogs</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={25} mb={4}>
      {children}
    </Heading>
  </Box>
)
