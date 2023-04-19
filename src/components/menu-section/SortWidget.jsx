import React from "react";
import { Box } from "@mui/material";
import "../../styles/menu.css";

const SortWidget = ({ setSelectedCategory }) => {
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
