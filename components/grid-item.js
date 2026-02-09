import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  useColorModeValue
} from '@chakra-ui/react'

export const GridItem = ({
  children,
  href,
  title,
  thumbnail,
  imgHeight,
  imgWidth
}) => {
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')
  const borderColor = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
  const hoverBorderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200')

  return (
    <Box w="100%" px={2}>
      <LinkBox cursor="pointer">
        <Box
          p={4}
          borderRadius="3xl"
          bg={bg}
          border="1px solid"
          borderColor={borderColor}
          transition="all 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
          _hover={{
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            borderColor: hoverBorderColor
          }}
        >
          <Box borderRadius="2xl" overflow="hidden" mb={4}>
            <Image
              src={thumbnail}
              alt={title}
              className="grid-item-thumbnail"
              loading="lazy"
              height={imgHeight || 300}
              width={imgWidth || 500}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }}
            />
          </Box>
          <LinkOverlay href={href} target="_blank">
            <Text
              fontSize="xl"
              fontWeight="700"
              fontFamily="'Outfit', sans-serif"
              letterSpacing="-0.02em"
            >
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize="sm" opacity={0.7} mt={2} noOfLines={1}>
            {children}
          </Text>
        </Box>
      </LinkBox>
    </Box>
  )
}

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')
  const borderColor = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
  const hoverBorderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200')

  return (
    <Box w="100%" px={2}>
      <LinkBox
        as={NextLink}
        href={`/works/${id}`}
        scroll={false}
        cursor="pointer"
        role="group"
      >
        <Box
          p={4}
          borderRadius="3xl"
          bg={bg}
          border="1px solid"
          borderColor={borderColor}
          transition="all 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
          _hover={{
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            borderColor: hoverBorderColor
          }}
        >
          <Box borderRadius="2xl" overflow="hidden" mb={4}>
            <Image
              src={thumbnail}
              alt={title}
              className="grid-item-thumbnail"
              width={500}
              height={350}
              style={{
                width: '100%',
                height: '240px',
                objectFit: 'cover'
              }}
              loading="lazy"
            />
          </Box>
          <Text
            fontSize="2xl"
            fontWeight="800"
            fontFamily="'Outfit', sans-serif"
            letterSpacing="-0.02em"
          >
            {title}
          </Text>
          <Text
            fontSize="md"
            opacity={0.6}
            fontWeight="500"
            mt={1}
            noOfLines={1}
          >
            {children}
          </Text>
        </Box>
      </LinkBox>
    </Box>
  )
}
