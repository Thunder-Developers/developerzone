import React from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Img1 from "../../Assest/riceicon.jpg";
import Img2 from "../../Assest/pulsesicon.jpg";
import Img3 from "../../Assest/speciesicon.jpg";
import Img4 from "../../Assest/seedsicon.jpg";
import Img5 from "../../Assest/saltsicon.jpg";
import Img6 from "../../Assest/Flouricon.jpg";
import Img7 from "../../Assest/Herbicon.jpg";
import Img8 from "../../Assest/pickelsicon.jpg";

const Categories = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor:"pointer"
          }}
        >
          {" "}
          <img
            style={{
              maxWidth: "70%",
              aspectRatio: "1 / 1",
              width: "150px",
              borderRadius: "50%",
              cursor:"pointer"
            }}
            src={Img1}
          />{" "}
          <Typography fontWeight="bold" variant="subtitle2">Grains</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor:"pointer"
          }}
        >
          {" "}
          <img
            style={{
              maxWidth: "70%",
              aspectRatio: "1 / 1",
              width: "150px",
              borderRadius: "50%",
              cursor:"pointer"
            }}
            src={Img2}
          />{" "}
          <Typography fontWeight="bold" variant="subtitle2">Pulses</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor:"pointer"
          }}
        >
          {" "}
          <img
            style={{
              maxWidth: "70%",
              aspectRatio: "1 / 1",
              width: "150px",
              borderRadius: "50%",
              cursor:"pointer"
            }}
            src={Img3}
          />{" "}
          <Typography fontWeight="bold" variant="subtitle2">Spices</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor:"pointer"
          }}
        >
          {" "}
          <img
            style={{
              maxWidth: "70%",
              aspectRatio: "1 / 1",
              width: "150px",
              borderRadius: "50%",
              cursor:"pointer"
            }}
            src={Img4}
          />{" "}
          <Typography fontWeight="bold" variant="subtitle2">Seeds</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor:"pointer"
          }}
        >
          {" "}
          <img
            style={{
              maxWidth: "70%",
              aspectRatio: "1 / 1",
              width: "150px",
              borderRadius: "50%",
              cursor:"pointer"
            }}
            src={Img5}
          />{" "}
          <Typography fontWeight="bold" variant="subtitle2">Salts</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor:"pointer"
          }}
        >
          {" "}
          <img
            style={{
              maxWidth: "70%",
              aspectRatio: "1 / 1",
              width: "150px",
              borderRadius: "50%",
              cursor:"pointer"
            }}
            src={Img6}
          />{" "}
          <Typography fontWeight="bold" variant="subtitle2">Flour</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor:"pointer"
          }}
        >
          {" "}
          <img
            style={{
              maxWidth: "70%",
              aspectRatio: "1 / 1",
              width: "150px",
              borderRadius: "50%",
              cursor:"pointer"
            }}
            src={Img7}
          />{" "}
          <Typography fontWeight="bold" variant="subtitle2">Herbs</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor:"pointer"
          }}
        >
          {" "}
          <img
            style={{
              maxWidth: "70%",
              aspectRatio: "1 / 1",
              width: "150px",
              borderRadius: "50%",
              cursor:"pointer"
            }}
            src={Img8}
          />{" "}
          <Typography fontWeight="bold" variant="subtitle2">Pickel</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Categories;
