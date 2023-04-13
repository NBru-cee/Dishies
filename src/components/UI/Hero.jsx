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
            arrows: true,
            dots: true,
      };
      return (
            <section>
                  <Paper elevation={0} sx={{ p: 2 }}>
                        <Stack
                              direction={{ xs: "column", sm: "row" }}
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
                                          We have amazing food for you
                                    </Typography>
                                    <Typography
                                          variant="body1"
                                          mb={2}
                                          fontSize="clamp(1rem, 16px, 1.5rem)"
                                    >
                                          Almost all kinds of foods you can
                                          dream of are here with us on an
                                          exclusive price that anyone can
                                          afford. The best quality of food you
                                          can have is what we give you so we are
                                          here to answer your problems with
                                          hunger.
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
                                          src={sliderImg}
                                          alt="hero image"
                                          style={{ width: "100%" }}
                                    />
                              </Box>
                        </Stack>
                  </Paper>
            </section>
      );
};

export default Hero;
