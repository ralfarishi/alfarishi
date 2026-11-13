import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  const handleToggle = () => {
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      document.startViewTransition(() => {
        toggleColorMode()
      })
    } else {
      toggleColorMode()
    }
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          variant="soft"
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={handleToggle}
          borderRadius="xl"
          _active={{ transform: 'scale(0.95)' }}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
