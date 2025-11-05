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

function Website({ Component, pageProps, router }) {
  return (
    <>
      <DefaultSeo {...SEOConfig} />
      <Chakra>
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

export default Website
