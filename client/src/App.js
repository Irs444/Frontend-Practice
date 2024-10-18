import React, { useEffect, useState } from 'react'
import { Box, Button, Card, FormControl, FormLabel, Grid2, Paper, TextField, Typography } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./App.css"

const App = () => {

  const [desktop, setDesktop] = useState(true)

  // const isMobile = () => {
  //   if (/Android|iPhone/i.test(navigator.userAgent)) {
  //    setMobile(true)
  //   }else{
  //     setMobile(false)
  //   }
  // }

  const checkWindowSize = () => {

    let windowWidth;
    
    if (typeof window !== 'undefined') {
      windowWidth = window.innerWidth
    }
    if (windowWidth >= 1024) {
      setDesktop(true)
    } else {
      setDesktop(false)
    }
  }

  useEffect(() => {
    checkWindowSize()
  }, [desktop])


  return (
    <div>
      <Grid2 container className="main-container">
        <Grid2 item size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
          <Box className="header">
            <Typography variant='h4'>Expense Reporting System</Typography>
            <Typography>powered via Gaviral Gamtec</Typography>
          </Box>
        </Grid2>
        <Grid2 item size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
          <Box className="content">
            <Paper elevation={3} className='card'>
              <Typography variant='h4'>Sign in</Typography>
              <FormControl className='form'>
                <FormLabel className='form-label'>Email</FormLabel>
                <TextField className='textfield' size='small' />
              </FormControl>
              <FormControl className='form'>
                <FormLabel className='form-label' >Email</FormLabel>
                <TextField size='small' />
              </FormControl>
              <Box className='btn'>

                Sign in
              </Box>
            </Paper>
          </Box>
        </Grid2>
        {
          desktop ? (
            <Grid2 container className="desktop-footer" size={12}>
              <Grid2 item size={{ xl: 4, lg: 4, md: 12, sm: 12, xs: 12 }}>
                <Box>
                  LOGO
                </Box>
              </Grid2>
              <Grid2 item size={{ xl: 4, lg: 4, md: 12, sm: 12, xs: 12 }}>
                <Box>
                  <FacebookIcon />
                  <InstagramIcon />
                  <XIcon />
                  <LinkedInIcon />
                </Box>
              </Grid2>
              <Grid2 item size={{ xl: 4, lg: 4, md: 12, sm: 12, xs: 12 }}>
                <Box>
                  Copyright © 2017-24 Gaviral Gamtec Private Limited. All Rights Reserved
                </Box>
              </Grid2>
            </Grid2>

          ) : (
            <Grid2 container className="mobile-footer" size={12}>
              <Grid2 item size={{ xl: 4, lg: 4, md: 12, sm: 12, xs: 12 }}>
                <Box>
                  LOGO
                </Box>
              </Grid2>
              <Grid2 item size={{ xl: 4, lg: 4, md: 12, sm: 12, xs: 12 }}>
                <Box>
                  <FacebookIcon />
                  <InstagramIcon />
                  <XIcon />
                  <LinkedInIcon />
                </Box>
              </Grid2>
              <Grid2 item size={{ xl: 4, lg: 4, md: 12, sm: 12, xs: 12 }}>
                <Box>
                  Copyright © 2017-24 Gaviral Gamtec Private Limited. All Rights Reserved
                </Box>
              </Grid2>
            </Grid2>
          )
        }
      </Grid2>
    </div>
  )
}

export default App