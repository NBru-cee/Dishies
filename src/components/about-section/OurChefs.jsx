import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { chefs } from "../../assets/data/data";
import "../../styles/about.css";

const OurChefs = () => {
      return (
            <section>
                  <Stack
                        direction={{
                              xs: "column-reverse",
                              sm: "row",
                        }}
                        spacing={4}
                        alignItems="center"
                        display="flex"
                  >
                        <Box
                              sx={{
                                    flexBasis: "50%",
                                    marginTop: "5rem",
                              }}
                        >
                              <Stack
                                    direction="row"
                                    display="grid"
                                    gridTemplateColumns={{
                                          sm: "repeat(2, minmax(0, 1fr))",
                                          md: "repeat(3, minmax(0, 1fr))",
                                    }}
                                    gap="1rem"
                              >
                                    {chefs.map((chef) => (
                                          <img
                                                src={chef.image}
                                                alt={chef.alt}
                                                key={chef.id}
                                                style={{
                                                      width: "100%",
                                                      height: "150px",
                                                      objectFit: "cover",
                                                      borderRadius: "0.5rem",
                                                }}
                                          />
                                    ))}
                              </Stack>
                        </Box>
                        <Box sx={{ flexBasis: "50%" }}>
                              <Typography
                                    variant="h5"
                                    color="red"
                                    my={3}
                                    className="chefs"
                              >
                                    Our Chefs
                              </Typography>
                              <Typography
                                    variant="body1"
                                    my={1}
                                    className="chefs"
                              >
                                    Our Chefs are so passionate, confident and
                                    creative chefs who can skillfully plan
                                    menus, prepare outstanding food, manange
                                    budgets, and lead a team of people to
                                    deliver quility of service to your
                                    customers.
                              </Typography>
                              <Typography
                                    variant="body1"
                                    my={1}
                                    className="chefs"
                              >
                                    As chefs at our popular restaurant, they
                                    will have the opportunity to create a
                                    stunning selection of diverse menu items for
                                    our customers. They'll be able to put their
                                    skills to good use creating masterful dishes
                                    for lunch and dinner, as well as
                                    mouthwatering desserts and appetizers.
                              </Typography>
                              <Typography
                                    variant="body1"
                                    my={1}
                                    className="chefs"
                              >
                                    They enjoy working with and receiving
                                    assistance from a remarkable team of
                                    waiters, waitresses and other supporting
                                    staff members who help them make and deliver
                                    meals to guests promptly.
                              </Typography>
                        </Box>
                  </Stack>
            </section>
      );
};

export default OurChefs;
