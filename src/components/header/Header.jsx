import React, { useState } from "react";
import "../../styles/header.css";
import {
      AppBar,
      Toolbar,
      Button,
      Menu,
      IconButton,
      Typography,
      Stack,
      Drawer,
      Box,
} from "@mui/material";
import { DinnerDining, ShoppingBag, Person, Close } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { MdMenu } from "react-icons/md";
import { links } from "../../assets/data/data";
import { Link } from "react-router-dom";
import Account from "../UI/Account";

const useStyles = makeStyles({
      close: {
            background: "maroon",
            color: "white",
            transition: "0.4s ease-in-out",
            "&:hover": {
                  background: "red",
            },
      },
});

const Header = () => {
      const [profileOpen, setProfileOpen] = useState(false);
      const [navOpen, setNavOpen] = useState(false);
      const [cartOpen, setCartOpen] = useState(false);
      const open = Boolean(profileOpen);
      const closeProfile = () => {
            setProfileOpen(null);
      };
      const classes = useStyles();
      return (
            <header>
                  <AppBar
                        position="static"
                        sx={{
                              backgroundColor: "white",
                              color: "black",
                              boxShadow: "none",
                        }}
                  >
                        <Toolbar
                              sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                              }}
                        >
                              <Stack
                                    direction="column"
                                    alignItems="center"
                                    p={1}
                              >
                                    <IconButton
                                          sx={{
                                                border: "3px solid maroon",
                                                height: "40px",
                                                width: "40px",
                                                borderRadius: "50%",
                                          }}
                                    >
                                          <DinnerDining color="error" />
                                    </IconButton>
                                    <Typography
                                          variant="subtitle2"
                                          className="logo__title"
                                    >
                                          Dishies
                                    </Typography>
                              </Stack>

                              <Stack
                                    sx={{
                                          display: {
                                                xs: "none",
                                                sm: "flex",
                                          },
                                          alignItems: "center",
                                          flexDirection: "row",
                                    }}
                              >
                                    {links.map((link) => (
                                          <Link
                                                key={link.id}
                                                to={link.path}
                                                className="link__btn"
                                          >
                                                {link.title}
                                          </Link>
                                    ))}
                              </Stack>

                              <Stack direction="row">
                                    <IconButton
                                          sx={{ postion: "relative" }}
                                          color="inherit"
                                          onClick={() => setCartOpen(!cartOpen)}
                                    >
                                          <ShoppingBag />
                                          <span className="badge">2</span>
                                    </IconButton>
                                    <IconButton
                                          color="inherit"
                                          onClick={(e) =>
                                                setProfileOpen(e.currentTarget)
                                          }
                                    >
                                          <Person />
                                    </IconButton>
                                    <IconButton
                                          sx={{
                                                display: {
                                                      sm: "none",
                                                      xs: "block",
                                                },
                                          }}
                                          color="inherit"
                                          onClick={() => setNavOpen(!navOpen)}
                                    >
                                          <MdMenu />
                                    </IconButton>
                              </Stack>
                              <Menu
                                    anchorEl={profileOpen}
                                    open={open}
                                    onClose={closeProfile}
                              >
                                    <Account />
                              </Menu>
                              <Drawer
                                    anchor="right"
                                    open={navOpen}
                                    onClose={() => setNavOpen(false)}
                              >
                                    <Stack
                                          direction="column"
                                          spacing={2}
                                          sx={{
                                                width: "150px",
                                                padding: "1rem",
                                          }}
                                    >
                                          <Box>
                                                <IconButton
                                                      variant="contained"
                                                      onClick={() =>
                                                            setNavOpen(false)
                                                      }
                                                      className={classes.close}
                                                >
                                                      <Close />
                                                </IconButton>
                                          </Box>
                                          <Stack
                                                direction="column"
                                                spacing={2}
                                                sx={{
                                                      padding: "1.2rem",
                                                      display: "flex",
                                                      alignItems: "end",
                                                }}
                                          >
                                                {links.map((link) => (
                                                      <Link
                                                            key={link.id}
                                                            to={link.path}
                                                            className="link__btn"
                                                            onClick={() =>
                                                                  setNavOpen(
                                                                        false
                                                                  )
                                                            }
                                                      >
                                                            {link.title}
                                                      </Link>
                                                ))}
                                          </Stack>
                                    </Stack>
                              </Drawer>
                              <Drawer
                                    anchor="right"
                                    open={cartOpen}
                                    onClick={() => setCartOpen(false)}
                              >
                                    <Button variant="outlined" color="success">
                                          Cart is Open
                                    </Button>
                              </Drawer>
                        </Toolbar>
                  </AppBar>
            </header>
      );
};

export default Header;
