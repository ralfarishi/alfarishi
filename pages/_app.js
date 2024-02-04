import { Analytics } from '@vercel/analytics/react'

import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'

import { DefaultSeo } from 'next-seo'
import SEOConfig from '../next-seo.config.js'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <>
      <Chakra cookies={pageProps.cookies}>
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
            <DefaultSeo {...SEOConfig} />
            <Component {...pageProps} key={router.route} />
            <Analytics />
          </AnimatePresence>
        </Layout>
      </Chakra>
    </>
  )
}

export default Website
