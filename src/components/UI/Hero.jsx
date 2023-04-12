import React from "react";
import { sliderData } from "../../assets/data/slider";
import Slider from "react-slick";
import { Box, Typography, Stack, Button } from "@mui/material";
const Hero = () => {
      const settings = {
            dots: true,
      };
      return (
            <section>
                  <Slider {...settings}>
                        {sliderData.map((slider) => (
                              <Stack key={slider.id}>
                                    <Typography variant="body2">
                                          {slider.title}
                                    </Typography>
                              </Stack>
                        ))}
                  </Slider>
            </section>
      );
};

export default Hero;
