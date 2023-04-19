import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbShopnow from '../public/images/works/shopnow/shopnow-thumb.png'
import thumbARnimal from '../public/images/works/arnimal/arnimal-thumb.jpg'
import thumbCheeseStick from '../public/images/w  orks/cheese-stick-koe/cheese_stick_1.jpg'
import thumbTrinitas from '../public/images/works/trinitas/trinitas-thumb.png'
import thumbComingSoon from '../public/images/coming-soon.jpg'

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
            Official Website
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="trinitas-prima"
            title="Trinitas Prima Sejahtera"
            thumbnail={thumbTrinitas}
          >
            Official Website for PT. Trinitas Prima Sejahtera
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Coming soon
          </Heading>

          <Section>
            <WorkGridItem
              id="#"
              title="Online Course"
              thumbnail={thumbComingSoon}
            >
              Online course application built with REST API
            </WorkGridItem>
          </Section>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
