import React, { useState } from "react";
import {
      Typography,
      Box,
      Paper,
      IconButton,
      Stack,
      Tooltip,
      CircularProgress,
} from "@mui/material";
import { Phone, Email, Search, Close } from "@mui/icons-material";
import { products } from "../../assets/data/products";
import { Link } from "react-router-dom";
import "../../styles/header.css";

const SearchBar = () => {
      const [filterData, setFilterData] = useState([]);
      const [wordEntered, setWordEntered] = useState("");
      const handleFilter = (e) => {
            const searchWord = e.target.value;
            setWordEntered(searchWord);
            const newFilter = products.filter((item) => {
                  return item.title
                        .toLowerCase()
                        .includes(searchWord.toLowerCase());
            });
            if (searchWord === "") {
                  setFilterData([]);
            } else {
                  setFilterData(newFilter);
            }
      };
      const clearInput = () => {
            setFilterData([]);
            setWordEntered("");
      };
      return (
            <Paper
                  sx={{
                        p: "1rem",
                        display: "flex",
                        justifyContent: "space-between",
                        backgroundImage:
                              " linear-gradient(to bottom, #c91c1c 0%, #fb7a7a 100%)",
                        color: "whitesmoke",
                        flexDirection: {
                              xs: "column",
                              sm: "row",
                        },
                        gap: "1rem",
                  }}
            >
                  <Stack
                        direction="row"
                        spacing={2}
                        display="flex"
                        justifyContent="space-between"
                  >
                        <Tooltip
                              title="If you need help contact: +250-791-888-141"
                              placement="bottom"
                              arrow
                              enterDelay={1000}
                              leaveDelay={200}
                        >
                              <IconButton
                                    sx={{
                                          width: "20px",
                                          height: "20px",
                                          padding: "1rem",
                                          boxSizing: "border-box",
                                          background: "whitesmoke",
                                          borderRadius: "50%",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          marginRight: ".5rem",
                                          color: "red",
                                          "&:hover": {
                                                background: "#ccc",
                                          },
                                          fontSize: "12px",
                                    }}
                              >
                                    <Phone />
                              </IconButton>
                        </Tooltip>

                        <Tooltip
                              title="Get in touch with us: bruce@yahoo.com"
                              placement="bottom"
                              arrow
                              enterDelay={1000}
                              leaveDelay={200}
                        >
                              <IconButton
                                    sx={{
                                          width: "20px",
                                          height: "20px",
                                          padding: "1rem",
                                          boxSizing: "border-box",
                                          background: "whitesmoke",
                                          borderRadius: "50%",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          marginRight: ".5rem",
                                          color: "red",
                                          "&:hover": {
                                                background: "#ccc",
                                          },
                                          fontSize: "12px",
                                    }}
                              >
                                    <Email />
                              </IconButton>
                        </Tooltip>
                  </Stack>
                  <Stack direction="column" position="relative">
                        <Stack
                              direction="row"
                              sx={{
                                    border: "1px solid #eee",
                                    borderRadius: "1rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    px: "1rem",
                              }}
                        >
                              <input
                                    type="text"
                                    value={wordEntered}
                                    onChange={handleFilter}
                                    placeholder="Search Food..."
                                    style={{
                                          background: "none",
                                          fontSize: "1rem",
                                          color: "white",
                                          width: "90%",
                                    }}
                              />

                              {filterData.length == 0 ? (
                                    <IconButton sx={{ color: "white" }}>
                                          <Search />
                                    </IconButton>
                              ) : (
                                    <IconButton
                                          sx={{ color: "white" }}
                                          onClick={clearInput}
                                    >
                                          <Close />
                                    </IconButton>
                              )}
                        </Stack>
                        {filterData.length !== 0 && (
                              <Stack
                                    direction="column"
                                    sx={{
                                          background: "white",
                                          padding: "1rem",
                                          color: "black",
                                          position: "absolute",
                                          right: "15%",
                                          top: {
                                                xs: "110%",
                                                md: "90%",
                                          },
                                          borderRadius: "0.5rem",
                                          overflow: "hidden",
                                          overflowY: "scroll",
                                          height: "12rem",
                                          width: "80%",
                                          zIndex: "2",
                                    }}
                                    className="search__container"
                              >
                                    {filterData.map((item) => (
                                          <Link
                                                to={`foods/${item.id}`}
                                                className="search__link"
                                                key={item.id}
                                                onClick={clearInput}
                                          >
                                                {item.title}
                                          </Link>
                                    ))}
                              </Stack>
                        )}
                  </Stack>
            </Paper>
      );
};

export default SearchBar;
