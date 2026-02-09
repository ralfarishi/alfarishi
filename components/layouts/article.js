import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'

const variants = {
  hidden: { opacity: 0, x: 0, y: 30 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 30 }
}

const BASE_URL = 'https://www.alfarishi.my.id'

const Layout = ({ children, title, description, image, slug }) => {
  const pageTitle = title
    ? `${title} | Ramiza Al Farishi`
    : 'Ramiza Al Farishi | Personal Website'
  const pageDescription =
    description ||
    `${title} - A project by Ramiza Al Farishi. Explore the details, tech stack, and features.`
  const pageUrl = slug === '' ? BASE_URL : `${BASE_URL}/${slug}`
  const pageImage = image
    ? `${BASE_URL}${image}`
    : `${BASE_URL}/images/og-default.png`

  return (
    <>
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        canonical={pageUrl}
        openGraph={{
          type: 'article',
          url: pageUrl,
          title: pageTitle,
          description: pageDescription,
          images: [
            {
              url: pageImage,
              width: 1200,
              height: 630,
              alt: title || 'Ramiza Al Farishi Portfolio'
            }
          ],
          siteName: 'Ramiza Al Farishi | Personal Website'
        }}
        twitter={{
          cardType: 'summary_large_image',
          title: pageTitle,
          description: pageDescription
        }}
      />
      <motion.article
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'relative' }}
      >
        {children}
      </motion.article>
    </>
  )
}

export default Layout
