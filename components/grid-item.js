import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Text,
  Badge,
  LinkBox,
  LinkOverlay,
  useColorModeValue
} from '@chakra-ui/react'

export const GridItem = ({
  children,
  href,
  title,
  thumbnail,
  tags,
  imgHeight,
  imgWidth
}) => {
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')
  const borderColor = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
  const hoverBorderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200')
  const tagBg = useColorModeValue('blackAlpha.100', 'whiteAlpha.100')
  const tagColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800')

  return (
    <Box w="100%">
      <LinkBox cursor="pointer">
        <Box
          p={4}
          borderRadius="3xl"
          bg={bg}
          border="1px solid"
          borderColor={borderColor}
          transition="all 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
          _hover={{
            transform: 'translateY(-6px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
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
          <LinkOverlay href={href} target="_blank" rel="noopener noreferrer">
            <Text
              fontSize="xl"
              fontWeight="700"
              fontFamily="heading"
              letterSpacing="-0.02em"
            >
              {title}
            </Text>
          </LinkOverlay>
          {tags && tags.length > 0 && (
            <Box display="flex" flexWrap="wrap" gap={1.5} mt={2} mb={1}>
              {tags.map(tag => (
                <Badge
                  key={tag}
                  variant="subtle"
                  bg={tagBg}
                  color={tagColor}
                  borderRadius="md"
                  px={2}
                  py={0.5}
                  fontSize="10px"
                  fontWeight="700"
                  letterSpacing="0.05em"
                >
                  {tag}
                </Badge>
              ))}
            </Box>
          )}
          {children && (
            <Text
              fontSize="sm"
              opacity={0.7}
              mt={2}
              lineHeight="1.6"
              noOfLines={{ base: 2, md: 3 }}
            >
              {children}
            </Text>
          )}
        </Box>
      </LinkBox>
    </Box>
  )
}

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
  tags,
  priority = false
}) => {
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')
  const borderColor = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
  const hoverBorderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200')
  const tagBg = useColorModeValue('blackAlpha.100', 'whiteAlpha.100')
  const tagColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800')

  return (
    <Box w="100%">
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
            transform: 'translateY(-6px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
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
              priority={priority}
              style={{
                width: '100%',
                height: '240px',
                objectFit: 'cover'
              }}
              loading={priority ? 'eager' : 'lazy'}
            />
          </Box>
          <Text
            fontSize="2xl"
            fontWeight="800"
            fontFamily="heading"
            letterSpacing="-0.02em"
          >
            {title}
          </Text>
          {tags && tags.length > 0 && (
            <Box display="flex" flexWrap="wrap" gap={1.5} mt={2} mb={1}>
              {tags.map(tag => (
                <Badge
                  key={tag}
                  variant="subtle"
                  bg={tagBg}
                  color={tagColor}
                  borderRadius="md"
                  px={2}
                  py={0.5}
                  fontSize="10px"
                  fontWeight="700"
                  letterSpacing="0.05em"
                >
                  {tag}
                </Badge>
              ))}
            </Box>
          )}
          <Text
            fontSize="sm"
            opacity={0.7}
            fontWeight="500"
            lineHeight="1.6"
            mt={2}
            noOfLines={{ base: 2, md: 3 }}
          >
            {children}
          </Text>
        </Box>
      </LinkBox>
    </Box>
  )
}
