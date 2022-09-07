import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbShopnow from '../public/images/works/shopnow-thumb.png'
import thumbARnimal from '../public/images/works/arnimal-thumb.jpg'
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
            id="#"
            title="Vehicle Detection"
            thumbnail={thumbComingSoon}
          >
            Vehicle Detection with Machine Learning
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Coming soon
        </Heading>
      </Section>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
