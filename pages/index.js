import NextLink from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import {
  Link,
  Text,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  Badge,
  Tooltip,
  useClipboard,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'

import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline
} from 'react-icons/io5'

import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

const Certificate = dynamic(() => import('../components/certificate'), {
  loading: () => null,
  ssr: true
})

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop =>
    ['width', 'height', 'src', 'alt', 'priority'].includes(prop)
})

const Home = () => {
  const { hasCopied, onCopy } = useClipboard('ralfarishi@gmail.com')
  const bgBox = useColorModeValue('#F7E3DC', '#2D2824')
  const accentColor = useColorModeValue('#B85D3B', '#D4A373')

  return (
    <Layout
      title="Home"
      description="Self-taught web developer from Indonesia. I build websites people love to use and systems that solve real problems."
      slug=""
    >
      <Box as="div">
        {/* HERO SECTION */}
        <Section delay={0.1}>
          <Box
            display="flex"
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="center"
            pt={{ base: 4, md: 16 }}
            mb={{ base: 8, md: 16 }}
            position="relative"
          >
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              textAlign={{ base: 'center', md: 'left' }}
              order={{ base: 2, md: 1 }}
              zIndex={1}
            >
              {/* Availability Badge */}
              <Box
                display="inline-flex"
                alignItems="center"
                gap={2}
                px={3.5}
                py={1.5}
                borderRadius="full"
                bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.100')}
                border="1px solid"
                borderColor={useColorModeValue(
                  'blackAlpha.100',
                  'whiteAlpha.200'
                )}
                mb={4}
              >
                <Box
                  w={2}
                  h={2}
                  borderRadius="full"
                  bg="green.400"
                  boxShadow="0 0 8px rgba(74, 222, 128, 0.7)"
                />
                <Text
                  fontSize="xs"
                  fontWeight="700"
                  letterSpacing="0.06em"
                  textTransform="uppercase"
                  opacity={0.8}
                >
                  Available for Opportunities
                </Text>
              </Box>

              <Heading
                as="h2"
                fontSize={{ base: '4xl', md: '7xl' }}
                fontFamily="heading"
                fontWeight="800"
                letterSpacing="-0.04em"
                lineHeight="0.95"
              >
                Ramiza <br />
                <chakra.span color={accentColor}>Al Farishi</chakra.span>
              </Heading>
              <Text
                fontFamily="serif"
                fontSize={{ base: '1.5rem', md: '2.5rem' }}
                fontStyle="italic"
                opacity={0.85}
                mt={4}
              >
                Web Developer & AI Enthusiast
              </Text>
            </Box>

            <Box
              flexShrink={0}
              mt={{ base: 8, md: 0 }}
              ml={{ md: 10 }}
              order={{ base: 1, md: 2 }}
              position="relative"
            >
              <Box
                position="absolute"
                top="-10%"
                right="-10%"
                w="120%"
                h="120%"
                bg={accentColor}
                opacity={0.12}
                borderRadius="full"
                filter="blur(60px)"
              />
              <Box
                borderColor={accentColor}
                borderWidth={2}
                borderStyle="solid"
                w={{ base: '160px', md: '240px' }}
                h={{ base: '160px', md: '240px' }}
                display="inline-block"
                borderRadius="3xl"
                overflow="hidden"
                boxShadow="0 20px 50px rgba(0,0,0,0.15)"
                transform="rotate(-3deg)"
                transition="all 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
                _hover={{ transform: 'rotate(0deg) scale(1.02)' }}
              >
                <ProfileImage
                  src="/images/profile-pic.jpg"
                  alt="Ramiza Al Farishi"
                  width="300"
                  height="300"
                  priority={true}
                />
              </Box>
            </Box>
          </Box>
        </Section>

        {/* INTRODUCTION */}
        <Section delay={0.2}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems={{ base: 'flex-start', md: 'flex-end' }}
            mb={{ base: 12, md: 18 }}
          >
            <Box
              maxW={{ base: '100%', md: '65%' }}
              position="relative"
              _before={{
                content: '"“"',
                position: 'absolute',
                top: '-40px',
                left: '-20px',
                fontSize: '8xl',
                fontFamily: 'serif',
                opacity: 0.1,
                color: accentColor
              }}
            >
              <Text
                fontWeight="500"
                fontSize={{ base: 'xl', md: '2xl' }}
                lineHeight="1.6"
                letterSpacing="-0.01em"
              >
                Self-taught web developer from Indonesia — I build websites
                people love to use and systems that solve real problems.
              </Text>
            </Box>
          </Box>
        </Section>

        {/* ABOUT & EDUCATION GRID */}
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, md: 16 }}
          mb={{ base: 14, md: 20 }}
        >
          {/* ABOUT SECTION */}
          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
              About
            </Heading>
            <Paragraph>
              Hi, I&apos;m <chakra.span fontWeight="700">Ramiza</chakra.span> —
              a Computer Science graduate who effectively converts caffeine into
              clean components. I specialize in web development and systems that
              solve real problems (and occasionally create new, more interesting
              ones). I&apos;m all about building things that run smoothly, look
              sharp, and make life a bit more <code>flex</code>-ible.
            </Paragraph>
            <Box mt={6} display="flex" flexWrap="wrap" gap={3}>
              <Button
                as={NextLink}
                rightIcon={
                  <ChevronRightIcon
                    transition="all 0.3s ease"
                    _groupHover={{ transform: 'translateX(4px)' }}
                  />
                }
                href="/works"
                scroll={false}
                variant="pill-outline"
                role="group"
              >
                Explore Works
              </Button>
              <Tooltip
                label={
                  hasCopied ? 'Email address copied!' : 'Click to copy email'
                }
                hasArrow
                placement="top"
                closeOnClick={false}
              >
                <Button
                  onClick={onCopy}
                  variant="ghost"
                  borderRadius="full"
                  height="52px"
                  px={6}
                  fontWeight="700"
                  fontFamily="heading"
                  opacity={0.85}
                  _hover={{
                    opacity: 1,
                    bg: useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
                  }}
                >
                  {hasCopied ? 'Email Copied!' : 'Get in Touch'}
                </Button>
              </Tooltip>
            </Box>
          </Section>

          {/* BIO SECTION */}
          <Section delay={0.35}>
            <Heading as="h3" variant="section-title">
              Educations
            </Heading>
            <Box position="relative">
              <BioSection>
                <BioYear>2000</BioYear>
                Born in Jakarta, Indonesia.
              </BioSection>
              <BioSection>
                <BioYear>2019</BioYear>
                KORPRI Bekasi High School
              </BioSection>
              <BioSection>
                <BioYear>2023</BioYear>
                Gunadarma University (Computer Science)
              </BioSection>
            </Box>
          </Section>
        </SimpleGrid>

        {/* SELECTED WORKS SHOWCASE */}
        <Section delay={0.4}>
          <Box mb={14}>
            <Box
              display="flex"
              alignItems="flex-end"
              justifyContent="space-between"
              mb={6}
            >
              <Box>
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  textTransform="uppercase"
                  letterSpacing="0.2em"
                  color={accentColor}
                >
                  Featured
                </Text>
                <Heading as="h3" variant="section-title" mt={0}>
                  Selected Works
                </Heading>
              </Box>
              <Button
                as={NextLink}
                href="/works"
                variant="ghost"
                size="sm"
                rightIcon={<ChevronRightIcon />}
                color={accentColor}
                fontWeight="700"
                fontFamily="heading"
                _hover={{ bg: 'transparent', transform: 'translateX(2px)' }}
              >
                View All Works
              </Button>
            </Box>

            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing={{ base: 6, md: 6 }}
            >
              <WorkGridItem
                id="labalab"
                title="LabaLab"
                thumbnail="/images/works/labalab/thumbnail.png"
                tags={['Next.js', 'Drizzle', 'Supabase', 'Tailwind']}
              >
                A retail operating system turning stockroom chaos into
                structured data with a side of profit.
              </WorkGridItem>
              <WorkGridItem
                id="suzerain-save-editor"
                title="Suzerain Save Editor"
                thumbnail="/images/works/suzerain-save-editor/suzerain-thumbnail.webp"
                tags={['Bun', 'Vite', 'Tailwind']}
              >
                Manipulate Sordland&apos;s political fabric with this
                interactive save editor.
              </WorkGridItem>
            </SimpleGrid>
          </Box>
        </Section>

        {/* CORE TECH STACK */}
        <Section delay={0.45}>
          <Box mb={14}>
            <Text
              fontSize="xs"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="0.2em"
              color={accentColor}
            >
              Toolkit
            </Text>
            <Heading as="h3" variant="section-title" mt={0}>
              Core Stack
            </Heading>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4} mt={4}>
              {[
                {
                  category: 'Frontend',
                  skills: [
                    'React',
                    'Next.js',
                    'TypeScript',
                    'Tailwind CSS',
                    'Chakra UI'
                  ]
                },
                {
                  category: 'Backend & DB',
                  skills: [
                    'Node.js',
                    'Laravel',
                    'PostgreSQL',
                    'Supabase',
                    'REST APIs'
                  ]
                },
                {
                  category: 'Workflow & Tools',
                  skills: [
                    'Git & GitHub',
                    'Vercel',
                    'Docker',
                    'Linux / WSL',
                    'Figma'
                  ]
                }
              ].map(group => (
                <Box
                  key={group.category}
                  p={5}
                  borderRadius="2xl"
                  bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.50')}
                  border="1px solid"
                  borderColor={useColorModeValue(
                    'blackAlpha.100',
                    'whiteAlpha.100'
                  )}
                  transition="all 0.3s ease"
                  _hover={{
                    borderColor: useColorModeValue(
                      'blackAlpha.200',
                      'whiteAlpha.300'
                    ),
                    transform: 'translateY(-2px)'
                  }}
                >
                  <Text
                    fontSize="xs"
                    fontWeight="800"
                    textTransform="uppercase"
                    letterSpacing="0.15em"
                    color={accentColor}
                    mb={3}
                  >
                    {group.category}
                  </Text>
                  <Box display="flex" flexWrap="wrap" gap={1.5}>
                    {group.skills.map(skill => (
                      <Badge
                        key={skill}
                        variant="subtle"
                        bg={useColorModeValue(
                          'blackAlpha.100',
                          'whiteAlpha.100'
                        )}
                        color={useColorModeValue(
                          'blackAlpha.800',
                          'whiteAlpha.800'
                        )}
                        borderRadius="md"
                        px={2.5}
                        py={1}
                        fontSize="xs"
                        fontWeight="600"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Section>

        {/* THINGS I LOVE & CERTIFICATIONS */}
        <Box
          display="flex"
          flexDirection="column"
          gap={{ base: 12, md: 16 }}
          mb={16}
        >
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 10, md: 16 }}
          >
            <Section delay={0.5}>
              <Heading as="h3" variant="section-title">
                Things I Love
              </Heading>
              <Text fontSize="lg" opacity={0.8} lineHeight="1.7">
                Music, football, movies, & speed running my token limit (and
                occasionally my deployment pipeline).
              </Text>
            </Section>

            <Section delay={0.55}>
              <Heading as="h3" variant="section-title">
                Certifications
              </Heading>
              <List spacing={3} mt={4} styleType="none">
                <Certificate
                  link="https://buildwithangga.com/talent/ralfarishi/full-stack-web-developer-toko-online"
                  name="BWA - E-Commerce"
                  year="2022"
                />
                <Certificate
                  link="https://buildwithangga.com/talent/ralfarishi/web-development-microservice-website-kelas-online"
                  name="BWA - Microservices Online Course"
                  year="2023"
                />
                <Certificate
                  link="https://drive.google.com/file/d/1bUUSmKtXWwBjaBLCHcqpZ-w_21dmvDJl/view?usp=sharing"
                  name="Junior Web Programmer (BNSP)"
                  year="2023"
                />
              </List>
            </Section>
          </SimpleGrid>

          {/* LET'S CONNECT */}
          <Section delay={0.6}>
            <Box
              display="flex"
              flexDirection={{ base: 'column', md: 'row' }}
              alignItems={{ base: 'flex-start', md: 'center' }}
              justifyContent="space-between"
              borderTop="1px solid"
              borderColor={useColorModeValue(
                'blackAlpha.100',
                'whiteAlpha.100'
              )}
              pt={10}
              gap={6}
            >
              <Box>
                <Heading
                  as="h3"
                  fontSize="2xl"
                  fontFamily="heading"
                  fontWeight="800"
                >
                  Let&apos;s Connect
                </Heading>
                <Text opacity={0.6} mt={1}>
                  Available for new opportunities and collaborations.
                </Text>
              </Box>

              <Box display="flex" flexWrap="wrap" gap={3}>
                {[
                  {
                    label: 'GitHub',
                    href: 'https://github.com/ralfarishi',
                    icon: IoLogoGithub
                  },
                  {
                    label: 'LinkedIn',
                    href: 'https://linkedin.com/in/ramiza-al-farishi-a82a55208/',
                    icon: IoLogoLinkedin
                  },
                  {
                    label: 'Instagram',
                    href: 'https://instagram.com/ramiza27_',
                    icon: IoLogoInstagram
                  }
                ].map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    isExternal
                    _hover={{ textDecoration: 'none' }}
                    role="group"
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      gap={2}
                      px={4}
                      py={2.5}
                      borderRadius="xl"
                      bg={bgBox}
                      transition="all 0.3s ease"
                      _groupHover={{
                        bg: accentColor,
                        color: useColorModeValue('white', '#1A1A1A'),
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                      }}
                    >
                      <link.icon size={18} />
                      <Text
                        fontWeight="700"
                        fontFamily="heading"
                        fontSize="sm"
                        letterSpacing="0.02em"
                      >
                        {link.label}
                      </Text>
                    </Box>
                  </Link>
                ))}

                {/* Email Copy-to-Clipboard Action */}
                <Tooltip
                  label={
                    hasCopied ? 'Email address copied!' : 'Click to copy email'
                  }
                  closeOnClick={false}
                  hasArrow
                  placement="top"
                >
                  <Box
                    as="button"
                    onClick={onCopy}
                    display="flex"
                    alignItems="center"
                    gap={2}
                    px={4}
                    py={2.5}
                    borderRadius="xl"
                    bg={bgBox}
                    transition="all 0.3s ease"
                    role="group"
                    cursor="pointer"
                    _hover={{
                      bg: accentColor,
                      color: useColorModeValue('white', '#1A1A1A'),
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }}
                  >
                    <IoMailOutline size={18} />
                    <Text
                      fontWeight="700"
                      fontFamily="heading"
                      fontSize="sm"
                      letterSpacing="0.02em"
                    >
                      {hasCopied ? 'Copied!' : 'Email'}
                    </Text>
                  </Box>
                </Tooltip>
              </Box>
            </Box>
          </Section>
        </Box>
      </Box>
    </Layout>
  )
}

export default Home
