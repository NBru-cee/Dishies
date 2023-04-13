import React from "react";

import { Stack, Typography } from "@mui/material";

import Services from "./Services";
import RestoServices from "./RestoServices";

const AboutUs = () => {
      return (
            <section>
                  <Stack
                        direction="column"
                        spacing={1}
                        textAlign="center"
                        px={12}
                  >
                        <Typography variant="h6" color=" #1c264c">
                              Who we are
                        </Typography>
                        <Typography variant="h4" color="maroon">
                              Take a look at the benefits that we offer to you
                        </Typography>
                        <Typography variant="body1" color=" #1c264c">
                              We make sure that what you want is what you
                              receive from us and that you receive it the way
                              you wanted it.Your wisht is our command and we not
                              only do as much as we can but also overwork
                              ourselves so that you can get all you expected to
                              get from us.
                        </Typography>
                  </Stack>
                  <Stack direction="row" spacing={2} mt={4}>
                        <Services />
                  </Stack>
                  <Typography
                        variant="h4"
                        color="maroon"
                        my={4}
                        textAlign="center"
                  >
                        Dishies Restaurant
                  </Typography>
                  <Stack direction="row" spacing={3}>
                        <RestoServices />
                  </Stack>
            </section>
      );
};

export default AboutUs;
