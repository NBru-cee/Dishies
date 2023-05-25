import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
      Typography,
      Paper,
      IconButton,
      Tooltip,
      Rating,
      Stack,
      Box,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import "../../styles/home.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../app/slices/cartSlice";

const ProductCard = ({ item }) => {
      const { image01, price, title, id, category } = item;
      const dispatch = useDispatch();
      const [ratingValue, setRatingValue] = useState(null);
      const handleRating = (newValue) => {
            setRatingValue(newValue);
            localStorage.setItem("rating", JSON.stringify(ratingValue));
      };
      const addProduct = () => {
            dispatch(
                  cartActions.addProduct({
                        id,
                        price,
                        title,
                        image01,
                  })
            );
      };
      return (
            <Paper
                  elevation={4}
                  sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.4rem",
                        justifyContent: "space-between",
                        height: "17.5rem",
                        width: "13rem",
                  }}
                  className="single__product"
            >
                  <Box>
                        <Box
                              height="10rem"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              overflow="hidden"
                              sx={
                                    category === "Wine"
                                          ? {
                                                  padding: "2rem",
                                                  transition: "0.4s",
                                                  "&:hover": {
                                                        transform:
                                                              "scale(1.15)",
                                                  },
                                            }
                                          : {
                                                  transition: "0.4s",
                                                  "&:hover": {
                                                        transform:
                                                              "scale(1.15)",
                                                  },
                                            }
                              }
                        >
                              <Link to={`/foods/${id}`}>
                                    <img
                                          src={image01}
                                          alt="product image"
                                          style={{
                                                overflow: "hidden",
                                                padding: "2rem",
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                borderRadius: "5px 5px 0 0",
                                          }}
                                    />
                              </Link>
                        </Box>
                        <Box
                              sx={{
                                    padding: "1rem",
                                    height: "7.5rem",
                              }}
                        >
                              <Rating
                                    value={ratingValue}
                                    onChange={handleRating}
                                    precision={0.5}
                                    size="small"
                              />
                              <Link to={`/foods/${id}`}>
                                    <Typography variant="body1">
                                          {title}
                                    </Typography>
                              </Link>
                              <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                              >
                                    <Typography variant="h6" gap={1}>
                                          Price: $
                                          <span style={{ color: "maroon" }}>
                                                {price}
                                          </span>
                                    </Typography>
                                    <Tooltip
                                          title="Add To Cart"
                                          placement="top"
                                          arrow
                                          enterDelay={500}
                                          leaveDelay={200}
                                    >
                                          <IconButton
                                                onClick={addProduct}
                                                sx={{
                                                      background: "maroon",
                                                      color: "whitesmoke",
                                                      transition: "4.s ease-in",
                                                      "&:hover": {
                                                            background: "red",
                                                      },
                                                }}
                                          >
                                                <ShoppingCart />
                                          </IconButton>
                                    </Tooltip>
                              </Stack>
                        </Box>
                  </Box>
            </Paper>
      );
};

export default ProductCard;
