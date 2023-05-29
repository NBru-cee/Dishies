import React from "react";
import { sliderData } from "../../assets/data/slider";
import Slider from "react-slick";
import { Box, Typography, Stack, Button, Paper } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import "../../styles/home.css";
import { Link } from "react-router-dom";

const Hero = () => {
      const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
      };

      return (
            <section style={{ padding: "2rem" }}>
                  <Slider {...settings}>
                        {sliderData.map((item) => (
                              <Paper
                                    elevation={4}
                                    key={item.id}
                                    sx={{
                                          display: "flex !important",
                                          flexDirection: {
                                                xs: "column",
                                                sm: "column",
                                                md: "row",
                                          },
                                          alignItems: "center",
                                          gap: "2rem",
                                          justifyContent: "center",
                                          padding: "1rem 2rem",
                                    }}
                              >
                                    <Box flexBasis="50%">
                                          <Typography
                                                variant="h6"
                                                color="#c91212"
                                                mb={2}
                                          >
                                                {item.title}
                                          </Typography>
                                          <Typography
                                                variant="subtitle2"
                                                color="#14141a"
                                                mb={2}
                                          >
                                                {item.desc}
                                          </Typography>
                                          <Stack
                                                direction="row"
                                                spacing={4}
                                                mt={2}
                                          >
                                                <Link to="/checkout">
                                                      <Button
                                                            variant="contained"
                                                            color="error"
                                                      >
                                                            Order
                                                      </Button>
                                                </Link>
                                                <Link to="/foods">
                                                      <Button
                                                            variant="outlined"
                                                            color="error"
                                                            endIcon={
                                                                  <ChevronRight />
                                                            }
                                                      >
                                                            See All
                                                      </Button>
                                                </Link>
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
