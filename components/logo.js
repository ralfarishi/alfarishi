import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  transition: 200ms ease;

  &:hover {
    transform: translateY(-1px);
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Text
          color={useColorModeValue('#2D2D2A', '#F0EAD6')}
          fontFamily="'Outfit', sans-serif"
          fontWeight="800"
          fontSize="22px"
          letterSpacing="-0.02em"
        >
          Ramiza Al Farishi
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
