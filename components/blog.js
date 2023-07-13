import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import { Heading } from '@chakra-ui/react'

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
