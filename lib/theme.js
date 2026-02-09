import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#FFFCF5', '#1A1A1A')(props),
      color: mode('#2D2D2A', '#F0EAD6')(props),
      transition: 'background-color 0.2s ease, color 0.2s ease'
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
          bg: mode('#E29578', '#D4A373')(props),
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
      color: mode('#E29578', '#D4A373')(props),
      textUnderlineOffset: 4,
      _hover: {
        textDecoration: 'none',
        color: mode('#C87A5B', '#E5B88B')(props)
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
      })
    }
  }
}

const fonts = {
  heading: "'Outfit', 'Plus Jakarta Sans', sans-serif",
  body: "'Plus Jakarta Sans', sans-serif"
}

const colors = {
  warm: {
    50: '#FFFCF5',
    100: '#F5F1E9',
    200: '#EBDCB2',
    500: '#E29578',
    600: '#C87A5B',
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

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
