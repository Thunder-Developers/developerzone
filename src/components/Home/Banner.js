import { Box } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Banner1 from "../../Assest/Banner-1.jpg"
import Banner2 from "../../Assest/Banner-2.jpg"
import Banner3 from "../../Assest/Banner-3.jpg"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  return (
    <>
      <Box mb={1} sx={{ height: "330px" }}>
        <Carousel responsive={responsive} infinite={true}>
          <div> <img style={{ height: "285px", objectFit: "cover", width: "1500px" }} src={Banner3} alt="" /> </div>
          <div> <img style={{ height: "285px", objectFit: "cover", width: "1500px" }} src={Banner1} alt="" /> </div>
          <div> <img style={{ height: "285px", objectFit: "cover", }} src={Banner2} alt="" /> </div>
        </Carousel>
      </Box>
    </>
  );
};

export default Banner;
