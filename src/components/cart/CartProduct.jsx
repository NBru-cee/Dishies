import React from "react";
import { ListItem, Box, Stack, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { cartActions } from "../../app/slices/cartSlice";

const CartProduct = ({ product }) => {
      const dispatch = useDispatch();
      const { price, title, image01, id, totalPrice, quantity } = product;
      const increment = () => {
            dispatch(
                  cartActions.addProduct({
                        price,
                        title,
                        image01,
                        quantity,
                  })
            );
      };
      return (
            <ListItem>
                  <Box
                        sx={{
                              display: "flex",
                              gap: "0.5rem",
                              alignItems: "center",
                        }}
                  >
                        <Box>
                              <img src={image01} alt="image 01" />
                        </Box>
                        <Box>
                              <Typography variant="body2">{title}</Typography>
                        </Box>
                  </Box>
            </ListItem>
      );
};

export default CartProduct;
