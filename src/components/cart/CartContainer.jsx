import React from "react";
import { IconButton, Typography, Stack, Box } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import { useSelector, useDispatch } from "react-redux";
import {
      selectedProducts,
      cartTotalAmount,
      cartActions,
} from "../../app/slices/cartSlice";

const CartContainer = ({cartOpen, }) => {
      const totalAmount = useSelector(cartTotalAmount);
      const cartProducts = useSelector(selectedProducts);
      const dispatch = useDispatch();

      return (
            <Stack>
                  <Box>
                        <Box
                              sx={{
                                    position: "static",
                                    top: 0,
                                    left: 0,
                                    padding: "0.5rem",
                              }}
                        >
                              <IconButton
                                    sx={{
                                          background: "maroon",
                                          color: "whitesmoke",
                                          transition: "0.4s",
                                          "&:hover": {
                                                background: "red",
                                          },
                                    }}
                              >
                                    <Close />
                              </IconButton>
                        </Box>
                        <Box
                              sx={{
                                    position: "sticky",
                                    bottom: 0,
                                    left: 0,
                                    padding: "0.5rem",
                              }}
                        >
                              <Stack
                                    direction="row"
                                    spacing={2}
                                    justifyContent="space-around"
                              >
                                    <Typography variant="body1">
                                          Total: $ <span>{totalAmount}</span>
                                    </Typography>
                                    <Link to="/checkout">Checkout</Link>
                              </Stack>
                        </Box>
                  </Box>
            </Stack>
      );
};

export default CartContainer;
