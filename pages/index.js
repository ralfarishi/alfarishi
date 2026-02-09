import NextLink from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import {
  Link,
  Text,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
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

const Certificate = dynamic(() => import('../components/certificate'), {
  loading: () => null,
  ssr: true
})

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop =>
    ['width', 'height', 'src', 'alt', 'priority'].includes(prop)
})

const Home = () => {
  const bgBox = useColorModeValue('#F7E3DC', '#2D2824')
  const accentColor = useColorModeValue('#E29578', '#D4A373')

  return (
    <Layout
      title="Home"
      description="Self-taught web developer from Indonesia. I build websites people love to use and systems that solve real problems."
      slug=""
    >
      <Container maxW="container.lg" px={6}>
        {/* HERO SECTION */}
        <Section delay={0.1}>
          <Box
            display="flex"
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="center"
            pt={{ base: 4, md: 20 }}
            mb={{ base: 6, md: 20 }}
            position="relative"
          >
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              textAlign="center"
              order={{ base: 2, md: 1 }}
              zIndex={1}
            >
              <Heading
                as="h2"
                fontSize={{ base: '4xl', md: '7xl' }}
                fontFamily="'Outfit', sans-serif"
                fontWeight="800"
                letterSpacing="-0.04em"
                lineHeight="0.9"
              >
                Ramiza <br />
                <chakra.span color={accentColor}>Al Farishi</chakra.span>
              </Heading>
              <Text
                fontFamily="'Instrument Serif', serif"
                fontSize={{ base: '1.5rem', md: '2.5rem' }}
                fontStyle="italic"
                opacity={0.8}
                mt={4}
              >
                Web Developer & AI Enthusiast
              </Text>
            </Box>

            <Box
              flexShrink={0}
              mt={{ base: 10, md: 0 }}
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
                opacity={0.1}
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
                  alt="Profile image"
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
            mb={{ base: 12, md: 20 }}
          >
            <Box
              maxW={{ base: '100%', md: '60%' }}
              position="relative"
              _before={{
                content: '"“"',
                position: 'absolute',
                top: '-40px',
                left: '-20px',
                fontSize: '8xl',
                fontFamily: "'Instrument Serif', serif",
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

        {/* CONTENT GRID */}
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 12, md: 20 }}
          mb={{ base: 12, md: 20 }}
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
            <Box mt={6}>
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
                variant="outline"
                borderColor={accentColor}
                color={accentColor}
                borderRadius="full"
                px={8}
                height="52px"
                fontWeight="800"
                fontFamily="'Outfit', sans-serif"
                letterSpacing="0.02em"
                transition="all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                role="group"
                _hover={{
                  bg: accentColor,
                  color: useColorModeValue('white', '#F0EAD6'),
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
              >
                Explore Works
              </Button>
            </Box>
          </Section>

          {/* BIO SECTION */}
          <Section delay={0.4}>
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
                Gunadarma University (CS)
              </BioSection>
            </Box>
          </Section>
        </SimpleGrid>

        {/* THINGS I LOVE & CERTIFICATIONS */}
        <Box display="flex" flexDirection="column" gap={{ base: 12, md: 20 }}>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 12, md: 20 }}
          >
            <Section delay={0.5}>
              <Heading as="h3" variant="section-title">
                Things I ♥
              </Heading>
              <Text fontSize="lg" opacity={0.8}>
                Music, football, movies, & speed running my token limit (and
                occasionally my deployment pipeline).
              </Text>
            </Section>

            <Section delay={0.6}>
              <Heading as="h3" variant="section-title">
                Certifications
              </Heading>
              <List spacing={4} mt={4} styleType="none">
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

          {/* FIND ME ON */}
          <Section delay={0.7}>
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
              pt={12}
              gap={8}
            >
              <Box>
                <Heading
                  as="h3"
                  fontSize="2xl"
                  fontFamily="'Outfit', sans-serif"
                  fontWeight="800"
                >
                  Let&apos;s Connect
                </Heading>
                <Text opacity={0.6} mt={1}>
                  Available for new opportunities.
                </Text>
              </Box>

              <Box display="flex" flexWrap="wrap" gap={6}>
                {[
                  {
                    label: 'Github',
                    href: 'https://github.com/ralfarishi',
                    icon: IoLogoGithub
                  },
                  {
                    label: 'Instagram',
                    href: 'https://instagram.com/ramiza27_',
                    icon: IoLogoInstagram
                  },
                  {
                    label: 'LinkedIn',
                    href: 'https://linkedin.com/in/ramiza-al-farishi-a82a55208/',
                    icon: IoLogoLinkedin
                  },
                  {
                    label: 'Email',
                    href: 'mailto:ralfarishi@gmail.com',
                    icon: IoMailOutline
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
                      py={2}
                      borderRadius="xl"
                      bg={bgBox}
                      transition="all 0.3s ease"
                      _groupHover={{
                        bg: accentColor,
                        color: useColorModeValue('white', '#F0EAD6'),
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                      }}
                    >
                      <link.icon />
                      <Text
                        fontWeight="700"
                        fontFamily="'Instrument Serif', serif"
                        fontStyle="italic"
                        fontSize="xl"
                      >
                        {link.label}
                      </Text>
                    </Box>
                  </Link>
                ))}
              </Box>
            </Box>
          </Section>
        </Box>
      </Container>
    </Layout>
  )
}

export default Home
