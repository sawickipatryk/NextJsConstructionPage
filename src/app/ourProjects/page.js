'use client'
import React from 'react'
import { Box, Container, Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'
import project1 from './project1.jpg'
import project2 from './project2.jpg'

export const Home = () => {
  const [bgcImg, setBgcImg] = React.useState(project1)

  console.log(bgcImg)

  const onClickButton = (newBgcImg) => {
    console.log(newBgcImg)
    setBgcImg(newBgcImg)
  }

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bgcImg.src})`,
          width: '100%',
          minHeight: '100vh',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container
          maxWidth={'lg'}
        >
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea
                  onClick={() => {
                    console.log(project1.src)
                    onClickButton(project1)
                  }}
                >
                  <CardMedia
                    component={'img'}
                    height={'140'}
                    image={project1.src}
                    alt={'green iguana'}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant={'h5'}
                      component={'div'}
                    >
                      Lizard
                    </Typography>
                    <Typography
                      variant={'body2'}
                      color={'text.secondary'}
                    >
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid
              item
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea
                  onClick={() => {
                    console.log(project2.src)
                    onClickButton(project2)
                  }}
                >
                  <CardMedia
                    component={'img'}
                    height={'140'}
                    image={project2.src}
                    alt={'green iguana'}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant={'h5'}
                      component={'div'}
                    >
                      Lizard
                    </Typography>
                    <Typography
                      variant={'body2'}
                      color={'text.secondary'}
                    >
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
export default Home
