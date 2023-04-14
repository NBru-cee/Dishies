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

const ProductCard = ({ item }) => {
      const { image01, price, title, id } = item;
      const [ratingValue, setRatingValue] = useState(null);
      const handleRating = (newValue) => {
            setRatingValue(newValue);
            localStorage.setItem("rating", JSON.stringify(ratingValue));
      };
      return (
            <Paper
                  elevation={4}
                  sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.4rem",
                        justifyContent: "space-between",
                        height: "20rem",
                        width: "18rem",
                  }}
                  className="single__product"
            >
                  <Box>
                        <Box sx={{ height: "10rem" }}>
                              <Link to={`/foods/${id}`}>
                                    <img
                                          src={image01}
                                          alt="product image"
                                          style={{
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
                                    height: "10rem",
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
