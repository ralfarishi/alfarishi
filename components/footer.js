import { Box, Link, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.5} fontSize="sm" mt={10} mb={6}>
      <Text fontWeight="600" letterSpacing="0.02em">
        &copy; {new Date().getFullYear()} Ramiza Al Farishi. All Rights
        Reserved.
      </Text>
      <Text fontSize="xs" mt={1} opacity={0.6}>
        Crafted with passion in Indonesia.
      </Text>
    </Box>
  )
}

export default Footer
