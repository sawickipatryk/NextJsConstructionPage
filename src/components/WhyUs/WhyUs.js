import * as React from 'react'
import { timelineItemClasses } from '@mui/lab/TimelineItem'
import { Box, Container, Grid, Typography } from '@mui/material'

import whyus from './whyus.jpg'

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab'
import theme from '@/theme/theme'
import Image from 'next/image'

const timelineArray = [
  {
    id: 1,
    label: 'STEP 1'
  },
  {
    id: 2,
    label: 'STEP 2'
  },
  {
    id: 3,
    label: 'STEP 3'
  }
]

export const WhyUs = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx,
        padding: '80px 0px',
        backgroundColor: 'white'
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
            marginBottom: '50px'
          }}
        >
          WHY CHOOSE US?
        </Typography>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={12}
            md={8}
          >
            <Grid
              container
            >
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Box
                  position={'relative'}
                  sx={{
                    zIndex: '1',
                    '&::after': {
                      content: "''",
                      position: 'absolute',
                      width: '300px',
                      height: '100%',
                      border: '4px solid #FFC436',
                      top: '-25px',
                      left: '25px',
                      zIndex: '-1'
                    }
                  }}
                >
                  <Image
                    src={whyus}
                    height={0}
                    width={0}
                    priority
                    style={{
                      width: '300px',
                      height: '100%',
                      maxHeight: '550px',
                      objectFit: 'cover'
                    }}
                    alt={'picture of food'}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                sx={{
                  zIndex: 999,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'white',
                    zIndex: 999,
                    padding: '20px',
                    margin: '-40px 0px 0px 0px',
                    boxShadow: '1px 5px 10px #111',
                    minWidth: '200px',
                    maxWidth: '350px',
                    [theme.breakpoints.up('md')]: {
                      marginLeft: '-140px'
                    }
                  }}
                >
                  <Typography
                    variant={'body1'}
                    sx={{
                      marginBottom: '20px'

                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla exercitationem vitae cum illo rerum, atque veniam aut veritatis explicabo placeat?
                  </Typography>
                  <Typography
                    variant={'body2'}
                    color={theme.palette.text.third}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla exercitationem vitae cum illo rerum, atque veniam aut veritatis explicabo placeat?
                  </Typography>
                </Box>
              </Grid>
            </Grid>

          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Timeline
              sx={{
                flexGrow: 0,
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0
                }
              }}
            >
              {
        timelineArray.map((item, index) => {
          return (
            <TimelineItem
              key={item.id}
            >
              <TimelineSeparator>
                <TimelineDot
                  color={'primary'}
                />
                {
                  index !== timelineArray.length - 1
                    ? <TimelineConnector
                        sx={{
                          height: '160px'
                        }}
                      />
                    : null
                }
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  variant={'body1'}
                >
                  {item.label}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          )
        })
      }
            </Timeline>
          </Grid>
        </Grid>
      </Container>

    </Box>
  )
}

export default WhyUs
