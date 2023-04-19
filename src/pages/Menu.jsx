import React, { useState, useEffect } from "react";
import Wrapper from "../wrapper/Wrapper";
import { products } from "../assets/data/products";
import Widgets from "../components/menu-section/Widgets";
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
      const [allProducts, setAllProducts] = useState(displayedPage);
      useEffect(() => {
            window.scrollTo(0, 0);
      }, []);

      return (
            <Wrapper title="Menu">
                  <main>
                        <MenuHero />
                        <Widgets
                              searchTerm={searchTerm}
                              setSearchTerm={setSearchTerm}
                              displayedPage={displayedPage}
                              allProducts={allProducts}
                              setAllProducts={setAllProducts}
                        />
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
