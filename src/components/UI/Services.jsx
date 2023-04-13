import React from "react";
import { Box, Stack, Typography, Paper } from "@mui/material";
import { services } from "../../assets/data/data";

const Services = () => {
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
                        className="services__stack"
                  >
                        {services.map((service) => (
                              <Paper
                                    key={service.id}
                                    elevation={4}
                                    sx={{
                                          width: "18rem",
                                          height: "18rem",
                                          display: "flex",
                                          flexDirection: "column",
                                          justifyContent: "space-around",
                                    }}
                              >
                                    <Stack
                                          direction="column"
                                          spacing={1}
                                          alignItems="center"
                                          p={4}
                                          height="20rem"
                                    >
                                          <Box
                                                sx={{
                                                      fontSize: "4rem",
                                                      background: "yellow",
                                                      color: "maroon",
                                                      borderRadius: "50%",
                                                      width: "6rem",
                                                      height: "6rem",
                                                      display: "flex",
                                                      alignItems: "center",
                                                      justifyContent: "center",
                                                }}
                                          >
                                                {service.icon}
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

export default Services;
