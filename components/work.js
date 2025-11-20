import NextLink from 'next/link'
import NextImage from 'next/image'
import { Heading, Box, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <Link as={NextLink} href="/works">Works</Link>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const SubTitle = ({ children }) => (
  <Box>
    <Heading display="inline-block" as="h3" fontSize={15} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Box borderRadius="lg" overflow="hidden" mb={4} position="relative" width="100%">
    <NextImage
      src={src}
      alt={alt}
      width={800}
      height={600}
      style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
      loading="lazy"
    />
  </Box>
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
