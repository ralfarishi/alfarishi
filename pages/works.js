import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

const Works = () => (
  <Layout
    title="Works"
    description="A showcase of projects I've built, ranging from web applications and e-commerce platforms to AR experiences and CLI tools."
    slug="works"
  >
    <Container maxW="container.lg" px={6}>
      <Heading as="h3" variant="section-title" mb={{ base: 4, md: 8 }}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={{ base: 4, md: 6 }}>
        <Section mb={0}>
          <WorkGridItem
            id="labalab"
            title="LabaLab"
            thumbnail="/images/works/labalab/thumbnail.png"
          >
            A retail operating system for the organized and the overwhelmed.
            Turning stockroom chaos into structured data with a side of profit.
          </WorkGridItem>
        </Section>
        <Section mb={0}>
          <WorkGridItem
            id="suzerain-save-editor"
            title="Suzerain"
            thumbnail="/images/works/suzerain-save-editor/suzerain-thumbnail.webp"
          >
            Because being a president is hard enough without living with your
            choices. Manipulate Sordland&apos;s political fabric with this save
            editor.
          </WorkGridItem>
        </Section>
        <Section mb={0}>
          <WorkGridItem
            id="dashboard-cheese-stick-koe"
            title="Cheese Stick Koe Dashboard"
            thumbnail="/images/works/cheese-stick-koe/dashboard.png"
          >
            The &quot;big cheese&quot; of data visualization. A dashboard where
            the CRUD operations are as crisp as the snacks themselves.
          </WorkGridItem>
        </Section>

        <Section mb={0}>
          <WorkGridItem
            id="shopnow"
            title="Shop Now"
            thumbnail="/images/works/shopnow/shopnow-thumb.png"
          >
            A retail therapy engine. Adding items to Cart&lt;T&gt; since 2022.
            Your wallet&apos;s worst enemy, your browser&apos;s best friend.
          </WorkGridItem>
        </Section>
        <Section mb={0}>
          <WorkGridItem
            id="cheese-stick-koe"
            title="Cheese Stick Koe"
            thumbnail="/images/works/cheese-stick-koe/cheese_stick_1.jpg"
          >
            Serving snacks over HTTP. 100% responsive, 0% trans-fat (on the
            website, at least). Bekasi&apos;s crunchiest exports gone digital.
          </WorkGridItem>
        </Section>
        <Section mb={0}>
          <WorkGridItem
            id="trinitas-prima"
            title="Trinitas Prima Sejahtera"
            thumbnail="/images/works/trinitas/trinitas-thumb.png"
          >
            A corporate landing page that actually lands. Scaling corporate
            presence without the overflow:hidden on their ambitions.
          </WorkGridItem>
        </Section>
        <Section mb={0}>
          <WorkGridItem
            id="sekolah-jewepe"
            title="Sekolah JeWePe"
            thumbnail="/images/works/sekolah-jewepe/jwp-1.png"
          >
            Where Eloquent models meet academic deadlines. A blog platform built
            with Laravel because PHP is still alive and kicking.
          </WorkGridItem>
        </Section>

        <Section mb={0}>
          <WorkGridItem
            id="iaas"
            title="Intan Angkasa Air Service"
            thumbnail="/images/works/iaas/iaas-1.png"
          >
            Deploying high-altitude solutions. A website for a helicopter
            company that helps their business take off. Higher than your
            localhost.
          </WorkGridItem>
        </Section>
        <Section mb={0}>
          <WorkGridItem
            id="pstopup"
            title="Pasar Top Up"
            thumbnail="/images/works/pstopup/pstopup.png"
          >
            Asynchronous transactions for synchronous victories. Fueling gaming
            addictions with minimal friction. Like a gas station for pixels.
          </WorkGridItem>
        </Section>

        <Section mb={0}>
          <WorkGridItem
            id="arya-tech"
            title="Arya Tech Company"
            thumbnail="/images/works/arya-tech/arya-tech.png"
          >
            The digital storefront for a tech company that actually does tech.
            Clean lines, zero bugs (mostly), and 100% corporate chic.
          </WorkGridItem>
        </Section>

        <Section mb={0}>
          <WorkGridItem
            id="arnimal"
            title="ARnimal"
            thumbnail="/images/works/arnimal/arnimal-thumb.jpg"
          >
            Bringing the zoo to your living room. Pokemon Go, but you actually
            learn something. Animals in 3D, physics in C#.
          </WorkGridItem>
        </Section>
        <Section mb={0}>
          <WorkGridItem
            id="eduflex"
            title="Eduflex"
            thumbnail="/images/works/eduflex/edu-2.png"
          >
            CRUD-ing your way to a degree. A RESTful API for people who want to
            flex their brain. Status: 200 OK (Knowledge Received).
          </WorkGridItem>
        </Section>
        <Section mb={0}>
          <WorkGridItem
            id="credx"
            title="CredX"
            thumbnail="/images/works/credx/thumb.png"
          >
            Command-line credential crating. Because &quot;123456&quot;
            isn&apos;t a security strategy, it&apos;s a prayer. A digital vault
            in your terminal.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
