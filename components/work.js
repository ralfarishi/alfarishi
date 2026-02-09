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

export const Title = ({ children }) => (
  <Box mb={12}>
    <Box display="flex" alignItems="center" gap={3} mb={6}>
      <Link
        as={NextLink}
        href="/works"
        fontSize="xs"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="0.2em"
        color={useColorModeValue('blackAlpha.600', 'whiteAlpha.600')}
        transition="all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
        _hover={{
          textDecoration: 'none',
          color: useColorModeValue('black', 'white'),
          transform: 'translateX(-2px)'
        }}
      >
        Works
      </Link>
      <Box w="1px" h="10px" bg="currentColor" opacity={0.2} />
      <Text
        fontSize="xs"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="0.2em"
        color={useColorModeValue('blackAlpha.400', 'whiteAlpha.400')}
      >
        Detail
      </Text>
    </Box>
    <Heading
      as="h2"
      fontSize={{ base: '4xl', md: '6xl' }}
      fontFamily="'Outfit', sans-serif"
      fontWeight="900"
      letterSpacing="-0.04em"
      lineHeight="0.95"
      mb={1}
    >
      {children}
    </Heading>
  </Box>
)

export const SubTitle = ({ children }) => (
  <Box mb={6} borderLeft="2px solid" borderColor="inherit" pl={4}>
    <Heading
      as="h4"
      fontSize="xl"
      fontFamily="'Outfit', sans-serif"
      fontWeight="700"
      opacity={0.8}
    >
      {children}
    </Heading>
  </Box>
)

export const WorkStats = ({ children }) => (
  <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} mb={12}>
    {children}
  </SimpleGrid>
)

export const StatBox = ({ label, children, ...props }) => {
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')
  const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.100')
  const labelColor = useColorModeValue('blackAlpha.500', 'whiteAlpha.500')

  return (
    <Box
      p={5}
      borderRadius="xl"
      bg={bg}
      backdropFilter="blur(10px)"
      border="1px solid"
      borderColor={borderColor}
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
        fontSize="10px"
        fontWeight="800"
        color={labelColor}
        mb={2}
        textTransform="uppercase"
        letterSpacing="0.25em"
        display="flex"
        alignItems="center"
        _before={{
          content: '"["',
          mr: 1.5,
          opacity: 0.4,
          fontWeight: 'normal'
        }}
        _after={{
          content: '"]"',
          ml: 1.5,
          opacity: 0.4,
          fontWeight: 'normal'
        }}
      >
        {label}
      </Text>
      <Box
        fontSize="sm"
        fontWeight="700"
        letterSpacing="tight"
        lineHeight="1.4"
      >
        {children}
      </Box>
    </Box>
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

export const WorkImage = ({ src, alt, my = { base: 6, md: 12 } }) => (
  <Box
    borderRadius="3xl"
    overflow="hidden"
    my={my}
    boxShadow="0 30px 60px -12px rgba(0,0,0,0.15), 0 18px 36px -18px rgba(0,0,0,0.2)"
    transform="translateZ(0)"
    transition="transform 0.5s ease"
    _hover={{ transform: 'scale(1.01)' }}
  >
    <NextImage
      src={src}
      alt={alt}
      width={1200}
      height={800}
      style={{ width: '100%', height: 'auto' }}
      loading="lazy"
    />
  </Box>
)
