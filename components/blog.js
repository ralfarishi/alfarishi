import NextLink from 'next/link'
import { useState } from 'react'

import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import {
  Heading,
  Box,
  Link,
  Center,
  Image,
  Button,
  useClipboard
} from '@chakra-ui/react'
import { ChevronRightIcon, CopyIcon } from '@chakra-ui/icons'
import CopyToClipboard from 'react-copy-to-clipboard'

export const Code = ({ children, language }) => {
  const [value, setValue] = useState(children)
  const { hasCopied, onCopy } = useClipboard(value)

  return (
    <>
      <Box position="relative" overflow="auto">
        <CopyToClipboard text={children}>
          <Box
            as="button"
            position="absolute"
            right={2}
            top={2}
            p={1}
            onClick={e => {
              e.stopPropagation()
            }}
          >
            <Button variant="ghost" size="xs" onClick={onCopy}>
              {hasCopied ? 'Copied' : <CopyIcon boxSize={4} />}
            </Button>
          </Box>
        </CopyToClipboard>

        <Box ml={8} mr={2}>
          <SyntaxHighlighter language={language} style={dracula}>
            {children}
          </SyntaxHighlighter>
        </Box>
      </Box>
    </>
  )
}

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

export const BlogImage = ({ src, alt, w }) => (
  <Center>
    <Image src={src} mb={4} w={w} alt={alt} />
  </Center>
)
