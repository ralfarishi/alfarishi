import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  Badge,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderColor="whiteAlpha.800"
        borderWidth={2}
        borderStyle="solid"
        w="100px"
        h="100px"
        ml={[85, 170, 200]}
        display="inline-block"
        borderRadius="full"
        overflow="hidden"
      >
        <ProfileImage
          src="/images/profile-pic.jpg"
          alt="Profile image"
          borderRadius="full"
          width="100%"
          height="150%"
        />
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1} textAlign="center">
          <Heading as="h2" variant="page-title">
            Ramiza Al Farishi
          </Heading>
          <p>College Student</p>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        ></Box>
      </Box>

      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m self taught web developer based in Indonesia!
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Ramiza is a student who is very interested in programming. He majored
          in informatics engineering and was taking his final semester. He hopes
          to become a backend programmer when he graduates from college. Some of
          the projects he has made are online stores (
          <NextLink href="/works/shopnow" passHref scroll={false}>
            <Link>Shop Now</Link>
          </NextLink>
          ) and AR (
          <NextLink href="/works/ar" passHref scroll={false}>
            <Link>ARnimal</Link>
          </NextLink>
          ).
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme={useColorModeValue('purple', 'orange')}
            >
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Jakarta, Indonesia.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed education in senior high school majoring in natural science
          at KORPRI Bekasi High School
        </BioSection>
        <BioSection>
          <BioYear>2019-</BioYear>
          Studying in the department of Informatics Engineering at Gunadarma
          University
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Things I ♥
        </Heading>
        <Paragraph>
          Movie, Music, Football, Programming, Augmented Reality.{' '}
        </Paragraph>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Sertification
        </Heading>

        <List>
          <ListItem>
            <Link
              href="https://buildwithangga.com/talent/ralfarishi/full-stack-web-developer-toko-online"
              color={useColorModeValue('purple.600', 'orange.200')}
              isExternal
            >
              BWA - Web Developer: E-Commerce <ExternalLinkIcon mx="2px" />{' '}
            </Link>
            <Badge>2022</Badge>
          </ListItem>
        </List>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Find Me
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/ralfarishi" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @ralfarishi
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/ramiza27_" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @ramiza27_
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/ramiza-al-farishi-a82a55208/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Ramiza Al Farishi
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/blogs" passHref scroll={false}>
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme={useColorModeValue('purple', 'orange')}
            >
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
