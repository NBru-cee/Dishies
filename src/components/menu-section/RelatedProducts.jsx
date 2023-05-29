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
                        <Typography
                              variant="h5"
                              color="#050530"
                              textAlign="center"
                              my={2}
                        >
                              You may also like these products.
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
                        {relatedProducts.map((product) => (
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
            </section>
      );
};

export default RelatedProducts;
