import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import { popularMenu } from "../../assets/data/data";
import ProductCard from "./ProductCard";
import "../../styles/menu.css";

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
                                    display: "grid",
                                    gridTemplateColumns: {
                                          xs: "repeat(2, minmax(0, 1fr))",
                                          sm: "repeat(3, minmax(0, 1fr))",
                                    },
                              }}
                              className="popular__menu"
                        >
                              {popularMenu.map((item) => (
                                    <Stack
                                          key={item.id}
                                          direction="row"
                                          spacing={2}
                                          m={2}
                                    >
                                          <ProductCard item={item} />
                                    </Stack>
                              ))}
                        </Box>
                  </Box>
            </section>
      );
};

export default PopularMenu;