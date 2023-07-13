import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

const BlogSeo = ({ children, seo }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo {...seo} />
      {children}
    </>
  )
}

export default BlogSeo
