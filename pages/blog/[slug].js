import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import Layout from '../../components/layouts/article'
import { Container, Heading, Badge, Link } from '@chakra-ui/react'
// import Main from '../../components/layouts/main'
import BlogSeo from '../../components/layouts/blog-seo'

const WrappedSyntaxHighlighter = ({ children, language }) => (
  <SyntaxHighlighter language={language} style={dracula}>
    {children}
  </SyntaxHighlighter>
)

const CustomHeading = ({ children, fs, mb }) => (
  <Heading display="inline-block" as="h3" fontSize={fs} mb={mb}>
    {children}
  </Heading>
)

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
          <Container>
            <Heading display="inline-block" as="h3" fontSize={26} mb={4}>
              {frontmatter.title} <Badge>{year}</Badge>
            </Heading>
            <MDXRemote
              {...source}
              components={{
                SyntaxHighlighter: WrappedSyntaxHighlighter,
                Link,
                CustomHeading
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
