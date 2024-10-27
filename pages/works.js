import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbShopnow from '../public/images/works/shopnow/shopnow-thumb.png'
import thumbARnimal from '../public/images/works/arnimal/arnimal-thumb.jpg'
import thumbCheeseStick from '../public/images/works/cheese-stick-koe/cheese_stick_1.jpg'
import thumbTrinitas from '../public/images/works/trinitas/trinitas-thumb.png'
import thumbJWP from '../public/images/works/sekolah-jewepe/jwp-1.png'
import thumbEduflex from '../public/images/works/eduflex/edu-2.png'
import thumbCredx from '../public/images/works/credx/thumb.png'
import thumbIaas from '../public/images/works/iaas/iaas-1.png'
import thumbPsTopUp from '../public/images/works/pstopup/pstopup.png'
import thumbAryaTech from '../public/images/works/arya-tech/arya-tech.png'

// import thumbComingSoon from '../public/images/coming-soon.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="arnimal" title="ARnimal" thumbnail={thumbARnimal}>
            Media learning using Augmented Reality
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="shopnow" title="Shop Now" thumbnail={thumbShopnow}>
            Online Shop
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="cheese-stick-koe"
            title="Cheese Stick Koe"
            thumbnail={thumbCheeseStick}
          >
            Official website for Cheese Stick Koe store
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="trinitas-prima"
            title="Trinitas Prima Sejahtera"
            thumbnail={thumbTrinitas}
          >
            Official website for Trinitas Prima Sejahtera company
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="sekolah-jewepe"
            title="Sekolah JeWePe"
            thumbnail={thumbJWP}
          >
            Laravel blog application
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="eduflex" title="Eduflex" thumbnail={thumbEduflex}>
            Online course RESTful API
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="credx" title="CredX" thumbnail={thumbCredx}>
            Account manager program
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="iaas"
            title="Intan Angkasa Air Service"
            thumbnail={thumbIaas}
          >
            Official website for Intan Angkasa Air Service company
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="pstopup"
            title="Pasar Top Up"
            thumbnail={thumbPsTopUp}
          >
            A modern platform for seamless game top-ups
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="arya-tech"
            title="Arya Tech Company"
            thumbnail={thumbAryaTech}
          >
            Official website for Arya Tech Mandiri company
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
export { getServerSideProps } from '../components/chakra'
