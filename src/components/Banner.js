import { Box } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
const images = [
  {
    image1:
      "",
  },
  {
    image2:
      "",
  },
  {
    image3:
      "",
  },
  {
    image4:
      "",
  },
];
console.log(images[0]);

const Banner = () => {

  //   <div className="controls-wrapper">
  //   <button onClick={removeItem}>Remove Item</button>
  //   <button onClick={addItem}>Add Item</button>
  // </div>
  // <hr className="seperator" />
  // <div className="carousel-wrapper">
  //   <Carousel breakPoints={breakPoints}>
  //     {items.map((item) => (
  //       <Item key={item}>{item}</Item>
  //     ))}
  //   </Carousel>
  // </div>
  return (
    <>
      <Box mb={1} sx={{height:"350px",border:"2px solid black"}}>
        <Carousel responsive={responsive}>
          <div style={{border:"1px solid red",height:"200px"}}>10</div>
          <div style={{border:"1px solid red",height:"200px"}}>1</div>
          <div style={{border:"1px solid red",height:"200px"}}>2</div>
          <div style={{border:"1px solid red",height:"200px"}}>3</div>
          <div style={{border:"1px solid red",height:"200px"}}>4</div>
        </Carousel>
      </Box>
    </>
  );
};

export default Banner;
