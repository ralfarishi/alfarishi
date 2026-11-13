import { Analytics } from '@vercel/analytics/react'
import {
  Outfit,
  Plus_Jakarta_Sans,
  Instrument_Serif,
  JetBrains_Mono
} from 'next/font/google'

import Layout from '../components/layouts/main'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'

import { DefaultSeo } from 'next-seo'
import SEOConfig from '../next-seo.config.js'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap'
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap'
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap'
})

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router, cookies }) {
  return (
    <div
      className={`${outfit.variable} ${jakarta.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
      style={{
        '--font-outfit': outfit.style.fontFamily,
        '--font-jakarta': jakarta.style.fontFamily,
        '--font-instrument-serif': instrumentSerif.style.fontFamily,
        '--font-mono': jetbrainsMono.style.fontFamily
      }}
    >
      <DefaultSeo {...SEOConfig} />
      <Chakra cookies={cookies}>
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
    </div>
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
