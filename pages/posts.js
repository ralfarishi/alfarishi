import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbBashPowershell from '../public/images/contents/bash-thumb.png'
import thumbWSLCustom from '../public/images/contents/wsl-thumb.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to add git bash to windows powershell"
            thumbnail={thumbBashPowershell}
            href="https://alfarishi.medium.com/menambahkan-git-bash-ke-windows-terminal-55d15f6ea611"
            imgHeight="500px"
          />
          <GridItem
            title="How to customize your windows powershell"
            thumbnail={thumbWSLCustom}
            href="https://alfarishi.medium.com/windows-terminal-instalasi-dan-kostumisasi-9b64367d682c"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Coming soon
        </Heading>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
