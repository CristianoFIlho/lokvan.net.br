import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    lokvan: {
      primary: '#1E3A8A', // Azul principal
      secondary: '#3B82F6', // Azul claro
      accent: '#F59E0B', // Laranja para CTAs
      dark: '#1F2937',
      light: '#F8FAFC',
    }
  },
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Open Sans', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'lokvan.dark',
      }
    }
  },
  components: {
    Button: {
      variants: {
        lokvan: {
          bg: 'lokvan.accent',
          color: 'white',
          _hover: {
            bg: 'orange.500',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.2s',
        }
      }
    }
  }
})

export default theme
