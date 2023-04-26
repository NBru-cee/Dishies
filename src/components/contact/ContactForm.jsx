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
import React, { forwardRef, useState } from "react";

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
     return <Alert ref={ref} {...props} elevation={6} />;
});

const ContactForm = () => {
     const handleSubmit = (e) => {
          e.preventDefault();
          console.log("Form Submitted");
     };
     const [open, setOpen] = useState(false);
     const handleClose = (reason) => {
          if (reason === "clickedaway") {
               return;
          }
          setOpen(false);
     };
     const handleClick = (e) => {
          setOpen(true);
          const input = document.querySelector("input");
          input.value = "";
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
                              onClick={handleClick}
                         >
                              Submit
                         </Button>
                    </form>
               </Paper>
               <Snackbar
                    open={open}
                    onClose={handleClose}
                    autoHideDuration={2000}
               >
                    <SnackbarAlert onClose={handleClose} severity="success">
                         Form sent successfully !
                    </SnackbarAlert>
               </Snackbar>
          </section>
     );
};

export default ContactForm;
