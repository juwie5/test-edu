import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: {
    html: {
      fontSize: '10px',
    },
    body: {
      fontSize: '1.4rem',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  },
}

const colors = {
  color: {
    lightyellow: '#F6DC8A',
    lightyellow2: '#F2D780',
    edukoyablue: '#195EF7',
    darkblue: '#000059',
    printblue: '#104BA0',
    greycol: '#535C69',
    koyapink: '#EA3F67',
    edkdarkpink: ' #571021',
    white: '#FFFFFF',
  },
}

export const theme = extendTheme({ colors, styles })
