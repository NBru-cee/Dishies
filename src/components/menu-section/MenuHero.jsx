import React from "react";
import { Card, CardMedia, Box } from "@mui/material";
import { products } from "../../assets/data/products";
import Slider from "react-slick";

const MenuHero = () => {
      const settings = {
            fade: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false,
            arrows: false,
      };

      return (
            <section>
                  <Slider {...settings}>
                        {products.map((product) => (
                              <Card key={product.id}>
                                    <Box
                                          sx={{
                                                width: "100%",
                                                minHeight: "70vh",
                                                padding: "0 4rem",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                          }}
                                    >
                                          <img
                                                src={product.image01}
                                                alt={product.title}
                                                style={{
                                                      width: "100%",
                                                      height: "50vh",
                                                      objectFit: "contain",
                                                }}
                                          />
                                    </Box>
                              </Card>
                        ))}
                  </Slider>
            </section>
      );
};

export default MenuHero;
