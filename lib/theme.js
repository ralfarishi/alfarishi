import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#FFFCF5', '#1A1A1A')(props),
      color: mode('#2D2D2A', '#F0EAD6')(props),
      transition: 'background-color 0.2s ease, color 0.2s ease'
    },
    '*:focus-visible': {
      outline: '2px solid',
      outlineColor: mode('#B85D3B', '#D4A373')(props),
      outlineOffset: '2px'
    },
    '::selection': {
      bg: mode('#EBDCB2', '#D4A373')(props),
      color: mode('#2D2D2A', '#1A1A1A')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': props => ({
        textDecoration: 'none',
        fontSize: 22,
        marginTop: 6,
        marginBottom: 4,
        position: 'relative',
        _after: {
          content: '""',
          display: 'block',
          width: '40px',
          height: '4px',
          bg: mode('#B85D3B', '#D4A373')(props),
          marginTop: 2,
          borderRadius: 'full'
        }
      }),
      'page-title': {
        fontSize: '2.5rem',
        fontWeight: '800',
        letterSpacing: '-0.02em'
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#B85D3B', '#D4A373')(props),
      textUnderlineOffset: 4,
      _hover: {
        textDecoration: 'none',
        color: mode('#8C3E21', '#E5B88B')(props)
      }
    })
  },
  Button: {
    baseStyle: {
      borderRadius: 'xl',
      fontWeight: '600'
    },
    variants: {
      soft: props => ({
        bg: mode('whiteAlpha.800', 'whiteAlpha.100')(props),
        backdropFilter: 'blur(10px)',
        border: '1px solid',
        borderColor: mode('blackAlpha.100', 'whiteAlpha.100')(props),
        _hover: {
          bg: mode('blackAlpha.50', 'whiteAlpha.200')(props)
        }
      }),
      'pill-outline': props => ({
        borderRadius: 'full',
        height: '52px',
        px: 8,
        fontWeight: '800',
        fontFamily: 'heading',
        letterSpacing: '0.02em',
        border: '1px solid',
        borderColor: mode('#B85D3B', '#D4A373')(props),
        color: mode('#B85D3B', '#D4A373')(props),
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        _hover: {
          bg: mode('#B85D3B', '#D4A373')(props),
          color: mode('white', '#1A1A1A')(props),
          transform: 'translateY(-2px)',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.12)'
        }
      }),
      'pill-solid': props => ({
        borderRadius: 'full',
        height: '52px',
        px: 8,
        fontWeight: '800',
        fontFamily: 'heading',
        letterSpacing: '0.02em',
        bg: mode('#B85D3B', '#D4A373')(props),
        color: mode('white', '#1A1A1A')(props),
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        _hover: {
          bg: mode('#8C3E21', '#E5B88B')(props),
          transform: 'translateY(-2px)',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.15)'
        }
      })
    }
  }
}

const fonts = {
  heading: 'var(--font-outfit), "Outfit", "Plus Jakarta Sans", sans-serif',
  body: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
  serif: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif'
}

const semanticTokens = {
  colors: {
    'bg.canvas': { default: '#FFFCF5', _dark: '#1A1A1A' },
    'bg.surface': { default: '#F7E3DC33', _dark: '#26211E' },
    'bg.subtle': { default: 'blackAlpha.50', _dark: 'whiteAlpha.50' },
    'border.subtle': { default: 'blackAlpha.100', _dark: 'whiteAlpha.100' },
    'border.accent': { default: '#B85D3B', _dark: '#D4A373' },
    'text.primary': { default: '#2D2D2A', _dark: '#F0EAD6' },
    'text.muted': { default: '#6E6B65', _dark: '#A6A095' },
    'accent.default': { default: '#B85D3B', _dark: '#D4A373' },
    'accent.muted': { default: '#C87A5B', _dark: '#B38558' }
  }
}

const colors = {
  warm: {
    50: '#FFFCF5',
    100: '#F5F1E9',
    200: '#EBDCB2',
    500: '#B85D3B',
    600: '#8C3E21',
    700: '#2D2D2A'
  },
  modern: {
    50: '#F0EAD6',
    100: '#D4A373',
    800: '#242424',
    900: '#1A1A1A'
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  storageKey: 'chakra-ui-color-mode'
}

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  semanticTokens,
  colors
})
export default theme
