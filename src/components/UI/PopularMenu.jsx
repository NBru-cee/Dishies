import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import ProductCard from "./ProductCard";
import "../../styles/home.css";
import { popularMenu } from "../../assets/data/data";

const PopularMenu = () => {
      return (
            <section>
                  <Box>
                        <Box my={4}>
                              <Typography
                                    variant="h4"
                                    color="darkred"
                                    textAlign="center"
                              >
                                    Our Popular Products
                              </Typography>
                        </Box>
                        <Box
                              sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                    justifyContent: "center",
                              }}
                              className="popular__menu"
                        >
                              {popularMenu.map((product) => (
                                    <Stack
                                          key={product.id}
                                          direction="row"
                                          spacing={2}
                                          m={2}
                                    >
                                          <ProductCard product={product} />
                                    </Stack>
                              ))}
                        </Box>
                  </Box>
            </section>
      );
};

export default PopularMenu;
