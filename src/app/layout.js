import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider } from '@mui/material/styles'

import theme from './theme/theme'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export const RootLayout = ({ children }) => {
  return (
    <html lang={'en'}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Navbar/>
            {children}
            <Footer/>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
export default RootLayout
