import NextLink from 'next/link'
import NextImage from 'next/image'
import {
  Heading,
  Box,
  Link,
  Badge,
  Text,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon
} from '@chakra-ui/icons'
import { getPrevNextWorks } from '../lib/works-data'

export const Title = ({ children, year }) => (
  <Box mb={12}>
    <Box display="flex" alignItems="center" gap={3} mb={6}>
      <Link
        as={NextLink}
        href="/works"
        display="inline-flex"
        alignItems="center"
        gap={1}
        fontSize="xs"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="0.15em"
        color={useColorModeValue('blackAlpha.600', 'whiteAlpha.600')}
        transition="all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
        _hover={{
          textDecoration: 'none',
          color: useColorModeValue('black', 'white'),
          transform: 'translateX(-2px)'
        }}
      >
        <ChevronLeftIcon fontSize="sm" /> Works
      </Link>
      <Box w="1px" h="10px" bg="currentColor" opacity={0.2} />
      <Text
        fontSize="xs"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="0.15em"
        color={useColorModeValue('blackAlpha.400', 'whiteAlpha.400')}
      >
        Detail
      </Text>
    </Box>
    <Heading
      as="h2"
      fontSize={{ base: '4xl', md: '6xl' }}
      fontFamily="heading"
      fontWeight="900"
      letterSpacing="-0.04em"
      lineHeight="0.95"
      mb={1}
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      gap={3}
    >
      {children}
      {year && (
        <Badge
          px={2.5}
          py={1}
          fontSize="11px"
          fontWeight="bold"
          letterSpacing="0.1em"
          variant="subtle"
          borderRadius="full"
          colorScheme="orange"
          opacity={0.8}
        >
          {year}
        </Badge>
      )}
    </Heading>
  </Box>
)

export const SubTitle = ({ children }) => (
  <Box mb={6} borderLeft="2px solid" borderColor="inherit" pl={4}>
    <Heading
      as="h4"
      fontSize="xl"
      fontFamily="heading"
      fontWeight="700"
      opacity={0.8}
    >
      {children}
    </Heading>
  </Box>
)

export const WorkStats = ({ children }) => (
  <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4} mb={12}>
    {children}
  </SimpleGrid>
)

export const StatBox = ({ label, children, ...props }) => {
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')
  const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.100')
  const labelColor = useColorModeValue('blackAlpha.500', 'whiteAlpha.500')

  return (
    <Box
      p={{ base: 3.5, sm: 4, md: 5 }}
      borderRadius="xl"
      bg={bg}
      backdropFilter="blur(10px)"
      border="1px solid"
      borderColor={borderColor}
      minW={0}
      transition="all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
      _hover={{
        transform: 'translateY(-2px)',
        borderColor: useColorModeValue('blackAlpha.300', 'whiteAlpha.300'),
        bg: useColorModeValue('blackAlpha.100', 'whiteAlpha.100'),
        boxShadow: useColorModeValue('0 8px 30px rgba(0,0,0,0.04)', 'none')
      }}
      {...props}
    >
      <Text
        fontSize={{ base: '10px', md: '11px' }}
        fontWeight="800"
        color={labelColor}
        mb={2}
        textTransform="uppercase"
        letterSpacing={{ base: '0.1em', md: '0.18em' }}
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        display="block"
      >
        <Box as="span" opacity={0.4} fontWeight="normal" mr={1}>
          [
        </Box>
        {label}
        <Box as="span" opacity={0.4} fontWeight="normal" ml={1}>
          ]
        </Box>
      </Text>
      <Box
        fontSize="sm"
        fontWeight="700"
        letterSpacing="tight"
        lineHeight="1.4"
        wordBreak="break-word"
      >
        {children}
      </Box>
    </Box>
  )
}

export const WorkLink = ({ href, children, isExternal = true, ...props }) => {
  const accentColor = useColorModeValue('#B85D3B', '#D4A373')
  return (
    <Link
      as={isExternal ? 'a' : NextLink}
      href={href}
      isExternal={isExternal}
      color={accentColor}
      display="inline-flex"
      alignItems="center"
      gap={1}
      fontWeight="semibold"
      transition="opacity 0.2s ease"
      _hover={{ opacity: 0.8 }}
      {...props}
    >
      {children}
      {isExternal && <ExternalLinkIcon fontSize="xs" />}
    </Link>
  )
}

