import { useState, useEffect } from 'react'
import { IconButton, useColorModeValue } from '@chakra-ui/react'
import { ChevronUpIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const bg = useColorModeValue('whiteAlpha.800', 'blackAlpha.700')
  const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const iconColor = useColorModeValue('#B85D3B', '#D4A373')
  const hoverBg = useColorModeValue('#B85D3B', '#D4A373')
  const hoverColor = useColorModeValue('white', '#1A1A1A')

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            right: '1.5rem',
            bottom: 'calc(5.5rem + env(safe-area-inset-bottom, 0px))',
            zIndex: 90
          }}
        >
          <IconButton
            icon={<ChevronUpIcon fontSize="xl" />}
            aria-label="Back to top"
            onClick={scrollToTop}
            size="md"
            isRound
            bg={bg}
            color={iconColor}
            backdropFilter="blur(12px)"
            border="1px solid"
            borderColor={borderColor}
            boxShadow="0 8px 24px rgba(0,0,0,0.12)"
            transition="all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
            _hover={{
              bg: hoverBg,
              color: hoverColor,
              transform: 'translateY(-3px)',
              boxShadow: '0 12px 28px rgba(0,0,0,0.2)'
            }}
            _active={{
              transform: 'scale(0.95)'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
