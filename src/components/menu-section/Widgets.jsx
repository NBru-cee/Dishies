import SearchWidget from "./SearchWidget";
import SortWidget from "./SortWidget";
import { Stack, Box } from "@mui/material";
import React, { useState, useEffect } from "react";

const Widgets = ({
      searchTerm,
      setSearchTerm,
      allProducts,
      setAllProducts,
}) => {
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
            <section>
                  <Stack
                        direction={{
                              xs: "column",
                              sm: "row",
                        }}
                        spacing={2}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-around"
                  >
                        <Box>
                              <SearchWidget
                                    searchTerm={searchTerm}
                                    setSearchTerm={setSearchTerm}
                              />
                        </Box>
                        <Box>
                              <SortWidget
                                    setSelectedCategory={setSelectedCategory}
                              />
                        </Box>
                  </Stack>
            </section>
      );
};

export default Widgets;
