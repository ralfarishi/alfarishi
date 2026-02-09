import { Box, Link, Text, useColorModeValue } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Certificate = ({ link, name, year }) => {
  const bgColor = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
  const accentColor = useColorModeValue('#E29578', '#D4A373')

  return (
    <Box as="div" w="full" mb={3}>
      <Link
        href={link}
        isExternal
        style={{ textDecoration: 'none' }}
        group="true"
        display="block"
      >
        <Box
          bg={bgColor}
          p={3}
          px={4}
          borderRadius="2xl"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          transition="all 0.3s ease"
          _hover={{
            color: accentColor,
            transform: 'translateX(4px)'
          }}
        >
          <Box display="flex" alignItems="center" gap={3} minW={0}>
            <Text fontWeight="700" fontSize="md" isTruncated>
              {name}
            </Text>
            <ExternalLinkIcon opacity={0.5} flexShrink={0} mr={1.5} />
          </Box>

          <Text
            fontSize="xs"
            fontWeight="800"
            fontFamily="'Outfit', sans-serif"
            opacity={0.5}
            letterSpacing="0.1em"
          >
            {year}
          </Text>
        </Box>
      </Link>
    </Box>
  )
}

export default Certificate
