import React, { useState, useEffect } from "react";
import ProductCard from "../components/UI/ProductCard";
import Wrapper from "../wrapper/Wrapper";
import { Box, TextField, Select, Stack, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import ReactPaginate from "react-paginate";
import { products } from "../assets/data/products";

const Menu = () => {
      const [searchTerm, setSearchTerm] = useState("");
      const [pageNumber, setPageNumber] = useState(0);
      const searchedProduct = products.filter();
      return <div>Menu</div>;
};

export default Menu;
