import {
     TextField,
     Typography,
     Paper,
     Button,
     Snackbar,
     Alert,
     Stack,
     Box,
} from "@mui/material";
import React from "react";

const ContactForm = () => {
     const handleSubmit = (e) => {
          e.preventDefault();
          console.log("Form Submitted");
     };

     return (
          <section>
               <Paper>
                    <Typography variant="h4" color="maroon" textAlign="center">
                         Get In Touch
                    </Typography>
                    <form
                         onSubmit={handleSubmit}
                         style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "2rem",
                              flexDirection: "column",
                         }}
                    >
                         <Box>
                              <Stack
                                   direction={{
                                        xs: "column",
                                        md: "row",
                                   }}
                                   spacing={4}
                                   alignItems="center"
                              >
                                   <TextField
                                        label="Username"
                                        color="error"
                                        sx={{
                                             width: "20rem",
                                             margin: "0.5rem",
                                        }}
                                   />
                                   <TextField
                                        label="Email"
                                        color="error"
                                        sx={{
                                             width: "20rem",
                                             margin: "0.5rem",
                                        }}
                                        type="email"
                                   />
                              </Stack>
                              <Stack
                                   direction={{
                                        xs: "column",
                                        md: "row",
                                   }}
                                   spacing={4}
                                   alignItems="center"
                              >
                                   <TextField
                                        label="Phone"
                                        color="error"
                                        sx={{
                                             width: "20rem",
                                             margin: "0.5rem",
                                        }}
                                        type="number"
                                   />
                                   <TextField
                                        label="Location"
                                        color="error"
                                        sx={{
                                             width: "20rem",
                                             margin: "0.5rem",
                                        }}
                                   />
                              </Stack>
                         </Box>
                         <Button
                              variant="contained"
                              type="submit"
                              color="error"
                              sx={{
                                   textTransform: "capitalize",
                                   fontSize: "1.2rem",
                                   width: "20rem",
                                   mt: "1rem",
                                   padding: "0.5rem 0",
                              }}
                         >
                              Submit
                         </Button>
                    </form>
               </Paper>
          </section>
     );
};

export default ContactForm;
