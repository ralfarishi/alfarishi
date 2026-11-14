import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@graph': [
                  {
                    '@type': 'Person',
                    '@id': 'https://alfarishi.my.id/#person',
                    name: 'Ramiza Al Farishi',
                    jobTitle: 'Web Developer & Software Engineer',
                    url: 'https://alfarishi.my.id',
                    image: 'https://alfarishi.my.id/images/profile-pic.jpg',
                    sameAs: [
                      'https://github.com/ralfarishi',
                      'https://linkedin.com/in/ramiza-al-farishi-a82a55208/',
                      'https://instagram.com/ramiza27_'
                    ],
                    knowsAbout: [
                      'Web Development',
                      'Frontend Engineering',
                      'Fullstack Web Applications',
                      'Next.js',
                      'React',
                      'TypeScript',
                      'Tailwind CSS'
                    ]
                  },
                  {
                    '@type': 'WebSite',
                    '@id': 'https://alfarishi.my.id/#website',
                    url: 'https://alfarishi.my.id',
                    name: 'Ramiza Al Farishi Portfolio',
                    publisher: { '@id': 'https://alfarishi.my.id/#person' }
                  },
                  {
                    '@type': 'ProfessionalService',
                    '@id': 'https://alfarishi.my.id/#service',
                    name: 'Ramiza Al Farishi - Web Development Services',
                    url: 'https://alfarishi.my.id',
                    image: 'https://alfarishi.my.id/images/og-default.png',
                    description:
                      'Professional web development, modern landing pages, e-commerce, and custom dynamic web applications.',
                    provider: { '@id': 'https://alfarishi.my.id/#person' }
                  }
                ]
              })
            }}
          />
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={theme.config.initialColorMode}
            storageKey="chakra-ui-color-mode"
            type="cookie"
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
