import React from "react";
import { links } from "../../assets/data/data";
import { infoLinks } from "../../assets/data/data";
import { Stack, Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { DinnerDining } from "@mui/icons-material";
import { socialMedias } from "../../assets/data/data";
import "../../styles/home.css";

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
                                        <Link
                                             to={link.path}
                                             key={link.id}
                                             className="footer_links"
                                        >
                                             {link.title}
                                        </Link>
                                   ))}
                              </Stack>
                         </Box>
                         <Box>
                              <Typography variant="h6">Info Links</Typography>
                              <Stack direction="column" spacing={1}>
                                   {infoLinks.map((link) => (
                                        <Link
                                             key={link.id}
                                             to={link.path}
                                             className="footer_links"
                                        >
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
                                   {socialMedias.map((media) => (
                                        <Link
                                             key={media.id}
                                             to={media.url}
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
                                             <IconButton color={media.color}>
                                                  {media.icon}
                                             </IconButton>
                                        </Link>
                                   ))}
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
