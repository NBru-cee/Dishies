import React from "react";
import { cartActions } from "../../app/slices/cartSlice";
import { IconButton, TableCell, TableRow } from "@mui/material";
import { useDispatch } from "react-redux";
import { Delete } from "@mui/icons-material";
import "../../styles/menu.css";

const CartTable = ({ product }) => {
      const dispatch = useDispatch();
      const { price, title, image01, quantity, id, totalPrice } = product;
      const deleteProduct = () => {
            dispatch(cartActions.deleteProduct(id));
      };
      return (
            <TableRow>
                  <TableCell
                        sx={{
                              width: "8rem",
                              height: "3rem",
                        }}
                  >
                        <img
                              src={image01}
                              alt="product image 01"
                              style={{
                                    width: "100%",
                                    objectFit: "contain",
                              }}
                        />
                  </TableCell>
                  <TableCell>{title}</TableCell>
                  <TableCell>{quantity} x</TableCell>
                  <TableCell>${price}</TableCell>
                  <TableCell>${totalPrice}</TableCell>
                  <TableCell>
                        <IconButton
                              onClick={deleteProduct}
                              sx={{
                                    background: "maroon",
                                    color: "whitesmoke",
                                    transition: "0.4s",
                                    "&:hover": {
                                          background: "red",
                                    },
                              }}
                        >
                              <Delete />
                        </IconButton>
                  </TableCell>
            </TableRow>
      );
};

export default CartTable;
