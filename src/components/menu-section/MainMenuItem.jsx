import React, { useEffect } from "react";
import { Stack, Box, Typography, IconButton, Tooltip } from "@mui/material";
import "../../styles/menu.css";
import { Padding, ShoppingCart } from "@mui/icons-material";
import CountUp from "react-countup";

const MainMenuItem = ({ product, prevImage, setPrevImage, addProduct }) => {
      return (
            <section>
                  <Stack
                        direction={{
                              xs: "column",
                              sm: "row",
                              md: "row",
                        }}
                        display="flex"
                        flexDirection={{
                              xs: "column",
                              sm: "row",
                              md: "row",
                        }}
                        mb={2}
                  >
                        <Box
                              sx={{
                                    flexBasis: "20%",
                                    display: "flex",
                                    flexDirection: {
                                          xs: "row",
                                          sm: "column",
                                    },
                                    alignItems: "center",
                                    gap: "0.5rem",
                              }}
                        >
                              <Box
                                    onClick={() =>
                                          setPrevImage(product.image01)
                                    }
                                    className="preview"
                              >
                                    <img
                                          src={product.image01}
                                          alt={product.title}
                                          className="prev__image"
                                    />
                              </Box>
                              <Box
                                    onClick={() =>
                                          setPrevImage(product.image02)
                                    }
                                    className="preview"
                              >
                                    <img
                                          src={product.image02}
                                          alt={product.title}
                                          className="prev__image"
                                    />
                              </Box>
                              <Box
                                    onClick={() =>
                                          setPrevImage(product.image03)
                                    }
                                    className="preview"
                              >
                                    <img
                                          src={product.image03}
                                          alt={product.title}
                                          className="prev__image"
                                    />
                              </Box>
                              <Box
                                    onClick={() =>
                                          setPrevImage(product.image04)
                                    }
                                    className="preview"
                              >
                                    <img
                                          src={product.image04}
                                          alt={product.title}
                                          className="prev__image"
                                    />
                              </Box>
                        </Box>
                        <Box sx={{ flexBasis: "30%" }}>
                              <Box className="main__image">
                                    <img src={prevImage} alt="preview image" />
                              </Box>
                        </Box>
                        <Box sx={{ flexBasis: "40%" }}>
                              <Stack direction="column" spacing={2}>
                                    <Typography variant="h6" color="#050530">
                                          {product.title}
                                    </Typography>
                                    <Typography variant="h5">
                                          Price:
                                          <span style={{ color: "#a61010" }}>
                                                $ {product.price}
                                          </span>
                                    </Typography>
                                    <Typography variant="h6">
                                          Category -
                                          <span style={{ color: "#a61010" }}>
                                                {product.category}
                                          </span>
                                    </Typography>
                                    <Stack direction="column" spacing={2}>
                                          <Typography
                                                variant="body1"
                                                color="#050530"
                                          >
                                                <CountUp
                                                      start={0}
                                                      duration={3}
                                                      end={product.delivers}
                                                      suffix="K"
                                                      style={{
                                                            background:
                                                                  "#880707",
                                                            color: "whitesmoke",
                                                            padding: "0.3rem 0.5rem",
                                                            borderRadius:
                                                                  "0.5rem",
                                                      }}
                                                />
                                                <span> Delivers</span>
                                          </Typography>
                                          <Typography
                                                variant="body1"
                                                color="#050530"
                                          >
                                                <CountUp
                                                      start={0}
                                                      duration={3}
                                                      end={product.purchases}
                                                      suffix="M"
                                                      style={{
                                                            background:
                                                                  "#880707",
                                                            color: "whitesmoke",
                                                            padding: "0.3rem 0.5rem",
                                                            borderRadius:
                                                                  "0.5rem",
                                                      }}
                                                />
                                                <span> Purchases</span>
                                          </Typography>
                                    </Stack>
                                    <Tooltip
                                          title="Add To Cart"
                                          arrow
                                          enterDelay={500}
                                          leaveDelay={200}
                                          placement="bottom"
                                    >
                                          <IconButton
                                                onClick={addProduct}
                                                sx={{
                                                      background: "maroon",
                                                      color: "whitesmoke",
                                                      transition: "0.4s",
                                                      borderRadius: "0.5rem",

                                                      "&:hover": {
                                                            background: "red",
                                                      },
                                                }}
                                          >
                                                <ShoppingCart
                                                      sx={{ fontSize: "2rem" }}
                                                />
                                          </IconButton>
                                    </Tooltip>
                              </Stack>
                        </Box>
                  </Stack>
                  <Box>
                        <Typography
                              variant="h4"
                              color="maroon"
                              textAlign="center"
                        >
                              About {product.title}
                        </Typography>
                        <Typography
                              variant="body1"
                              color="#050530"
                              textAlign="center"
                        >
                              {product.desc}
                        </Typography>
                  </Box>
            </section>
      );
};

export default MainMenuItem;
