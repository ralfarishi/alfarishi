import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, forwardRef } from 'react'
import {
  IoCloseOutline,
  IoMenuOutline,
  IoHomeOutline,
  IoCodeWorkingOutline,
  IoBookOutline
} from 'react-icons/io5'
import ThemeToggleButton from './theme-toggle-button'
import Logo from './logo'
import NextLink from 'next/link'

const DockItem = ({ href, icon: Icon, active }) => {
  const activeBg = useColorModeValue('blackAlpha.100', 'whiteAlpha.100')
  const activeColor = useColorModeValue('#2D2D2A', '#F0EAD6')
  const inactiveColor = useColorModeValue('#2D2D2A80', '#F0EAD680')
  const hoverBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')

  return (
    <Link
      as={NextLink}
      href={href}
      p={3}
      borderRadius="xl"
      bg={active ? activeBg : 'transparent'}
      color={active ? activeColor : inactiveColor}
      transition="all 0.3s ease"
      _hover={{
        textDecoration: 'none',
        bg: hoverBg
      }}
    >
      <Icon size={24} />
    </Link>
  )
}

const BottomDock = ({ path }) => {
  const dockBg = useColorModeValue('#FFFCF5CC', '#1A1A1ACC')

  return (
    <Box
      display={{ base: 'block', md: 'none' }}
      position="fixed"
      bottom={6}
      left="50%"
      transform="translateX(-50%)"
      w="auto"
      bg={dockBg}
      css={{ backdropFilter: 'blur(15px)' }}
      borderRadius="3xl"
      border="1px solid"
      borderColor={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      boxShadow="0 10px 40px rgba(0,0,0,0.1)"
      zIndex={20}
      px={2}
      py={2}
    >
      <Stack direction="row" spacing={2} align="center">
        <DockItem href="/" icon={IoHomeOutline} active={path === '/'} />
        <DockItem
          href="/works"
          icon={IoCodeWorkingOutline}
          active={path === '/works'}
        />
        <DockItem
          href="/blogs"
          icon={IoBookOutline}
          active={path === '/blogs'}
        />
      </Stack>
    </Box>
  )
}

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const activeColor = useColorModeValue('#2D2D2A', '#F0EAD6')
  const inactiveColor = useColorModeValue('#2D2D2A80', '#F0EAD680')

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      color={active ? activeColor : inactiveColor}
      fontWeight={active ? '700' : '500'}
      target={target}
      position="relative"
      _hover={{
        textDecoration: 'none',
        color: activeColor
      }}
      _after={
        active
          ? {
              content: '""',
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '4px',
              height: '4px',
              borderRadius: 'full',
              bg: activeColor
            }
          : undefined
      }
      {...props}
    >
      {children}
    </Link>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <>
      <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#FFFCF580', '#1A1A1A80')}
        css={{ backdropFilter: 'blur(20px)' }}
        zIndex={10}
        {...props}
      >
        <Container
          display="flex"
          p={3}
          px={6}
          maxW="container.md"
          wrap="wrap"
          align="center"
          justify="space-between"
        >
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={'tighter'}>
              <Logo />
            </Heading>
          </Flex>

          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
            spacing={6}
          >
            <LinkItem href="/works" path={path}>
              Works
            </LinkItem>
            <LinkItem href="/blogs" path={path}>
              Blogs
            </LinkItem>
          </Stack>

          <Box flex={1} align="right">
            <ThemeToggleButton />
          </Box>
        </Container>
      </Box>
      <BottomDock path={path} />
    </>
  )
}

export default Navbar
