import React from "react";
import ProductCard from "../UI/ProductCard";
import { Stack, Box, Typography } from "@mui/material";

const RelatedProducts = ({ relatedProducts }) => {
      return (
            <section>
                  <Box>
                        <Typography
                              variant="h4"
                              textAlign="center"
                              color="maroon"
                        >
                              Related Products
                        </Typography>
                  </Box>
                  <Box
                        sx={{
                              display: "flex",
                              flexWrap: "wrap",
                              alignItems: "center",
                              justifyContent: "center",
                        }}
                        className="menu__stack"
                  >
                        {relatedProducts.map((item) => (
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
            </section>
      );
};

export default RelatedProducts;
