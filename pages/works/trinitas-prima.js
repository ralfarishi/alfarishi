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
      title="Trinitas Prima Sejahtera"
      description="A professional corporate landing page designed for Trinitas Prima Sejahtera, focusing on corporate presence and digital branding."
      image="/images/works/trinitas/trinitas_1.png"
      slug="works/trinitas-prima"
    >
      <Title year="2023">Trinitas Prima Sejahtera</Title>

      <WorkStats>
        <StatBox label="Stack">HTML5, Bootstrap 5</StatBox>
        <StatBox label="Platform">Website</StatBox>
        <StatBox label="Nature">Corporate Landing Page</StatBox>
        <StatBox label="Live Preview">
          <WorkLink href="https://trinitasprimasejahtera.com/">
            trinitasprimasejahtera.com
          </WorkLink>
        </StatBox>
      </WorkStats>

      <Box mb={16}>
        <SubTitle>The Mission</SubTitle>
        <P>
          A corporate landing page that actually lands. Scaling corporate
          presence without the <code>overflow:hidden</code> on their ambitions.
          Making professionalism look as easy as <code>CTRL+C</code>,{' '}
          <code>CTRL+V</code>.
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
          src="/images/works/trinitas/trinitas_2.png"
          alt="Trinitas preview 1"
        />
        <WorkImage
          my={0}
          src="/images/works/trinitas/trinitas_1.png"
          alt="Trinitas preview 2"
        />
      </SimpleGrid>

      <WorkPagination currentId="trinitas-prima" />
    </Layout>
  )
}

export default Work
