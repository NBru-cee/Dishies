import React, { useState } from "react";
import {
      Typography,
      Box,
      Paper,
      IconButton,
      Stack,
      Tooltip,
} from "@mui/material";
import { Phone, PinDrop, Email, Search, Close } from "@mui/icons-material";
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
                  }}
            >
                  <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                              display: {
                                    xs: "none",
                                    sm: "none",
                                    md: "flex",
                              },
                        }}
                  >
                        <Box>
                              <Typography variant="body2">
                                    Need Help?
                              </Typography>
                              <Stack direction="row" alignItems="center">
                                    <Tooltip
                                          title="Contact us"
                                          placement="bottom"
                                          arrow
                                          enterDelay={1000}
                                          leaveDelay={200}
                                    >
                                          <IconButton
                                                sx={{
                                                      width: "35px",
                                                      height: "35px",
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
                                                }}
                                          >
                                                <Phone />
                                          </IconButton>
                                    </Tooltip>
                                    <Typography variant="body2">
                                          +250-791-888-141
                                    </Typography>
                              </Stack>
                        </Box>

                        <Box>
                              <Typography variant="body2">Location</Typography>
                              <Stack direction="row" alignItems="center">
                                    <Tooltip
                                          title="Our Location"
                                          placement="bottom"
                                          arrow
                                          enterDelay={1000}
                                          leaveDelay={200}
                                    >
                                          <IconButton
                                                sx={{
                                                      width: "35px",
                                                      height: "35px",
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
                                                }}
                                          >
                                                <PinDrop />
                                          </IconButton>
                                    </Tooltip>
                                    <Typography variant="body2">
                                          Kigali, Rwanda
                                    </Typography>
                              </Stack>
                        </Box>

                        <Box>
                              <Typography variant="body2">
                                    Get in touch
                              </Typography>
                              <Stack direction="row" alignItems="center">
                                    <Tooltip
                                          title="Send Message"
                                          placement="bottom"
                                          arrow
                                          enterDelay={1000}
                                          leaveDelay={200}
                                    >
                                          <IconButton
                                                sx={{
                                                      width: "35px",
                                                      height: "35px",
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
                                                }}
                                          >
                                                <Email />
                                          </IconButton>
                                    </Tooltip>
                                    <Typography variant="body2">
                                          bruce@yahoo.com
                                    </Typography>
                              </Stack>
                        </Box>
                  </Stack>
                  <Stack direction="column" position="relative">
                        <Stack
                              direction="row"
                              sx={{
                                    border: "1.5px solid white",
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
