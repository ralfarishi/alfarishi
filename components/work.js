import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/works" passHref>
      <Link>Works</Link>
    </NextLink>
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

export const WorkImage = ({ src, alt, width }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} width={width} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
