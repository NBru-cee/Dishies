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
                              onSelect={() => setSelectedCategory("Bread")}
                              value="bread"
                         >
                              Bread
                         </option>
                         <option
                              onSelect={() => setSelectedCategory("Burger")}
                              value="burger"
                         >
                              Burger
                         </option>
                         <option
                              onSelect={() => setSelectedCategory("Bruchette")}
                              value="bruchette"
                         >
                              Bruchette
                         </option>
                         <option
                              onSelect={() => setSelectedCategory("Cake")}
                              value="cake"
                         >
                              Cake
                         </option>
                         <option
                              onSelect={() => setSelectedCategory("Chicken")}
                              value="chicken"
                         >
                              Chicken
                         </option>
                         <option
                              onSelect={() => setSelectedCategory("Dish")}
                              value="dish"
                         >
                              Dish
                         </option>
                         <option
                              onSelect={() => setSelectedCategory("Fries")}
                              value="fries"
                         >
                              Fries
                         </option>
                         <option
                              onSelect={() => setSelectedCategory("Pizza")}
                              value="pizza"
                         >
                              Pizza
                         </option>
                         <option
                              onSelect={() => setSelectedCategory("Softs")}
                              value="softs"
                         >
                              Softs
                         </option>
                         <option
                              onSelect={() => setSelectedCategory("Tacos")}
                              value="tacos"
                         >
                              Tacos
                         </option>
                         <option
                              onSelect={() => setSelectedCategory("Wine")}
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
