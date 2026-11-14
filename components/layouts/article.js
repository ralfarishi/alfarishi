import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'

const variants = {
  hidden: { opacity: 0, x: 0, y: 30 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 30 }
}

const BASE_URL = 'https://alfarishi.my.id'

const Layout = ({
  children,
  title,
  description,
  image,
  slug,
  noindex = false
}) => {
  const fullTitle = title
    ? `${title} | Ramiza Al Farishi`
    : 'Ramiza Al Farishi | Web Developer & Software Engineer'
  const pageDescription =
    description ||
    'Web developer and software engineer building modern websites, custom web applications, and high-performance digital experiences.'
  const pageUrl = slug ? `${BASE_URL}/${slug.replace(/^\//, '')}` : BASE_URL
  const pageImage = image
    ? image.startsWith('http')
      ? image
      : `${BASE_URL}${image}`
    : `${BASE_URL}/images/og-default.png`

  return (
    <>
      <NextSeo
        title={title || undefined}
        description={pageDescription}
        canonical={noindex ? undefined : pageUrl}
        noindex={noindex}
        nofollow={noindex}
        openGraph={{
          type: 'website',
          url: pageUrl,
          title: fullTitle,
          description: pageDescription,
          images: [
            {
              url: pageImage,
              width: 1200,
              height: 630,
              alt: title || 'Ramiza Al Farishi - Web Developer & Software Engineer'
            }
          ],
          siteName: 'Ramiza Al Farishi Portfolio'
        }}
        twitter={{
          cardType: 'summary_large_image',
          title: fullTitle,
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
