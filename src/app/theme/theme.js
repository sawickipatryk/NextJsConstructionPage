'use client'
import { Roboto } from 'next/font/google'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
})

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  palette: {
    mode: 'light',
    common: {
      black: '#000',
      white: '#fff'
    },
    primary: {
      main: '#FFC436'
    },
    secondary: {
      main: '#fff'
    },
    text: {
      primary: 'rgba(255, 255, 255, 1)',
      secondary: 'rgba(255, 255, 255, 0.6)',
      subtitle: '#FFC436'
    },
    background: {
      firstBackgroundColor: '#F6F6F6',
      secondBackgroundColor: '#fff',
      navBarBackgroundColor: 'rgba(7, 25, 82,0.8)',
      navBarMobileBackgroundColor: 'rgba(7, 25, 82,1)'
    },
    gradient: {
      firstGradient: 'rgba(7, 25, 82,0.7)',
      secondGradient: 'rgba(255, 196, 54,0.5)'
    }
  },
  shape: {
    borderRadius: 4
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontWeightBold: '700',
    fontWeightMedium: '500',
    fontWeightRegular: '400',
    fontWeightLight: '300',
    h1: {
      fontSize: '48px',
      color: 'rgba(255, 255, 255, 1)'
    },
    h2: {
      fontSize: '42px',
      color: 'rgba(255, 255, 255, 1)'
    },
    h3: {
      fontSize: '38px',
      color: 'rgba(255, 255, 255, 1)'
    },
    h4: {
      fontSize: '32px',
      color: 'rgba(255, 255, 255, 1)'
    },
    h5: {
      fontSize: '28px',
      color: 'rgba(255, 255, 255, 1)'
    },
    h6: {
      fontSize: '22px',
      color: 'rgba(255, 255, 255, 1)'
    },
    subtitle1: {
      fontSize: '28px',
      color: 'rgba(255, 255, 255, 1)'
    },
    subtitle2: {
      fontSize: '14px',
      color: 'rgba(255, 255, 255, 1)'
    },
    body1: {
      fontSize: '18px',
      letterSpacing: '0.3px',
      color: 'rgba(255, 255, 255, 1)'
    },
    body2: {
      fontSize: '17px'
    },
    caption: {
      fontSize: '12px',
      color: 'rgba(255, 255, 255, 1)'
    },
    button: {
      fontSize: '16px'
    }
  }

})

export default responsiveFontSizes(theme)
