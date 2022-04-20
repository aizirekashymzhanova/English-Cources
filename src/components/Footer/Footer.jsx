import React from "react";

import "./Footer.scss";
import { Container, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

const Footer = () => {
  return (
    <div className="footer">
      <Container align="center">
        <div className="contacts">
          <div className="contact-item">
            <IconButton>
              <LocationOnIcon />
            </IconButton>
            <p>
              ENGLISH ZONE : <br /> Bishkek , Kyrgyzstan
            </p>
          </div>
          <div className="contact-item">
            <IconButton>
              <EmailIcon />
            </IconButton>
            <p>
              Send your email at : <br /> english_zone@gmail.com
            </p>
          </div>
          <div className="contact-item">
            <IconButton>
              <AccessTimeFilledIcon />
            </IconButton>
            <p>
              Working hours: <br /> 10:00 - 22:00
            </p>
          </div>
        </div>
        <Box className="footer-inside" align="center">
          <IconButton color="inherit">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit">
            <PinterestIcon />
          </IconButton>
          <IconButton color="inherit">
            <TwitterIcon />
          </IconButton>
        </Box>
        <Typography>©2022 AA. All Rights Reserved.</Typography>
      </Container>
    </div>
  );
};

export default Footer;
