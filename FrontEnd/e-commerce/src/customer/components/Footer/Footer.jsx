import { Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <Grid className='pt-8 bg-black text-white mt-10 py-3'
        container
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'> Company </Typography>
          <div>
            <Button className='pb-5' variant='h6'> About </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6'> Blog </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6'> Press </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6'> Careers </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6'> Partners </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'> Solutions </Typography>
          <div>
            <Button className='pb-5' variant='h6'> Marketing </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6'> Analytics </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6'> Commerce </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6'> Insights </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6'> Support </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'> Documentation </Typography>
          <div>
            <Button className='pb-5' variant='h6'> Guides </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6'> API Status </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'> Legal </Typography>
          <div>
            <Button className='pb-5' variant='h6'> Claim </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6'> Privacy </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6'> Term </Button>
          </div>
        </Grid>
        <Grid className='pt-20 pb-5' item xs={12}>
          <Typography variant='body2' component='p' align='center'>
            &copy; 2023 My Company. All rights reserved
          </Typography>
          <Typography variant='body2' component='p' align='center'>
            Licensed under CC BY-SA. rev 2024.7.12.12575
          </Typography>
          <Typography variant='body2' component='p' align='center'>
            Icons made by{' '} 
            <Link href='https://www.freepik.com' color='inherit' underline='always'>
              Freepik
            </Link>{' '}
            from{' '}
            <Link href='https://www.flaticon.com' color='inherit' underline='always'>
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>        
      </Grid>
    </div>
  )
}

export default Footer
