import { Box, Link, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Ramiza Al Farishi. All Rights Reserved.
      <Text fontSize="xs">
        Inspired by{' '}
        <Link href="https://www.craftz.dog/" target="_blank">
          craftzdog
        </Link>
      </Text>
    </Box>
  )
}

export default Footer
