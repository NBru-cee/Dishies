import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { Typography, Box, Stack } from "@mui/material";
import { clientData } from "../../assets/data/testimonials";
import "swiper/css";
import "swiper/css/effect-cards";

const Testimonials = () => {
      return (
            <section>
                  <Box
                        sx={{
                              width: "20rem",
                              margin: "0.1rem auto",
                        }}
                  >
                        <Typography
                              variant="h5"
                              color="red"
                              textAlign="center"
                              my={2}
                        >
                              You will like us more than them
                        </Typography>
                        <Box>
                              <Swiper
                                    effect={"cards"}
                                    grabCursor={true}
                                    modules={[EffectCards]}
                              >
                                    {clientData.map((client) => (
                                          <SwiperSlide
                                                key={client.id}
                                                style={{
                                                      display: "flex",
                                                      alignItems: "center",
                                                      padding: "1rem",
                                                      flexDirection: "column",
                                                      background: "whitesmoke",
                                                }}
                                          >
                                                <Box>
                                                      <Box
                                                            sx={{
                                                                  flexBasis:
                                                                        "50%",
                                                                  height: "40%",
                                                            }}
                                                      >
                                                            <img
                                                                  src={
                                                                        client.image
                                                                  }
                                                                  alt={
                                                                        client.title
                                                                  }
                                                                  style={{
                                                                        width: "100%",
                                                                        padding: "1rem",
                                                                        borderRadius:
                                                                              "1rem !important",
                                                                  }}
                                                            />
                                                      </Box>
                                                      <Box
                                                            sx={{
                                                                  flexBasis:
                                                                        "50%",
                                                                  height: "60%",
                                                            }}
                                                      >
                                                            <Stack
                                                                  direction="row"
                                                                  spacing={2}
                                                                  display="flex"
                                                                  alignItems="center"
                                                                  justifyContent="space-around"
                                                                  my={2}
                                                            >
                                                                  <Typography variant="body1">
                                                                        {
                                                                              client.name
                                                                        }
                                                                  </Typography>
                                                                  <Typography
                                                                        variant="body2"
                                                                        color="maroon"
                                                                  >
                                                                        {
                                                                              client.title
                                                                        }
                                                                  </Typography>
                                                            </Stack>
                                                            <Typography variant="body2">
                                                                  {
                                                                        client.content
                                                                  }
                                                            </Typography>
                                                      </Box>
                                                </Box>
                                          </SwiperSlide>
                                    ))}
                              </Swiper>
                        </Box>
                  </Box>
            </section>
      );
};

export default Testimonials;
