import React from "react";
import Wrapper from "../wrapper/Wrapper";
import MenuTitle from "../components/menu-section/MenuTitle";
import CartTable from "../components/cart/CartTable";
import { useSelector } from "react-redux";
import { allSelectedProducts } from "../app/slices/cartSlice";
import {
      Table,
      TableBody,
      TableCell,
      TableHead,
      TableRow,
      Paper,
      TableContainer,
      Typography,
      Button,
      Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/menu.css";

const Cart = () => {
      const cartProducts = useSelector(allSelectedProducts);
      return (
            <Wrapper title="Cart">
                  <MenuTitle title="Your Cart" />
                  <main>
                        {cartProducts.length === 0 ? (
                              <section>
                                    <Typography variant="h5" textAlign="center">
                                          Your Cart is Empty!
                                    </Typography>
                              </section>
                        ) : (
                              <section>
                                    <TableContainer
                                          component={Paper}
                                          sx={{ maxHeight: "300px" }}
                                          className="cart__table"
                                    >
                                          <Table stickyHeader>
                                                <TableHead>
                                                      <TableRow>
                                                            <TableCell>
                                                                  Product Image
                                                            </TableCell>
                                                            <TableCell>
                                                                  Product Name
                                                            </TableCell>
                                                            <TableCell>
                                                                  Product
                                                                  Quantity
                                                            </TableCell>
                                                            <TableCell>
                                                                  Product Price
                                                            </TableCell>
                                                            <TableCell>
                                                                  Total Price
                                                            </TableCell>
                                                            <TableCell>
                                                                  Remove Product
                                                            </TableCell>
                                                      </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                      {cartProducts.map(
                                                            (product) => (
                                                                  <CartTable
                                                                        key={
                                                                              product.id
                                                                        }
                                                                        product={
                                                                              product
                                                                        }
                                                                  />
                                                            )
                                                      )}
                                                </TableBody>
                                          </Table>
                                    </TableContainer>
                              </section>
                        )}
                        <section
                              style={{
                                    alignItems: "center",
                                    display: "flex",
                                    justifyContent: "center",
                              }}
                        >
                              <Stack
                                    direction={{
                                          xs: "column",
                                          sm: "row",
                                    }}
                                    spacing={4}
                              >
                                    <Button
                                          variant="contained"
                                          color="error"
                                          sx={{
                                                textTransform: "capitalize",
                                                fontSize: "1rem",
                                          }}
                                    >
                                          <Link to="/foods">
                                                Continue Shopping
                                          </Link>
                                    </Button>
                                    <Button
                                          variant="contained"
                                          color="error"
                                          sx={{
                                                textTransform: "capitalize",
                                                fontSize: "1rem",
                                          }}
                                    >
                                          <Link to="/checkout">
                                                Proceed to Checkout
                                          </Link>
                                    </Button>
                              </Stack>
                        </section>
                  </main>
            </Wrapper>
      );
};

export default Cart;
