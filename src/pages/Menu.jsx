import React, { useState, useEffect } from "react";
import Wrapper from "../wrapper/Wrapper";
import { products } from "../assets/data/products";
import { Box, TextField } from "@mui/material";
import MenuHero from "../components/menu-section/MenuHero";
import AllFoods from "../components/menu-section/AllFoods";

const Menu = () => {
     const [searchTerm, setSearchTerm] = useState("");
     const [pageNumber, setPageNumber] = useState(0);

     const searchedProduct = products.filter((item) => {
          if (searchTerm === "") {
               return item;
          }

          if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
               return item;
          }
     });

     const productsPerPage = 12;
     const visitedPage = pageNumber * productsPerPage;
     const displayedPage = searchedProduct.slice(
          visitedPage,
          visitedPage + productsPerPage
     );

     const pageCount = Math.ceil(searchedProduct.length / productsPerPage);
     const setPage = ({ selected }) => {
          setPageNumber(selected);
     };

     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);

     return (
          <Wrapper title="Menu">
               <main>
                    <MenuHero />
                    <section>
                         <Box
                              sx={{
                                   display: "flex",
                                   alignItems: "center",
                                   justifyContent: "center",
                              }}
                         >
                              <TextField
                                   label="I'm looking for"
                                   value={searchTerm}
                                   onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                   }
                                   color="error"
                                   sx={{
                                        minWidth: "20rem",
                                   }}
                              />
                         </Box>
                    </section>
                    <AllFoods
                         searchedProduct={searchedProduct}
                         pageCount={pageCount}
                         setPage={setPage}
                         displayedPage={displayedPage}
                    />
               </main>
          </Wrapper>
     );
};

export default Menu;
