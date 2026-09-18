import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

const BLOG_POSTS = [
  {
    title: 'Hosting Laravel di cPanel',
    thumbnail: '/images/blogs/laravel-cpanel-thumb.png',
    href: 'https://blog.alfarishi.my.id/blog/hosting-laravel-di-cpanel',
    tags: ['Laravel', 'cPanel', 'Deployment'],
    description:
      'Panduan komprehensif deploy aplikasi Laravel pada shared hosting cPanel tanpa mengorbankan keamanan direktori public.'
  },
  {
    title: 'Menyimpan Tabel di Excel Menjadi Format Gambar',
    thumbnail: '/images/blogs/excel-vba-thumb.png',
    href: 'https://blog.alfarishi.my.id/blog/menyimpan-tabel-di-excel-menjadi-format-gambar-dengan-vba',
    tags: ['Excel', 'VBA', 'Automation'],
    description:
      'Otomasi ekspor range tabel Excel menjadi format gambar berkualitas tinggi menggunakan macro VBA untuk pelaporan berkala.'
  },
  {
    title: 'Kustomisasi Windows Powershell',
    thumbnail: '/images/blogs/wsl-thumb.png',
    href: 'https://blog.alfarishi.my.id/blog/kustomisasi-windows-powershell',
    tags: ['PowerShell', 'Terminal', 'Productivity'],
    description:
      'Kustomisasi terminal Windows PowerShell dengan Oh My Posh, tema modern, dan alias praktis untuk alur kerja developer yang lebih cepat.'
  }
]

const Blogs = () => (
  <Layout
    title="Blogs"
    description="Articles and tutorials about web development, Laravel, system administration, and modern tech tools."
    slug="blogs"
  >
    <Box as="div">
      <Heading as="h3" variant="section-title" mb={{ base: 6, md: 8 }}>
        Blogs
      </Heading>

      <Section delay={0.1} mb={0}>
        <SimpleGrid columns={[1, 1, 2]} gap={{ base: 6, md: 6 }}>
          {BLOG_POSTS.map(post => (
            <GridItem
              key={post.href}
              title={post.title}
              thumbnail={post.thumbnail}
              href={post.href}
              tags={post.tags}
            >
              {post.description}
            </GridItem>
          ))}
        </SimpleGrid>
      </Section>
    </Box>
  </Layout>
)

export default Blogs
