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
                              padding: "01rem",
                        }}
                        className="services__stack"
                  >
                        {services.map((service) => (
                              <Paper
                                    key={service.id}
                                    elevation={2}
                                    sx={{
                                          width: "14rem",
                                          height: "18.5rem",
                                          display: "flex",
                                          flexDirection: "column",
                                          justifyContent: "space-between",
                                    }}
                              >
                                    <Stack
                                          direction="column"
                                          spacing={1}
                                          alignItems="center"
                                          p={2}
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
