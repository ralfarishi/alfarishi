import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  chakra,
  shouldForwardProp,
  useColorModeValue
} from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import {
  IoHomeOutline,
  IoCodeWorkingOutline,
  IoBookOutline
} from 'react-icons/io5'
import ThemeToggleButton from './theme-toggle-button'
import Logo from './logo'
import NextLink from 'next/link'

const MotionBox = chakra(motion.div, {
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop)
})

const DockItem = ({
  href,
  icon: Icon,
  label,
  active,
  'aria-label': ariaLabel
}) => {
  const activeColor = useColorModeValue('#B85D3B', '#D4A373')
  const inactiveColor = useColorModeValue('blackAlpha.600', 'whiteAlpha.600')
  const activePillBg = useColorModeValue('blackAlpha.100', 'whiteAlpha.150')

  return (
    <Box position="relative">
      <Link
        as={NextLink}
        href={href}
        px={{ base: 4, sm: 5 }}
        py={2}
        borderRadius="xl"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={1}
        color={active ? activeColor : inactiveColor}
        position="relative"
        zIndex={1}
        aria-label={ariaLabel}
        _hover={{
          textDecoration: 'none',
          color: activeColor
        }}
        _active={{
          transform: 'scale(0.94)'
        }}
        transition="color 0.2s ease, transform 0.12s ease"
      >
        <Icon size={18} aria-hidden="true" />
        <Text
          fontSize="10px"
          fontWeight={active ? '800' : '600'}
          fontFamily="heading"
          letterSpacing="0.04em"
          lineHeight="1"
        >
          {label}
        </Text>
      </Link>
      {active && (
        <MotionBox
          layoutId="activeDockIndicator"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={activePillBg}
          borderRadius="xl"
          zIndex={0}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 32
          }}
        />
      )}
    </Box>
  )
}

const BottomDock = ({ path }) => {
  const dockBg = useColorModeValue('#FFFCF5E6', '#1A1A1AE6')
  const borderColor = useColorModeValue('blackAlpha.150', 'whiteAlpha.150')

  // Suppress BottomDock on /consult to prevent dual bottom bar collisions with Scoping Form Dock
  if (typeof path === 'string' && path.startsWith('/consult')) {
    return null
  }

  return (
    <Box
      display={{ base: 'block', md: 'none' }}
      position="fixed"
      bottom="calc(1.25rem + env(safe-area-inset-bottom, 0px))"
      left="50%"
      transform="translateX(-50%)"
      w="auto"
      bg={dockBg}
      css={{ backdropFilter: 'blur(16px)' }}
      borderRadius="full"
      border="1px solid"
      borderColor={borderColor}
      boxShadow="0 12px 36px rgba(0,0,0,0.12)"
      zIndex={80}
      px={2}
      py={1.5}
    >
      <Stack direction="row" spacing={1} align="center">
        <DockItem
          href="/"
          icon={IoHomeOutline}
          label="Home"
          active={path === '/'}
          aria-label="Home"
        />
        <DockItem
          href="/works"
          icon={IoCodeWorkingOutline}
          label="Works"
          active={path === '/works' || path.startsWith('/works/')}
          aria-label="Works"
        />
        <DockItem
          href="/blogs"
          icon={IoBookOutline}
          label="Blogs"
          active={path === '/blogs' || path.startsWith('/blogs/')}
          aria-label="Blogs"
        />
      </Stack>
    </Box>
  )
}

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href || (href !== '/' && path.startsWith(href + '/'))
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
          px={{ base: 4, md: 8 }}
          maxW="container.lg"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
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
            <LinkItem href="/consult" path={path}>
              Consult
            </LinkItem>
          </Stack>

          <Box flex={1} textAlign="right">
            <ThemeToggleButton />
          </Box>
        </Container>
      </Box>
      <BottomDock path={path} />
    </>
  )
}

export default Navbar
