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
      <Box mb={1} sx={{border:"2px solid black",height:"330px"}}>
        <Carousel responsive={responsive}>
          <div> <img style={{height:"285px",objectFit: "cover"}} src="https://images.unsplash.com/photo-1543304216-b46be324b571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1881&q=80" alt="" /> </div>
          <div> <img style={{height:"285px",objectFit: "cover"}} src="https://images.unsplash.com/photo-1514733670139-4d87a1941d55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80" alt="" /> </div>
          <div> <img style={{height:"285px",objectFit: "cover"}} src="https://images.unsplash.com/photo-1514733670139-4d87a1941d55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80" alt="" /> </div>
          <div> <img style={{height:"285px",objectFit: "cover"}} src="https://images.unsplash.com/photo-1514733670139-4d87a1941d55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80" alt="" /> </div>
          <div> <img style={{height:"285px",objectFit: "cover"}} src="https://images.unsplash.com/photo-1514733670139-4d87a1941d55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80" alt="" /> </div>
        </Carousel>
      </Box>
    </>
  );
};

export default Banner;
