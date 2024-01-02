import theme from '@/app/theme/theme'
import { Box, Container, Grid, Typography } from '@mui/material'
import CountUp from 'react-countup'

export const Achievements = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx,
        marginTop: '-60px',
        zIndex: 9999
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
            xs={12}
            md={5}
            sx={{
              backgroundColor: theme.palette.primary.main,
              padding: '30px'
            }}
          >
            <Typography
              variant={'subtitle2'}
              fontWeight={theme.typography.fontWeightBold}
            >
              We got
            </Typography>
            <Typography
              sx={{
                marginBottom: '30px'
              }}
              variant={'h5'}
              fontWeight={theme.typography.fontWeightBold}
            >
              25 years experience of building and refurbishment
            </Typography>
            <Typography
              variant={'body1'}
              color={theme.palette.text.third}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique doloremque veniam
              excepturi perferendis fugiat? Ipsam expedita quidem aperiam harum ipsa?
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3.5}
          >
            <Typography>
              More then
            </Typography>
            <CountUp end={200} />
          </Grid>
          <Grid
            item
            xs={12}
            md={3.5}
          >
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Achievements
