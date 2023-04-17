import React from "react";
import "../styles/about.css";
import aboutImg from "../assets/imgs/common-imgs/about-img.webp";
import { clientData } from "../assets/data/testimonials";
import Wrapper from "../wrapper/Wrapper";
import {
      Box,
      Stack,
      Typography,
      ImageList,
      ImageListItem,
} from "@mui/material";

const About = () => {
      return (
            <Wrapper title="About">
                  <Box>
                        <Typography
                              variant="h4"
                              color="maroon"
                              textAlign="center"
                        >
                              About us
                        </Typography>
                        <Stack direction="row" spacing={2} alignItems="center">
                              <Box>
                                    <Typography variant="h5">
                                          Our Chefs
                                    </Typography>
                              </Box>
                        </Stack>
                  </Box>
            </Wrapper>
      );
};

export default About;
