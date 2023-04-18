import aboutImg from "../../assets/imgs/common-imgs/about-img.webp";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import "../../styles/about.css";

const OurChefs = () => {
      return (
            <section>
                  <Box>
                        <Typography
                              variant="h4"
                              color="maroon"
                              textAlign="center"
                        >
                              About us
                        </Typography>
                        <Stack
                              direction={{
                                    xs: "column",
                                    sm: "row",
                              }}
                              spacing={2}
                              alignItems="center"
                              display="flex"
                        >
                              <Box sx={{ flexBasis: "50%" }}>
                                    <Typography
                                          variant="h5"
                                          my={2}
                                          color="red"
                                          className="welcome"
                                    >
                                          Welcome
                                    </Typography>
                                    <Typography
                                          variant="body1"
                                          my={1}
                                          className="welcome"
                                    >
                                          Dishies story began in 2023 with a
                                          clear and unique vision of the future
                                          of fast food.Recognizing the
                                          importance of healthy living, a love
                                          for flavor, and authenticity, Dishies'
                                          creation was by no means accidental.
                                    </Typography>
                                    <Typography
                                          variant="body1"
                                          my={1}
                                          className="welcome"
                                    >
                                          Since our humble beginnings as a
                                          family-run eatery in Nyabihu, Dishies
                                          has been able to maninatain our
                                          individuality and creativity, while
                                          growing into a unique healthy fast
                                          food chanin. Our team takes great
                                          pride in offering customers a healthy
                                          alternative to both traditional fast
                                          food and forein food. We hope you
                                          enjoy Dishies experience!
                                    </Typography>
                              </Box>
                              <Box
                                    sx={{
                                          flexBasis: "50%",
                                          mt: "4rem !important",
                                    }}
                              >
                                    <img
                                          src={aboutImg}
                                          alt="about image"
                                          style={{
                                                width: "100%",
                                                borderRadius: "0.5rem",
                                          }}
                                    />
                              </Box>
                        </Stack>
                  </Box>
            </section>
      );
};

export default OurChefs;
