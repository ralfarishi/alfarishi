import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import {
  Title,
  WorkImage,
  SubTitle,
  WorkStats,
  StatBox,
  WorkLink,
  WorkPagination
} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout
      title="Intan Angkasa Air Service"
      description="Corporate website for a helicopter company. Deploying high-altitude solutions with Laravel 10."
      image="/images/works/iaas/iaas-1.png"
      slug="works/iaas"
    >
      <Title year="2023">Intan Angkasa Air Service</Title>

      <WorkStats>
        <StatBox label="Stack">Laravel 10, PHP, Tailwind</StatBox>
        <StatBox label="Platform">Website</StatBox>
        <StatBox label="Nature">Corporate Aviation</StatBox>
        <StatBox label="Live Preview">
          <WorkLink href="https://intanangkasa.com">intanangkasa.com</WorkLink>
        </StatBox>
      </WorkStats>

      <Box mb={16}>
        <SubTitle>The Mission</SubTitle>
        <P>
          Deploying high-altitude solutions. A website for a helicopter company
          that helps their business take off. Higher than your localhost, but
          just as accessible. We keep the UI light so the aircraft can stay
          heavy.
        </P>
      </Box>

      <Heading
        as="h4"
        fontSize={16}
        mb={6}
        textAlign="center"
        opacity={0.5}
        textTransform="uppercase"
        letterSpacing="widest"
      >
        Product Preview
      </Heading>

      <SimpleGrid columns={1} spacing={{ base: 4, md: 12 }}>
        <WorkImage
          priority
          my={0}
          src="/images/works/iaas/iaas-1.png"
          alt="Home page"
        />
        <WorkImage
          my={0}
          src="/images/works/iaas/iaas-2.png"
          alt="About page"
        />
      </SimpleGrid>

      <WorkPagination currentId="iaas" />
    </Layout>
  )
}

export default Work
