import { Box, Typography } from '@mui/material'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './styles.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import hero1 from './hero1.jpg'
import hero2 from './hero2.jpg'
import theme from '@/app/theme/theme'

export const HeroSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      direction={'vertical'}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className={'mySwiper'}
    >
      <SwiperSlide>
        <Box
          position={'relative'}
          sx={{
            backgroundImage: `url(${hero1.src})`,
            width: '100%',
            height: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
        </Box>
        <Box
          position={'absolute'}
          sx={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: theme.palette.gradient.firstGradient
          }}
        >
        </Box>
        <Box
          position={'absolute'}
          sx={{
            width: '100%',
            maxWidth: '1200px'
          }}
        >
          <Box
            sx={{
              maxWidth: '600px'
            }}
          >
            <Typography
              variant={'subtitle1'}
              color={theme.palette.text.subtitle}
            >
              Circle get smaller
            </Typography>
            <Typography
              variant={'h1'}
              color={theme.palette.text.primary}
              fontWeight={theme.typography.fontWeightBold}
            >
              WE CAN DO IT
            </Typography>
            <Typography
              variant={'body1'}
              color={theme.palette.text.secondary}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam, veniam enim saepe amet cupiditate quisquam asperiores accusamus libero veritatis.
            </Typography>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          position={'relative'}
          sx={{
            backgroundImage: `url(${hero2.src})`,
            width: '100%',
            height: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
        </Box>
        <Box
          position={'absolute'}
          sx={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: theme.palette.gradient.firstGradient
          }}
        >
        </Box>
        <Box
          position={'absolute'}
          sx={{
            width: '100%',
            maxWidth: '1200px'
          }}
        >
          <Box
            sx={{
              maxWidth: '600px'
            }}
          >
            <Typography
              variant={'subtitle1'}
              color={theme.palette.text.subtitle}
            >
              Circle get smaller
            </Typography>
            <Typography
              variant={'h1'}
              color={theme.palette.text.primary}
              fontWeight={theme.typography.fontWeightBold}
            >
              WE CAN DO IT
            </Typography>
            <Typography
              variant={'body1'}
              color={theme.palette.text.secondary}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam, veniam enim saepe amet cupiditate quisquam asperiores accusamus libero veritatis.
            </Typography>
          </Box>
        </Box>
      </SwiperSlide>
    </Swiper>
  )
}

export default HeroSlider
