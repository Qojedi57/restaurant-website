import React from "react";
import { IconButton } from '@mui/material';
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover":{
                color:"goldenrod",
                transform:"translate(5px)",
                transition:"all 400ms",
            }
          }}
        >
          {/* icons */}
          <div>
          <IconButton href="https://github.com/Qojedi57/restaurant-website">
            <GitHubIcon />
            </IconButton>
            <IconButton href="https://www.poachedkitchen.com/">
            <WebIcon/>
            </IconButton>
            </div>
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          Unofficial Restaurant Website 2023
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