export const WorkIcon = ({ children }) => (
  <Box
    display="inline-flex"
    alignItems="center"
    justifyContent="center"
    w={8}
    h={8}
    borderRadius="lg"
    bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.100')}
    mr={3}
  >
    {children}
  </Box>
)

export const Meta = ({ children }) => (
  <Badge
    variant="subtle"
    bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.100')}
    color={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')}
    px={2}
    py={1}
    borderRadius="md"
    fontSize="10px"
    fontWeight="800"
    textTransform="uppercase"
    letterSpacing="0.1em"
    mr={2}
  >
    {children}
  </Badge>
)

export const WorkImage = ({
  src,
  alt,
  priority = false,
  my = { base: 6, md: 12 }
}) => (
  <Box
    borderRadius="3xl"
    overflow="hidden"
    my={my}
    border="1px solid"
    borderColor={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
    boxShadow="0 20px 40px -12px rgba(0,0,0,0.12), 0 10px 20px -18px rgba(0,0,0,0.15)"
    transform="translateZ(0)"
    transition="all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
    _hover={{
      transform: 'scale(1.01)',
      borderColor: useColorModeValue('blackAlpha.300', 'whiteAlpha.300')
    }}
  >
    <NextImage
      src={src}
      alt={alt}
      width={1200}
      height={800}
      priority={priority}
      style={{ width: '100%', height: 'auto', display: 'block' }}
      loading={priority ? 'eager' : 'lazy'}
    />
  </Box>
)

export const WorkPagination = ({ currentId }) => {
  const { prev, next } = getPrevNextWorks(currentId)
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')
  const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.100')
  const hoverBorderColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.300')
  const labelColor = useColorModeValue('blackAlpha.500', 'whiteAlpha.500')

  if (!prev && !next) return null

  return (
    <Box
      mt={{ base: 14, md: 20 }}
      pt={8}
      borderTop="1px solid"
      borderColor={borderColor}
    >
      <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
        {prev ? (
          <Box
            as={NextLink}
            href={`/works/${prev.id}`}
            p={5}
            borderRadius="2xl"
            bg={bg}
            border="1px solid"
            borderColor={borderColor}
            transition="all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            _hover={{
              borderColor: hoverBorderColor,
              transform: 'translateX(-3px)',
              textDecoration: 'none'
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              fontSize="10px"
              fontWeight="800"
              textTransform="uppercase"
              letterSpacing="0.2em"
              color={labelColor}
              mb={2}
            >
              <ChevronLeftIcon fontSize="sm" /> Previous Project
            </Box>
            <Text fontSize="md" fontWeight="800" letterSpacing="tight">
              {prev.title}
            </Text>
            <Text fontSize="xs" opacity={0.6} mt={1}>
              {prev.category}
            </Text>
          </Box>
        ) : (
          <Box />
        )}

        {next ? (
          <Box
            as={NextLink}
            href={`/works/${next.id}`}
            p={5}
            borderRadius="2xl"
            bg={bg}
            border="1px solid"
            borderColor={borderColor}
            transition="all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
            display="flex"
            flexDirection="column"
            alignItems={{ base: 'flex-start', sm: 'flex-end' }}
            textAlign={{ base: 'left', sm: 'right' }}
            _hover={{
              borderColor: hoverBorderColor,
              transform: 'translateX(3px)',
              textDecoration: 'none'
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              fontSize="10px"
              fontWeight="800"
              textTransform="uppercase"
              letterSpacing="0.2em"
              color={labelColor}
              mb={2}
            >
              Next Project <ChevronRightIcon fontSize="sm" />
            </Box>
            <Text fontSize="md" fontWeight="800" letterSpacing="tight">
              {next.title}
            </Text>
            <Text fontSize="xs" opacity={0.6} mt={1}>
              {next.category}
            </Text>
          </Box>
        ) : (
          <Box />
        )}
      </SimpleGrid>
    </Box>
  )
}
