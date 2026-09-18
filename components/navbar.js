import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import {
  IoHomeOutline,
  IoCodeWorkingOutline,
  IoBookOutline
} from 'react-icons/io5'
import ThemeToggleButton from './theme-toggle-button'
import Logo from './logo'
import NextLink from 'next/link'

const DockItem = ({
  href,
  icon: Icon,
  label,
  active,
  'aria-label': ariaLabel
}) => {
  const activeBg = useColorModeValue('blackAlpha.100', 'whiteAlpha.100')
  const activeColor = useColorModeValue('#B85D3B', '#D4A373')
  const inactiveColor = useColorModeValue('blackAlpha.600', 'whiteAlpha.600')
  const hoverBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')

  return (
    <Link
      as={NextLink}
      href={href}
      px={{ base: 4, sm: 5 }}
      py={2}
      borderRadius="2xl"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={1}
      bg={active ? activeBg : 'transparent'}
      color={active ? activeColor : inactiveColor}
      transition="all 0.25s ease"
      aria-label={ariaLabel}
      _hover={{
        textDecoration: 'none',
        color: activeColor,
        bg: hoverBg
      }}
    >
      <Icon size={20} aria-hidden="true" />
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
  )
}

const BottomDock = ({ path }) => {
  const dockBg = useColorModeValue('#FFFCF5E6', '#1A1A1AE6')

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
      borderColor={useColorModeValue('blackAlpha.150', 'whiteAlpha.150')}
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
