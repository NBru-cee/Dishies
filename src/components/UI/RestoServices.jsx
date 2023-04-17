import React from "react";
import { Box, Paper, Typography, Stack } from "@mui/material";
import { extraServices } from "../../assets/data/data";

const RestoServices = () => {
      return (
            <section>
                  <Box
                        sx={{
                              display: "flex",
                              justifyContent: "center",
                              flexWrap: "wrap",
                              gap: "1rem",
                              padding: "1rem",
                        }}
                  >
                        {extraServices.map((service) => (
                              <Paper
                                    key={service.id}
                                    elevation={4}
                                    sx={{
                                          width: "17rem",
                                          height: "18rem",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "space-around",
                                    }}
                              >
                                    <Stack
                                          direction="column"
                                          spacing={1}
                                          alignItems="center"
                                          p={4}
                                          height="15rem"
                                    >
                                          <Box
                                                sx={{
                                                      fontSize: "4rem",
                                                      borderRadius: "50%",
                                                      width: "6rem",
                                                      height: "6rem",
                                                      display: "flex",
                                                      alignItems: "center",
                                                      justifyContent: "center",
                                                }}
                                          >
                                                <img
                                                      src={service.image}
                                                      alt="service image"
                                                      style={{ width: "100%" }}
                                                />
                                          </Box>
                                          <Typography
                                                variant="body2"
                                                color="#1c264c"
                                          >
                                                {service.content}
                                          </Typography>
                                    </Stack>
                              </Paper>
                        ))}
                  </Box>
            </section>
      );
};

export default RestoServices;
