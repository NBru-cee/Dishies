import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";
import { Typography, Paper, Stack, Button } from "@mui/material";
const Missing = () => {
      return (
            <Stack direction="column" p={4} px={16}>
                  <Paper elevation={5} sx={{ p: 2 }}>
                        <Typography variant="h4">OOPS</Typography>
                        <Typography variant="h5" color="darkred">
                              Server returned with a status of 404
                        </Typography>
                        <Typography>Search not found...</Typography>
                  </Paper>

                  <Stack mt={4} width="200px">
                        <Button variant="text" endIcon={<ChevronRight />}>
                              <Link to="/">Return Home</Link>
                        </Button>
                  </Stack>
            </Stack>
      );
};

export default Missing;
