import React from "react";
import { Stack, IconButton, Typography, Box, Tooltip } from "@mui/material";
import { RiSendPlaneLine } from "react-icons/ri";
import "../../styles/home.css";

const NewsLetter = () => {
      return (
            <section>
                  <Stack direction="column" spacing={2}>
                        <Box textAlign="center">
                              <Typography
                                    variant="h4"
                                    color="maroon"
                                    mb={1}
                                    textAlign="center"
                              >
                                    Get in Touch
                              </Typography>
                              <Typography variant="body1" color="#1c264c">
                                    Help improve dishies with a quick message
                                    down here:
                              </Typography>
                        </Box>
                        <Box>
                              <Stack
                                    sx={{
                                          display: "flex",
                                          alignItems: "center",
                                          flexDirection: "row",
                                          justifyContent: "center",
                                          padding: "1rem",
                                          background:
                                                "linear-gradient(to left, #eb3a3a 0%, #e46a6a 100%)",
                                          borderRadius: "0.5rem",
                                    }}
                              >
                                    <textarea
                                          placeholder="Send message..."
                                          rows={2}
                                          cols={100}
                                    ></textarea>
                                    <Tooltip
                                          title="Email us"
                                          placement="right"
                                          arrow
                                          enterDelay={500}
                                          leaveDelay={100}
                                    >
                                          <IconButton
                                                sx={{
                                                      color: "whitesmoke",

                                                      "&:hover": {
                                                            transform:
                                                                  "scale(1.1) ",
                                                      },
                                                }}
                                          >
                                                <RiSendPlaneLine
                                                      style={{
                                                            fontSize: "4rem",
                                                      }}
                                                />
                                          </IconButton>
                                    </Tooltip>
                              </Stack>
                        </Box>
                  </Stack>
            </section>
      );
};

export default NewsLetter;
