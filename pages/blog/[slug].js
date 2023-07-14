import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { Container, Badge, Link } from '@chakra-ui/react'

import Layout from '../../components/layouts/article'
import BlogSeo from '../../components/layouts/blog-seo'
import { Code, CustomHeading, Title, BlogImage } from '../../components/blog'

export default function BlogPostPage({ source, frontmatter }) {
  const date = new Date(frontmatter.date)
  const year = date.getFullYear()

  return (
    <>
      <BlogSeo
        seo={{
          title: `Blog | ${frontmatter.title}`,
          description: frontmatter.description,
          openGraph: {
            title: frontmatter.title,
            description: frontmatter.description
            // tambahkan meta tambahan seperti image jika diperlukan
          }
        }}
      >
        <Layout>
          <Container maxW="container.sm">
            <Title>
              {frontmatter.title} <Badge>{year}</Badge>
            </Title>
            <MDXRemote
              {...source}
              components={{
                Link,
                Code,
                CustomHeading,
                BlogImage
              }}
            />
          </Container>
        </Layout>
      </BlogSeo>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync('content')
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('content', `${params.slug}.mdx`),
    'utf-8'
  )
  const { data: frontmatter, content } = matter(markdownWithMeta)
  const source = await serialize(content)
  return {
    props: {
      source,
      frontmatter
    }
  }
}
