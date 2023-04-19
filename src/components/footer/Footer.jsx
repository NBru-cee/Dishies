import React from "react";
import { links } from "../../assets/data/data";
import { infoLinks } from "../../assets/data/data";
import { Stack, Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
     FacebookRounded,
     Instagram,
     WhatsApp,
     LinkedIn,
     Twitter,
     DinnerDining,
} from "@mui/icons-material";

const Footer = () => {
     const year = new Date().getFullYear().toString();
     return (
          <footer
               style={{
                    background:
                         "linear-gradient(to right, #fb7a7a 0%, #cc3737 100%)",
                    padding: "2rem 4rem",
                    color: "whitesmoke",
               }}
          >
               <Stack direction="column" spacing={1}>
                    <Stack
                         direction="row"
                         spacing={2}
                         sx={{
                              display: "grid",
                              gridTemplateColumns: {
                                   xs: "1fr",
                                   sm: "repeat(2, minmax(0, 1fr))",
                                   md: "repeat(4, minmax(0, 1fr))",
                              },
                              gap: "1rem",
                         }}
                    >
                         <Box>
                              <Stack
                                   direction="column"
                                   alignItems="center"
                                   p={1}
                              >
                                   <IconButton
                                        sx={{
                                             border: "3px solid maroon",
                                             height: "35px",
                                             width: "35px",
                                             borderRadius: "50%",
                                             background: "white",
                                        }}
                                   >
                                        <DinnerDining color="error" />
                                   </IconButton>
                                   <Typography variant="subtitle2">
                                        Dishies
                                   </Typography>
                              </Stack>
                              <Typography variant="body2" textAlign="center">
                                   Dishies Fast Food & Restuarant, the best
                                   place to have a nice and decent meal in the
                                   whole town. We welcome you all at Dishies.
                              </Typography>
                         </Box>
                         <Box>
                              <Typography variant="h6">Quick Links</Typography>
                              <Stack direction="column" spacing={1}>
                                   {links.map((link) => (
                                        <Link to={link.path} key={link.id}>
                                             {link.title}
                                        </Link>
                                   ))}
                              </Stack>
                         </Box>
                         <Box>
                              <Typography variant="h6">Info Links</Typography>
                              <Stack direction="column" spacing={1}>
                                   {infoLinks.map((link) => (
                                        <Link key={link.id} to={link.path}>
                                             {link.title}
                                        </Link>
                                   ))}
                              </Stack>
                         </Box>
                         <Box>
                              <Typography variant="h6">
                                   Support us at:
                              </Typography>
                              <Stack spacing={2} direction="row">
                                   <Link
                                        to="https://www.facebook.com"
                                        style={{
                                             width: "35px",
                                             height: "35px",
                                             background: "white",
                                             borderRadius: "50%",
                                             padding: "5px",
                                             display: "flex",
                                             alignItems: "center",
                                             justifyContent: "center",
                                        }}
                                   >
                                        <FacebookRounded color="primary" />
                                   </Link>
                                   <Link
                                        to="https://www.instagram.com"
                                        style={{
                                             width: "35px",
                                             height: "35px",
                                             background: "white",
                                             borderRadius: "50%",
                                             padding: "5px",
                                             display: "flex",
                                             alignItems: "center",
                                             justifyContent: "center",
                                        }}
                                   >
                                        <Instagram color="secondary" />
                                   </Link>
                                   <Link
                                        to="https://www.whatsapp.com"
                                        style={{
                                             width: "35px",
                                             height: "35px",
                                             background: "white",
                                             borderRadius: "50%",
                                             padding: "5px",
                                             display: "flex",
                                             alignItems: "center",
                                             justifyContent: "center",
                                        }}
                                   >
                                        <WhatsApp color="success" />
                                   </Link>
                                   <Link
                                        to="https://www.linkedin.com"
                                        style={{
                                             width: "35px",
                                             height: "35px",
                                             background: "white",
                                             borderRadius: "50%",
                                             padding: "5px",
                                             display: "flex",
                                             alignItems: "center",
                                             justifyContent: "center",
                                        }}
                                   >
                                        <LinkedIn color="primary" />
                                   </Link>
                                   <Link
                                        to="https://www.twitter.com"
                                        style={{
                                             width: "35px",
                                             height: "35px",
                                             background: "white",
                                             borderRadius: "50%",
                                             padding: "5px",
                                             display: "flex",
                                             alignItems: "center",
                                             justifyContent: "center",
                                        }}
                                   >
                                        <Twitter color="info" />
                                   </Link>
                              </Stack>
                         </Box>
                    </Stack>
                    <Stack direction="column">
                         <Typography
                              variant="body1"
                              color="white"
                              textAlign="center"
                              mt={2}
                         >
                              Copyright &copy; Dishies {year}. All rights
                              reserved.
                         </Typography>
                    </Stack>
               </Stack>
          </footer>
     );
};

export default Footer;
