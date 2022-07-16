import { useState } from "react";
import { Box } from "@mui/system";
import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const images = [
  {
    image1:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80",
  },
  {
    image2:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    image3:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    image4:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const Banner = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const addItem = () => {
    const nextItem = Math.max(1, items.length + 1);
    setItems([...items, nextItem]);
  };

  const removeItem = () => {
    const endRange = Math.max(0, items.length - 1);
    setItems(items.slice(0, endRange));
  };
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
      <Box mb={1}>
        <Box
          sx={{
            height: "250px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton>
            <ArrowBackIosOutlinedIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <ArrowForwardIosOutlinedIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
