import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import Layout from '../components/layouts/article'
import Section from '../components/section'
import { BlogGridItem } from '../components/grid-item'

export default function Blog({ posts }) {
  return (
    <>
      <Layout title="Blogs">
        <Container>
          <Heading as="h3" fontSize={20} mb={4}>
            Blogs
          </Heading>

          {/* <List>
              {posts.map(post => (
                <ListItem key={post.slug}>
                  <NextLink href={`/blog/${post.slug}`}>
                    <Link>{post.frontmatter.title}</Link>
                  </NextLink>
                </ListItem>
              ))}
            </List> */}
          <Section delay={0.1}>
            <SimpleGrid columns={[1, 2, 2]} gap={6}>
              {posts.map(post => (
                <BlogGridItem
                  key={post.slug}
                  slug={post.slug}
                  title={post.frontmatter.title}
                  thumbnail={`/images/${post.frontmatter.thumbnailUrl}`}
                  imgHeight={500}
                  imgWidth={800}
                ></BlogGridItem>
              ))}
            </SimpleGrid>
          </Section>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync('content')
  const posts = files.map(filename => {
    const slug = filename.replace('.mdx', '')
    const markdownWithMeta = fs.readFileSync(
      path.join('content', filename),
      'utf-8'
    )
    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter
    }
  })
  return {
    props: {
      posts
    }
  }
}

// export { getServerSideProps } from '../components/chakra'
