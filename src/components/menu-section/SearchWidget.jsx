import React from "react";
import { Box, Stack } from "@mui/material";
import "../../styles/menu.css";

const SearchWidget = ({ searchTerm, setSearchTerm }) => {
      return (
            <Box>
                  <input
                        placeholder="I want...."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="widget__search"
                  />
            </Box>
      );
};

export default SearchWidget;
