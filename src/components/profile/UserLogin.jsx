import React from "react";
import {
     TextField,
     Box,
     Stack,
     Button,
     Typography,
     Paper,
     Link,
} from "@mui/material";

const UserLogin = () => {
     return (
          <section>
               <Paper>
                    <Box
                         sx={{
                              padding: "1rem",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                         }}
                    >
                         <form>
                              <Stack direction="column" my={2}>
                                   <TextField
                                        label="Username"
                                        color="success"
                                        sx={{ width: "100%" }}
                                   />
                                   <small></small>
                              </Stack>
                              <Stack direction="column" my={2}>
                                   <TextField
                                        label="Email"
                                        color="success"
                                        sx={{ width: "100%" }}
                                        type="email"
                                   />
                                   <small></small>
                              </Stack>
                              <Stack direction="column" my={2}>
                                   <TextField
                                        label="Password"
                                        color="success"
                                        sx={{ width: "100%" }}
                                        type="password"
                                   />
                                   <small></small>
                              </Stack>
                              <Stack direction="row" my={2}>
                                   <Button
                                        variant="contained"
                                        color="error"
                                        sx={{
                                             width: "100%",
                                             textAlign: "center",
                                             padding: "0.5rem 0",
                                        }}
                                   >
                                        <Link href="/">Login</Link>
                                   </Button>
                              </Stack>
                              <Box>
                                   <Typography
                                        variant="subtitle"
                                        textAlign="center"
                                   >
                                        Don't have an account ?
                                        <Link
                                             href="/register"
                                             sx={{
                                                  color: "darkblue !important",
                                                  fontSize: "1.2rem",
                                                  fontWeight: "500",
                                                  transition: "0.4s",
                                                  "&:hover": {
                                                       opacity: 0.8,
                                                       color: "darkblue !important",
                                                  },
                                                  "&:active": {
                                                       opacity: 0.6,
                                                       color: "darkblue !important",
                                                  },
                                             }}
                                        >
                                             Sign up here.
                                        </Link>
                                   </Typography>
                              </Box>
                         </form>
                    </Box>
               </Paper>
          </section>
     );
};

export default UserLogin;
