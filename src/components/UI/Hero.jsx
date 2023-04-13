import React from "react";
import { sliderData } from "../../assets/data/slider";
import Slider from "react-slick";
import { Box, Typography, Stack, Button, Paper } from "@mui/material";

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
}
      return (
            <Paper>
                  <Slider>
                        {
                              sliderData.map((item) => (
                                    <section key={item.id}>
                                          <Stack>
                                                <Stack direction="row" spacing={2} alignItems="center">
                                                      <Typography variant="h5">{item.title}</Typography>
                                                </Stack>
</Stack>
                                    </section>
                              ))
                        }
              </Slider>
            </Paper>
      );
};

export default Hero;
