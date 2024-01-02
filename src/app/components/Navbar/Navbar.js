import * as React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  ListItemText,
  List,
  Button,
  ListItem
} from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'
import PhoneIcon from '@mui/icons-material/Phone'
import HomeIcon from '@mui/icons-material/Home'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import MenuIcon from '@mui/icons-material/Menu'
import theme from '@/app/theme/theme'

const pages = [
  {
    id: 1,
    buttonText: 'HOME',
    href: '/'
  },
  {
    id: 2,
    buttonText: 'OUR PROJECTS',
    href: '/projects'
  },
  {
    id: 3,
    buttonText: 'OUR SERVICES',
    href: '/services'
  },
  {
    id: 4,
    buttonText: 'ABOUT US',
    href: '/about'
  },
  {
    id: 5,
    buttonText: 'CONTACT',
    href: '/contact'
  }
]
const infoArrays = [
  {
    id: 1,
    primaryText: '99-999-99',
    secondaryText: 'Make a call',
    icon: 'phone'
  },
  {
    id: 2,
    primaryText: 'Example@example.com',
    secondaryText: 'Send a email',
    icon: 'home'
  },
  {
    id: 3,
    primaryText: '99-999 Warsaw',
    secondaryText: 'Our Location',
    icon: 'pin'
  }

]

export const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const {
    sx,
    ...otherProps
  } = props

  return (
    <AppBar
      position={'fixed'}
      {...otherProps}
      sx={{
        backgroundColor: 'initial',
        boxShadow: 'none'
      }}
    >
      <Container maxWidth={'lg'}>
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'column',
              width: '100%'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '10px'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <AdbIcon
                  fontSize={'large'}
                  sx={{
                    marginRight: '10px',
                    color: theme.palette.primary.main
                  }}
                />
                <Typography
                  variant={'h6'}
                  noWrap
                  component={'a'}
                  href={'/'}
                  sx={{
                    textDecoration: 'none'
                  }}
                >
                  LOGO
                </Typography>
              </Box>
              <List
                sx={{
                  display: 'flex',
                  padding: '0px'
                }}
              >
                {
                  infoArrays.map((info) => {
                    return (
                      <ListItem
                        key={info.id}
                        sx={{
                          '&:last-of-type': {
                            '& .MuiTypography-root': {
                              minWidth: '110px'
                            }
                          },
                          padding: '0px',
                          margin: '0px',
                          paddingRight: '10px',
                          width: '100%'
                        }}
                      >
                        {
                          info.icon === 'phone'
                            ? <PhoneIcon
                                sx={{
                                  color: theme.palette.primary.main,
                                  marginRight: '10px'
                                }}
                              />
                            : info.icon === 'home'
                              ? <HomeIcon
                                  sx={{
                                    color: theme.palette.primary.main,
                                    marginRight: '10px'
                                  }}
                                />
                              : info.icon === 'pin'
                                ? <FmdGoodIcon
                                    sx={{
                                      color: theme.palette.primary.main,
                                      marginRight: '10px'
                                    }}
                                  />
                                : null
                        }
                        <ListItemText
                          primary={
                            <>
                              <Typography
                                variant={'subtitle2'}
                              >
                                {info.primaryText}
                              </Typography>

                            </>
                          }
                          secondary={
                            <Typography
                              variant={'caption'}
                              color={theme.palette.text.secondary}
                            >
                              {info.primaryText}
                            </Typography>
                          }
                        />
                      </ListItem>
                    )
                  })
                }
              </List>
            </Box>
            <Box>
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  padding: '0px 10px',
                  backgroundColor: theme.palette.background.navBarBackgroundColor
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page.id}
                    href={page.href}
                    onClick={handleCloseNavMenu}
                    sx={{
                      padding: '16px 20px',
                      color: 'white',
                      display: 'block',
                      '&:hover': {
                        color: theme.palette.primary.main
                      }
                    }}
                  >
                    {page.buttonText}
                  </Button>
                ))}
              </Box>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size={'large'}
              aria-label={'account of current user'}
              aria-controls={'menu-appbar'}
              aria-haspopup={'true'}
              onClick={handleOpenNavMenu}
              color={'inherit'}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id={'menu-appbar'}
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.id}
                  href={page.href}
                  onClick={handleCloseNavMenu}
                  sx={{
                    padding: '16px 20px',
                    color: 'white',
                    display: 'block',
                    '&:hover': {
                      color: theme.palette.primary.main
                    }
                  }}
                >
                  {page.buttonText}
                </Button>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant={'h5'}
            noWrap
            component={'a'}
            href={'#app-bar-with-responsive-menu'}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            LOGO
          </Typography>

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
