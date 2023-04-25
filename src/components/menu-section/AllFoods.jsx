import React from "react";
import ProductCard from "../UI/ProductCard";
import ReactPaginate from "react-paginate";
import "../../styles/menu.css";
import { Box, Stack } from "@mui/material";

const AllFoods = ({ pageCount, setPage, displayedPage }) => {
     return (
          <section>
               <Box>
                    <Box
                         spacing={2}
                         sx={{
                              display: "flex",
                              flexWrap: "wrap",
                              alignItems: "center",
                              justifyContent: "center",
                         }}
                    >
                         {displayedPage.map((item) => (
                              <Stack
                                   key={item.id}
                                   direction="row"
                                   spacing={2}
                                   m={2}
                              >
                                   <ProductCard item={item} />
                              </Stack>
                         ))}
                    </Box>
               </Box>
               <Box>
                    <ReactPaginate
                         containerClassName="menu__pages"
                         pageCount={pageCount}
                         onPageChange={setPage}
                         previousLabel="<"
                         nextLabel=">"
                    />
               </Box>
          </section>
     );
};

export default AllFoods;
