import { Analytics } from '@vercel/analytics/react'
import dynamic from 'next/dynamic.js'

import Layout from '../components/layouts/main'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'

import { DefaultSeo } from 'next-seo'
import SEOConfig from '../next-seo.config.js'

const Fonts = dynamic(() => import('../components/fonts'), { ssr: true })

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router, cookies }) {
  return (
    <>
      <DefaultSeo {...SEOConfig} />
      <Chakra cookies={cookies}>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence
            mode="wait"
            initial={true}
            onExitComplete={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 })
              }
            }}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
          <Analytics />
        </Layout>
      </Chakra>
    </>
  )
}

// Pass cookies to Chakra for SSR color mode support
Website.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return {
    pageProps,
    cookies: ctx.req?.headers.cookie ?? ''
  }
}

export default Website
