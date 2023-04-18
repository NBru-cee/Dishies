import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { products } from "../../assets/data/products";
import "../../styles/menu.css";

const SortWidget = ({ allProducts, setAllProducts }) => {
      const [selectedCategory, setSelectedCategory] = useState("All");

      useEffect(() => {
            if (selectedCategory === "All") {
                  setAllProducts(allProducts);
            }

            if (selectedCategory === "Bread") {
                  const filteredProducts = products.filter(
                        (product) => product.category === "Bread"
                  );
                  setAllProducts(filteredProducts);
            }

            if (selectedCategory === "Burger") {
                  const filteredProducts = products.filter(
                        (product) => product.category === "Burger"
                  );
                  setAllProducts(filteredProducts);
            }

            if (selectedCategory === "Bruchette") {
                  const filteredProducts = products.filter(
                        (product) => product.category === "Bruchette"
                  );
                  setAllProducts(filteredProducts);
            }

            if (selectedCategory === "Cake") {
                  const filteredProducts = products.filter(
                        (product) => product.category === "Cake"
                  );
                  setAllProducts(filteredProducts);
            }

            if (selectedCategory === "Chicken") {
                  const filteredProducts = products.filter(
                        (product) => product.category === "Chicken"
                  );
                  setAllProducts(filteredProducts);
            }

            if (selectedCategory === "Dish") {
                  const filteredProducts = products.filter(
                        (product) => product.category === "Dish"
                  );
                  setAllProducts(filteredProducts);
            }

            if (selectedCategory === "Fries") {
                  const filteredProducts = products.filter(
                        (product) => product.category === "Fries"
                  );
                  setAllProducts(filteredProducts);
            }

            if (selectedCategory === "Pizza") {
                  const filteredProducts = products.filter(
                        (product) => product.category === "Pizza"
                  );
                  setAllProducts(filteredProducts);
            }

            if (selectedCategory === "Softs") {
                  const filteredProducts = products.filter(
                        (product) => product.category === "Softs"
                  );
                  setAllProducts(filteredProducts);
            }

            if (selectedCategory === "Tacos") {
                  const filteredProducts = products.filter(
                        (product) => product.category === "Tacos"
                  );
                  setAllProducts(filteredProducts);
            }

            if (selectedCategory === "Wine") {
                  const filteredProducts = products.filter(
                        (product) => product.category === "Wine"
                  );
                  setAllProducts(filteredProducts);
            }
      }, [selectedCategory]);

      return (
            <Box>
                  <select name="order" id="order" className="widget__sort">
                        <option>Sort by</option>
                        <optgroup label="Category">
                              <option
                                    onClick={() => setSelectedCategory("Bread")}
                                    value="bread"
                              >
                                    Bread
                              </option>
                              <option
                                    onClick={() =>
                                          setSelectedCategory("Burger")
                                    }
                                    value="burger"
                              >
                                    Burger
                              </option>
                              <option
                                    onClick={() =>
                                          setSelectedCategory("Bruchette")
                                    }
                                    value="bruchette"
                              >
                                    Bruchette
                              </option>
                              <option
                                    onClick={() => setSelectedCategory("Cake")}
                                    value="cake"
                              >
                                    Cake
                              </option>
                              <option
                                    onClick={() =>
                                          setSelectedCategory("Chicken")
                                    }
                                    value="chicken"
                              >
                                    Chicken
                              </option>
                              <option
                                    onClick={() => setSelectedCategory("Dish")}
                                    value="dish"
                              >
                                    Dish
                              </option>
                              <option
                                    onClick={() => setSelectedCategory("Fries")}
                                    value="fries"
                              >
                                    Fries
                              </option>
                              <option
                                    onClick={() => setSelectedCategory("Pizza")}
                                    value="pizza"
                              >
                                    Pizza
                              </option>
                              <option
                                    onClick={() => setSelectedCategory("Softs")}
                                    value="softs"
                              >
                                    Softs
                              </option>
                              <option
                                    onClick={() => setSelectedCategory("Tacos")}
                                    value="tacos"
                              >
                                    Tacos
                              </option>
                              <option
                                    onClick={() => setSelectedCategory("Wine")}
                                    value="wine"
                              >
                                    Wine
                              </option>
                        </optgroup>
                        <optgroup label="Price">
                              <option value="low">Low Price</option>
                              <option value="high">High Price</option>
                        </optgroup>
                  </select>
            </Box>
      );
};

export default SortWidget;
