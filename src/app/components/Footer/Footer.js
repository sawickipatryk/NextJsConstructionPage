'use client'
import { Box, Container, Grid, Typography, Button, ListItem, ListItemText } from '@mui/material'
import theme from '@/app/theme/theme'

import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import X from '@mui/icons-material/X'
import PhoneIcon from '@mui/icons-material/Phone'
import HomeIcon from '@mui/icons-material/Home'
import FmdGoodIcon from '@mui/icons-material/FmdGood'

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

export const Footer = (props) => {
  const {
    sx,
    ...otherProps
  } = props
  return (
    <Box
      sx={{
        ...sx,
        backgroundColor: theme.palette.background.footerBackgroundColor,
        padding: '40px 0px'
      }}
      {...otherProps}
    >
      <Container
        maxWidth={'lg'}
      >
        <Grid
          container
        >
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
            gap={1}
            xs={12}
            sm={6}
            md={4}
          >
            <Typography
              variant={'h6'}
              noWrap
              component={'a'}
              href={'/'}
              sx={{
                textDecoration: 'none',
                color: 'white'
              }}
            >
              LOGO
            </Typography>
            <Typography
              variant={'caption'}
              color={theme.palette.text.secondary}
              sx={{
                maxWidth: '250px'
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, accusantium?
            </Typography>
            <Box>
              <InstagramIcon />
              <FacebookIcon />
              <LinkedInIcon />
              <X />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                href={page.href}
                sx={{
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
          </Grid>
          <Grid
            xs={12}
            md={4}
            item
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
                              sx={{
                                color: 'white'
                              }}
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
                            {info.secondaryText}
                          </Typography>
                        }
                      />
                    </ListItem>
                  )
                })
              }
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
