import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbLaravelCpanel from '../public/images/blogs/laravel-cpanel-thumb.png'
import thumbVbaExcel from '../public/images/blogs/excel-vba-thumb.png'
import thumbWsl from '../public/images/blogs/wsl-thumb.png'

const Blogs = () => (
  <Layout title="Blogs">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Blogs
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <GridItem
            title="Hosting Laravel di cPanel"
            thumbnail={thumbLaravelCpanel}
            href="https://blog.alfarishi.my.id/blog/hosting-laravel-di-cpanel"
          />
          <GridItem
            title="Menyimpan Tabel di Excel Menjadi Format Gambar"
            thumbnail={thumbVbaExcel}
            href="https://blog.alfarishi.my.id/blog/menyimpan-tabel-di-excel-menjadi-format-gambar-dengan-vba"
          />
          <GridItem
            title="Kustomisasi Windows Powershell"
            thumbnail={thumbWsl}
            href="https://blog.alfarishi.my.id/blog/kustomisasi-windows-powershell"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Blogs
export { getServerSideProps } from '../components/chakra'
