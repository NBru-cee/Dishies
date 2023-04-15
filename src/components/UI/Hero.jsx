import React from "react";
import { sliderData } from "../../assets/data/slider";
import Slider from "react-slick";
import { Box, Typography, Stack, Button, Paper } from "@mui/material";
import sliderImg from "../../assets/imgs/slider-imgs/slider01.png";
import { ChevronRight } from "@mui/icons-material";

const Hero = () => {
      const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
      };
      return (
            <section>
                  <Paper elevation={0} sx={{ p: 2 }}>
                        <Slider {...settings}>
                              {sliderData.map((item) => (
                                    <Stack
                                          key={item.id}
                                          direction={{
                                                xs: "column",
                                                sm: "column",
                                                md: "row",
                                          }}
                                          spacing={2}
                                          alignItems="center"
                                    >
                                          <Box flexBasis="50%">
                                                <Typography
                                                      variant="h5"
                                                      color="#c91212"
                                                      mb={2}
                                                      whiteSpace="nowrap"
                                                      fontSize="clamp(2rem, 20px, 2.5rem)"
                                                >
                                                      {item.title}
                                                </Typography>
                                                <Typography
                                                      variant="body1"
                                                      color="#1c264c"
                                                      mb={2}
                                                      fontSize="clamp(1rem, 16px, 1.5rem)"
                                                >
                                                      {item.desc}
                                                </Typography>
                                                <Stack
                                                      direction="row"
                                                      spacing={4}
                                                >
                                                      <Button
                                                            variant="contained"
                                                            color="error"
                                                      >
                                                            Order
                                                      </Button>
                                                      <Button
                                                            variant="outlined"
                                                            color="error"
                                                            endIcon={
                                                                  <ChevronRight />
                                                            }
                                                      >
                                                            See All
                                                      </Button>
                                                </Stack>
                                          </Box>
                                          <Box flexBasis="50%">
                                                <img
                                                      src={item.image}
                                                      alt="hero image"
                                                      style={{ width: "100%" }}
                                                />
                                          </Box>
                                    </Stack>
                              ))}
                        </Slider>
                  </Paper>
            </section>
      );
};

export default Hero;
