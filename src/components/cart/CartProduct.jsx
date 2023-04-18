import React from "react";
import {
      ListItem,
      Box,
      Stack,
      Typography,
      Button,
      IconButton,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { cartActions } from "../../app/slices/cartSlice";
import { Close } from "@mui/icons-material";

const CartProduct = ({ product }) => {
      const dispatch = useDispatch();
      const { price, title, image01, id, totalPrice, quantity } = product;
      const increment = () => {
            dispatch(
                  cartActions.addProduct({
                        id,
                        price,
                        title,
                        image01,
                        quantity,
                  })
            );
      };

      return (
            <ListItem sx={{ padding: "0.5rem" }}>
                  <Box>
                        <Stack display="flex" direction="row">
                              <Box sx={{ width: "5rem" }}>
                                    <img
                                          src={image01}
                                          alt="image 01"
                                          style={{
                                                width: "3rem",
                                                objectFit: "cover",
                                          }}
                                    />
                              </Box>
                              <Box sx={{ width: "7rem" }}>
                                    <Typography variant="body2">
                                          {title}
                                    </Typography>
                              </Box>
                        </Stack>
                        <Stack direction="row" spacing={2} alignItems="center">
                              <Typography variant="body2" color="#18181c">
                                    {quantity} x
                              </Typography>
                              <Typography variant="body2" color="red">
                                    ${totalPrice}
                              </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                              <Button onClick={increment} color="error">
                                    +
                              </Button>
                              <Typography variant="body2">
                                    {quantity}
                              </Typography>
                              <Button
                                    color="error"
                                    onClick={() =>
                                          dispatch(
                                                cartActions.removeProduct(id)
                                          )
                                    }
                              >
                                    -
                              </Button>
                        </Stack>
                  </Box>
                  <IconButton
                        onClick={() => dispatch(cartActions.deleteProduct(id))}
                        sx={{
                              cursor: "pointer",
                              background: "#780f0f;",
                              color: "white",
                              padding: "0.2rem",
                              borderRadius: "50%",
                              "&:hover": {
                                    background: "red",
                              },
                        }}
                  >
                        <Close />
                  </IconButton>
            </ListItem>
      );
};

export default CartProduct;
