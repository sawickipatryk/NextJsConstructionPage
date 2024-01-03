import {
  Box,
  Grid,
  Card,
  CardMedia,
  Typography,
  Button,
  Container,
  CardContent
} from '@mui/material'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService'
import service1 from './service1.jpg'
import theme from '@/app/theme/theme'

const servicesArray = [
  {
    id: 1,
    cardImg: service1,
    cardIcon: '',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, eligendi!',
    alt: 'service'
  },
  {
    id: 2,
    cardImg: service1,
    cardIcon: '',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, eligendi!',
    alt: 'service'
  },
  {
    id: 3,
    cardImg: service1,
    cardIcon: '',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, eligendi!',
    alt: 'service'
  }
  // {
  //   id: 4,
  //   cardImg: service1,
  //   cardIcon: '',
  //   description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, eligendi!',
  //   alt: 'service'
  // },
  // {
  //   id: 5,
  //   cardImg: service1,
  //   cardIcon: '',
  //   description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, eligendi!',
  //   alt: 'service'
  // },
  // {
  //   id: 6,
  //   cardImg: service1,
  //   cardIcon: '',
  //   description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, eligendi!',
  //   alt: 'service'
  // }
]

export const OurServices = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx,
        padding: '80px 0px'
      }}
      {...otherProps}
    >
      <Container
        maxWidth={'lg'}
      >

        <Typography
          variant={'h2'}
          fontWeight={theme.typography.fontWeightBold}
          sx={{
            textAlign: 'center',
            marginBottom: '20px'
          }}
        >
          OUR SERVICES
        </Typography>
        <Grid
          container
          spacing={2}
        >
          {
          servicesArray.map((service) => {
            return (
              <Grid
                key={service.id}
                item
                xs={12}
                sm={12}
                md={4}

              >
                <Card
                  sx={{
                    backgroundColor: 'inherit',
                    boxShadow: 'none'
                  }}
                >
                  <CardMedia
                    component={'img'}
                    alt={service.alt}
                    image={service.cardImg.src}
                    sx={{
                      width: '100%',
                      borderRadius: '5px'
                    }}
                  />
                  <CardContent
                    sx={{
                      position: 'relative',
                      width: '100%',
                      maxWidth: 'calc(100% - 30px)',
                      backgroundColor: 'white',
                      margin: 'auto',
                      marginTop: '-20px'
                    }}
                  >
                    <HomeRepairServiceIcon
                      fontSize={'large'}
                      sx={{
                        color: theme.palette.primary.main
                      }}
                    />
                    <Typography
                      gutterBottom
                      variant={'body1'}
                      component={'div'}
                      color={theme.palette.text.third}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })
        }
        </Grid>
        <Button
          variant={'text'}
          size={'large'}
          sx={{
            fontSize: '19px',
            marginTop: '20px'
          }}
        >
          SEE MORE OUR SERVICES
        </Button>
      </Container>
    </Box>
  )
}

export default OurServices
