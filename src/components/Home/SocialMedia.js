import React from "react";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import { Icon, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
const SocialMedia = () => {
  return (
    <>
      <Box sx={{
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px"
      }}>
        <Typography variant="h4" sx={{}}>
          Follow Us For Early Updates
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 20px",
          }}
        >
          <IconButton>
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <EmailIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default SocialMedia;
