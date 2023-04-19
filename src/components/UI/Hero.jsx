import React from "react";
import { sliderData } from "../../assets/data/slider";
import Slider from "react-slick";
import { Box, Typography, Stack, Button, Paper } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import "../../styles/home.css";

const Hero = () => {
     const settings = {
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
     };

     return (
          <section style={{ padding: "1rem" }}>
               <Slider {...settings}>
                    {sliderData.map((item) => (
                         <Paper
                              elevation={4}
                              key={item.id}
                              sx={{
                                   display: "flex !important",
                                   flexDirection: {
                                        sm: "column",
                                        md: "row",
                                   },
                                   alignItems: "center",
                                   height: {
                                        md: "90vh",
                                   },
                                   gap: "2rem",
                                   justifyContent: "center",
                                   padding: "1rem",
                                   borderRadius: 0,
                              }}
                         >
                              <Box flexBasis="50%">
                                   <Typography
                                        variant="h5"
                                        color="#c91212"
                                        mb={2}
                                        whiteSpace="nowrap"
                                        fontSize="clamp(2rem, 20px, 2.5rem)"
                                        className="hero__fonts"
                                   >
                                        {item.title}
                                   </Typography>
                                   <Typography
                                        variant="body1"
                                        color="#14141a"
                                        mb={2}
                                        fontSize="clamp(1rem, 16px, 1.5rem)"
                                        className="hero__fonts"
                                   >
                                        {item.desc}
                                   </Typography>
                                   <Stack direction="row" spacing={4}>
                                        <Button
                                             variant="contained"
                                             color="error"
                                        >
                                             Order
                                        </Button>
                                        <Button
                                             variant="outlined"
                                             color="error"
                                             endIcon={<ChevronRight />}
                                        >
                                             See All
                                        </Button>
                                   </Stack>
                              </Box>
                              <Box flexBasis="50%">
                                   <img
                                        src={item.image}
                                        alt="hero image"
                                        style={{
                                             width: "100%",
                                             padding: "1rem",
                                             boxSizing: "border-box",
                                        }}
                                   />
                              </Box>
                         </Paper>
                    ))}
               </Slider>
          </section>
     );
};

export default Hero;
