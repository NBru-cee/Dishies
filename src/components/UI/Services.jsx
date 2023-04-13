import React from "react";
import { Box, Stack, Typography, Paper } from "@mui/material";
import { services } from "../../assets/data/data";

const Services = () => {
      return (
            <Box
                  sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "1rem",
                        padding: "1rem",
                  }}
            >
                  {services.map((service) => (
                        <Paper
                              key={service.id}
                              elevation={4}
                              sx={{ width: "30%" }}
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
                                                color: "#1c264c",
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
                                    <Typography variant="body2">
                                          {service.content}
                                    </Typography>
                              </Stack>
                        </Paper>
                  ))}
            </Box>
      );
};

export default Services;
