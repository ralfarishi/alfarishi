import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

const Blogs = () => (
  <Layout
    title="Blogs"
    description="Articles and tutorials about web development, Laravel, system administration, and modern tech tools."
    slug="blogs"
  >
    <Container maxW="container.lg" px={6}>
      <Heading as="h3" variant="section-title" mb={{ base: 4, md: 8 }}>
        Blogs
      </Heading>

      <Section delay={0.1} mb={0}>
        <SimpleGrid columns={[1, 1, 2]} gap={{ base: 4, md: 6 }}>
          <GridItem
            title="Hosting Laravel di cPanel"
            thumbnail="/images/blogs/laravel-cpanel-thumb.png"
            href="https://blog.alfarishi.my.id/blog/hosting-laravel-di-cpanel"
          />
          <GridItem
            title="Menyimpan Tabel di Excel Menjadi Format Gambar"
            thumbnail="/images/blogs/excel-vba-thumb.png"
            href="https://blog.alfarishi.my.id/blog/menyimpan-tabel-di-excel-menjadi-format-gambar-dengan-vba"
          />
          <GridItem
            title="Kustomisasi Windows Powershell"
            thumbnail="/images/blogs/wsl-thumb.png"
            href="https://blog.alfarishi.my.id/blog/kustomisasi-windows-powershell"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Blogs
