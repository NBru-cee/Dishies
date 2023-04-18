import React from "react";
import SearchWidget from "./SearchWidget";
import SortWidget from "./SortWidget";
import { Stack, Box } from "@mui/material";

const Widgets = ({
      searchTerm,
      setSearchTerm,
      displayedPage,
      allProducts,
      setAllProducts,
}) => {
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
                                    displayedPage={displayedPage}
                                    allProducts={allProducts}
                                    setAllProducts={setAllProducts}
                              />
                        </Box>
                  </Stack>
            </section>
      );
};

export default Widgets;
