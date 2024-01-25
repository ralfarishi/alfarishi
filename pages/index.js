import NextLink from 'next/link'
import Image from 'next/image'

import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'

import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Certificate from '../components/certificate'

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
          width="100"
          height="150"
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
          <Link as={NextLink} href="/works/shopnow" passHref scroll={false}>
            Shop Now
          </Link>
          ) and AR (
          <Link as={NextLink} href="/works/arnimal" passHref scroll={false}>
            ARnimal
          </Link>
          ).
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            rightIcon={<ChevronRightIcon />}
            colorScheme={useColorModeValue('purple', 'orange')}
            href="/works"
            scroll={false}
          >
            My portfolio
          </Button>
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
          <BioYear>2023</BioYear>
          Graduated with a bachelor&lsquo;s degree in computer science at
          Gunadarma University
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Things I ♥
        </Heading>
        <Paragraph>Web Programming, Music, & Football. </Paragraph>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Certifications
        </Heading>

        <List>
          <Certificate
            link="https://buildwithangga.com/talent/ralfarishi/full-stack-web-developer-toko-online"
            name="BWA - Web Developer: E-Commerce"
            year="2022"
          />
          <Certificate
            link="https://buildwithangga.com/talent/ralfarishi/web-development-microservice-website-kelas-online"
            name="BWA - Web Development: Online Course Website"
            year="2023"
          />
          <Certificate
            link="https://drive.google.com/file/d/1bUUSmKtXWwBjaBLCHcqpZ-w_21dmvDJl/view?usp=sharing"
            name="Indonesian Professional Certification Authority: Junior Web
              Programmer"
            year="2023"
          />
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
          <Button
            as={NextLink}
            rightIcon={<ChevronRightIcon />}
            colorScheme={useColorModeValue('purple', 'orange')}
            href="/blogs"
            scroll={false}
          >
            Popular posts
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
