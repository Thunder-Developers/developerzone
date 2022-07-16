import React from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Img from "../Assest/oil-img.jpg";
import Container from "@mui/material/Container";



const Categories = () => {
  return (
    <>
      <Container maxWidth={false} sx={{mt:"20px"}}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "140px",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              width: "90px",
              height: "90px",
              textAlign: "center",
              border: "1px solid green",
              borderRadius: "50%",
            }}
          >
            <Typography sx={{mt:"90px"}}>Herbs</Typography>
          </Box>
          <Box
            sx={{
              width: "90px",
              height: "90px",
              textAlign: "center",
              border: "1px solid green",
              borderRadius: "50%",
            }}
          >
            2
          </Box>
          <Box
            sx={{
              width: "90px",
              height: "90px",
              textAlign: "center",
              border: "1px solid green",
              borderRadius: "50%",
            }}
          >
            3
          </Box>
          <Box
            sx={{
              width: "90px",
              height: "90px",
              textAlign: "center",
              border: "1px solid green",
              borderRadius: "50%",
            }}
          >
            4
          </Box>
          <Box
            sx={{
              width: "90px",
              height: "90px",
              textAlign: "center",
              border: "1px solid green",
              borderRadius: "50%",
            }}
          >
            5
          </Box>
          <Box
            sx={{
              width: "90px",
              height: "90px",
              textAlign: "center",
              border: "1px solid green",
              borderRadius: "50%",
            }}
          >
            6
          </Box>
          <Box
            sx={{
              width: "90px",
              height: "90px",
              textAlign: "center",
              border: "1px solid green",
              borderRadius: "50%",
            }}
          >
            7
          </Box>
          <Box
            sx={{
              width: "90px",
              height: "90px",
              textAlign: "center",
              border: "1px solid green",
              borderRadius: "50%",
            }}
          >
            8
          </Box>
          <Box
            sx={{
              width: "90px",
              height: "90px",
              textAlign: "center",
              border: "1px solid green",
              borderRadius: "50%",
            }}
          >
            9
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Categories;
