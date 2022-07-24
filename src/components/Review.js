import React from "react";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Img from "../Assest/oil-img.jpg";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import CardContent from "@mui/material/CardContent";
const Review = () => {
  return (
    <>
    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",padding:"30px 0px",flexDirection:"column"}}>
        <Typography variant="h4">What Our Customer Say</Typography>
        <Card sx={{ maxWidth: 450, borderRadius:"12px",marginTop:"20px"}} variant="outlined">
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                A
              </Avatar>
            }
            title="Ayush Shrivastav"
            subheader="September 14, 2016"
          />
          <CardContent>
                <Box sx={{display:"flex"}}>
                    <Typography sx={{backgroundColor:"#34B3F1",color:"white",borderRadius:"3px",fontSize:"1.4rem"}}>5.0</Typography>
                    <Typography sx={{color:"gold",fontSize:"1.4rem"}}>&#9733;</Typography>
                </Box>
            <Typography variant="subtitle1">I wanted to use natural products And I am loving it. I just love all of them. The website works perfectly. Payment is secure and delivery was on time. This is the best brand in this category.</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Review;
