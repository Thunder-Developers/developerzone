import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <>
      <Box sx={{backgroundColor:"black",color:"white"}}>
        <Typography sx={{padding:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}>
        © 2022 - 2Pahadi Pvt. Ltd. All Rights Reserved
        </Typography>
      </Box>
    </>
  )
}

export default Footer
