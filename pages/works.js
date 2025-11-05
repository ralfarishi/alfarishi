import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="suzerain-file-modifier"
            title="Suzerain The Game"
            thumbnail="/images/works/suzerain-file-modifier/suzerain-thumbnail.webp"
          >
            A tool to modified Suzerain game data
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="dashboard-cheese-stick-koe"
            title="Cheese Stick Koe"
            thumbnail="/images/works/cheese-stick-koe/dashboard.png"
          >
            A dashboard for Cheese Stick Koe store
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="shopnow"
            title="Shop Now"
            thumbnail="/images/works/shopnow/shopnow-thumb.png"
          >
            Online Shop
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="cheese-stick-koe"
            title="Cheese Stick Koe"
            thumbnail="/images/works/cheese-stick-koe/cheese_stick_1.jpg"
          >
            Official website for Cheese Stick Koe store
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="trinitas-prima"
            title="Trinitas Prima Sejahtera"
            thumbnail="/images/works/trinitas/trinitas-thumb.png"
          >
            Official website for Trinitas Prima Sejahtera company
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="sekolah-jewepe"
            title="Sekolah JeWePe"
            thumbnail="/images/works/sekolah-jewepe/jwp-1.png"
          >
            Laravel blog application
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="iaas"
            title="Intan Angkasa Air Service"
            thumbnail="/images/works/iaas/iaas-1.png"
          >
            Official website for Intan Angkasa Air Service company
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="pstopup"
            title="Pasar Top Up"
            thumbnail="/images/works/pstopup/pstopup.png"
          >
            A modern platform for seamless game top-ups
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="arya-tech"
            title="Arya Tech Company"
            thumbnail="/images/works/arya-tech/arya-tech.png"
          >
            Official website for Arya Tech Mandiri company
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="arnimal"
            title="ARnimal"
            thumbnail="/images/works/arnimal/arnimal-thumb.jpg"
          >
            Media learning using Augmented Reality
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="eduflex"
            title="Eduflex"
            thumbnail="/images/works/eduflex/edu-2.png"
          >
            Online course RESTful API
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="credx"
            title="CredX"
            thumbnail="/images/works/credx/thumb.png"
          >
            Account manager program
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Coming soon
          </Heading>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
