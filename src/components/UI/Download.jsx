import React from "react";
import { Typography, Box, Stack, IconButton } from "@mui/material";
import { Apple } from "@mui/icons-material";
import { RiGooglePlayFill } from "react-icons/ri";
import downloadImg01 from "../../assets/imgs/common-imgs/download.png";
import downloadImg02 from "../../assets/imgs/common-imgs/download2.png";

const Download = () => {
      return (
            <Box>
                  <Box>
                        <Typography
                              variant="h4"
                              color="maroon"
                              textAlign="center"
                              my={3}
                        >
                              Download our App
                        </Typography>
                  </Box>
                  <Box
                        sx={{
                              background:
                                    "linear-gradient(to right, #eb3a3a 0%, #e46a6a 100%)",
                              padding: "1rem",
                              borderRadius: "0.5rem",
                              my: "2rem",
                              display: "flex",
                              flexDirection: {
                                    xs: "column",
                                    sm: "row",
                              },
                        }}
                  >
                        <Stack
                              direction={{ sm: "column", md: "row" }}
                              spacing={2}
                              display="flex"
                              flexDirection="column"
                        >
                              <Box sx={{ flexBasis: "50%" }}>
                                    <Stack direction="row" pb="2rem">
                                          <Box sx={{ width: "50%" }}>
                                                <img
                                                      src={downloadImg01}
                                                      alt="download image 1"
                                                      style={{
                                                            width: "100%",
                                                            borderRadius:
                                                                  "0.4rem",
                                                      }}
                                                />
                                          </Box>
                                          <Box sx={{ width: "50%" }}>
                                                <img
                                                      src={downloadImg02}
                                                      alt="download image 2"
                                                      style={{
                                                            width: "100%",
                                                            borderRadius:
                                                                  "0.4rem",
                                                            zIndex: "2",
                                                            transform:
                                                                  "translate(-20%, 5%)",

                                                            border: "2px solid #e46a6a",
                                                      }}
                                                />
                                          </Box>
                                    </Stack>
                              </Box>
                              <Box textAlign="center" flexBasis="50%">
                                    <Typography variant="h5" color="whitesmoke">
                                          Download our mobile app ! Order
                                          delicious food.
                                    </Typography>
                                    <Typography variant="body2" color="#14141a">
                                          Are you tired of waiting in long
                                          queues at your favorite restaurant, or
                                          spending hours in the kitchen
                                          preparing meals? Look no further than
                                          the Dishies mobile website! Our
                                          platform offers a variety of
                                          restaurant and food delivery options
                                          to satisfy any craving, all in one
                                          convenient location. With just a few
                                          clicks, you can enjoy delicious meals
                                          from your favorite restaurants,
                                          delivered right to your doorstep.
                                          Plus, with our user-friendly interface
                                          and simple payment options, ordering
                                          food has never been easier. Don't miss
                                          out on the benefits of Dishies -
                                          download our mobile website today and
                                          start enjoying hassle-free dining
                                          experiences!
                                    </Typography>
                                    <Stack
                                          direction={{
                                                xs: "column",
                                                sm: "row",
                                          }}
                                          spacing={3}
                                          mt={4}
                                    >
                                          <IconButton
                                                sx={{
                                                      color: "#eb3a3a",
                                                      bgcolor: "whitesmoke",
                                                      borderRadius: "0.4rem",
                                                      gap: "0.5rem",
                                                      "&:hover": {
                                                            color: "#eb3a3a",
                                                            bgcolor: "lightgray",
                                                      },
                                                }}
                                          >
                                                <RiGooglePlayFill />
                                                <Typography>
                                                      Play Store
                                                </Typography>
                                          </IconButton>
                                          <IconButton
                                                sx={{
                                                      color: "whitesmoke",
                                                      border: "1px solid whitesmoke",
                                                      gap: "0.5rem",
                                                      borderRadius: "0.4rem",
                                                }}
                                          >
                                                <Apple />
                                                <Typography>
                                                      Apple Store
                                                </Typography>
                                          </IconButton>
                                    </Stack>
                              </Box>
                        </Stack>
                  </Box>
            </Box>
      );
};

export default Download;
