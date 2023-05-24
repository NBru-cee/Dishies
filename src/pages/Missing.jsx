import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";
import { Typography, Paper, Stack, Button, Box } from "@mui/material";
import notFoundImg from "/notFound.svg";

const Missing = () => {
      return (
            <Stack direction="column" p={4}>
                  <Paper
                        elevation={5}
                        sx={{ p: 2, textAlign: "center", width: "100%" }}
                  >
                        <Box
                              width="50%"
                              padding="2rem"
                              margin="auto"
                              position="relative"
                        >
                              <img
                                    src={notFoundImg}
                                    alt="not found"
                                    style={{ width: "100%" }}
                              />
                              <Box
                                    position="absolute"
                                    right="-50%"
                                    top="20%"
                                    backgroundColor="orange"
                                    padding="1rem"
                              >
                                    <Box
                                          position="absolute"
                                          left="-10%"
                                          top="30%"
                                    >
                                          <svg
                                                width="100"
                                                height="100"
                                                style={{
                                                      transform:
                                                            "rotate(40deg)",
                                                }}
                                          >
                                                <polygon
                                                      points="0,0 0,50 50,50"
                                                      fill="orange"
                                                />
                                          </svg>
                                    </Box>
                                    <Typography
                                          variant="body1"
                                          color="whitesmoke"
                                          fontSize="1.5rem"
                                    >
                                          I don't think this is what you were
                                          looking for
                                    </Typography>
                              </Box>
                        </Box>
                        <Box margin="3rem auto">
                              <Typography variant="h4" color="maroon">
                                    SORRY
                              </Typography>

                              <Typography>Page not found...</Typography>
                        </Box>
                  </Paper>

                  <Stack mt={4} width="200px">
                        <Button variant="text" endIcon={<ChevronRight />}>
                              <Link to="/">Return Home</Link>
                        </Button>
                  </Stack>
            </Stack>
      );
};

export default Missing;
