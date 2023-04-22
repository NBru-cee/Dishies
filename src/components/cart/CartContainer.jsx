import React from "react";
import { IconButton, Typography, Stack, Box } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import { useSelector } from "react-redux";
import {
     allSelectedProducts,
     cartTotalAmount,
} from "../../app/slices/cartSlice";

const CartContainer = ({ setCartOpen }) => {
     const totalAmount = useSelector(cartTotalAmount);
     const allProducts = useSelector(allSelectedProducts);

     return (
          <Stack>
               <Box
                    sx={{
                         postition: "relative",
                         height: "100%",
                         width: "18rem",
                    }}
               >
                    <Box
                         sx={{
                              position: "static",
                              top: 0,
                              padding: "0.5rem",
                              zIndex: 10,
                              boxShadow: "5px 0 5px black",
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
                              onClick={() => setCartOpen(false)}
                         >
                              <Close />
                         </IconButton>
                    </Box>
                    <Box
                         sx={{
                              height: "80vh",
                              padding: "1rem",
                              overflowY: "scroll !important",
                         }}
                    >
                         {allProducts.length === 0 ? (
                              <Typography
                                   variant="body1"
                                   color="#18181c"
                                   fontWeight="600"
                              >
                                   Your cart is empty!
                              </Typography>
                         ) : (
                              allProducts.map((product) => (
                                   <CartProduct
                                        key={product.id}
                                        product={product}
                                   />
                              ))
                         )}
                    </Box>
                    <Box
                         sx={{
                              bgcolor: "maroon",
                              position: "absolute",
                              bottom: 0,
                              right: 0,
                              width: "100%",
                              padding: "0.5rem",
                         }}
                    >
                         <Stack
                              direction="row"
                              spacing={2}
                              justifyContent="space-around"
                              alignItems="center"
                              zIndex={10}
                         >
                              <Typography variant="body1" color="whitesmoke">
                                   Total: $<span>{totalAmount}</span>
                              </Typography>
                              <Link
                                   to="/checkout"
                                   style={{
                                        background: "whitesmoke",
                                        fontWeight: "bold",
                                        borderRadius: "0.4rem",
                                        padding: "0.5rem 1rem",
                                        textAlign: "center",
                                   }}
                              >
                                   Checkout
                              </Link>
                         </Stack>
                    </Box>
               </Box>
          </Stack>
     );
};

export default CartContainer;
