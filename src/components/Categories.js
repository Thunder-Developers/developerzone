import React from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Img from "../Assest/Herb.jpg";

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
            src={Img}
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
            src="https://via.placeholder.com/220/00ff00?text=2"
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
            src="https://via.placeholder.com/230/00ff00?text=3"
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
            src="https://via.placeholder.com/240/00ff00?text=4"
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
            src="https://via.placeholder.com/250/00ff00?text=5"
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
            src="https://via.placeholder.com/260/00ff00?text=6"
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
            src="https://via.placeholder.com/270/00ff00?text=7"
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
            src="https://via.placeholder.com/280/35BDD0?text=8"
          />{" "}
          <Typography fontWeight="bold" variant="subtitle2">Pickel</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Categories;
