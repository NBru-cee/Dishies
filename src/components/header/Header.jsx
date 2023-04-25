import React, { useState, useRef, useEffect } from "react";
import "../../styles/header.css";
import {
     AppBar,
     Toolbar,
     Menu,
     IconButton,
     Typography,
     Stack,
     Drawer,
     Box,
     Tooltip,
} from "@mui/material";
import { DinnerDining, ShoppingBag, Person, Close } from "@mui/icons-material";
import { MdMenu } from "react-icons/md";
import { links } from "../../assets/data/data";
import { Link } from "react-router-dom";
import Account from "../UI/Account";
import { useSelector } from "react-redux";
import CartContainer from "../cart/CartContainer";
import { cartTotalQuantity } from "../../app/slices/cartSlice";

const Header = () => {
     const totalQuantity = useSelector(cartTotalQuantity);
     const [profileOpen, setProfileOpen] = useState(false);
     const [navOpen, setNavOpen] = useState(false);
     const [cartOpen, setCartOpen] = useState(false);
     const headerRef = useRef();
     const open = Boolean(profileOpen);
     const closeProfile = () => {
          setProfileOpen(null);
     };

     useEffect(() => {
          document.addEventListener("scroll", () => {
               if (
                    document.body.scroll > 100 ||
                    document.documentElement.scrollTop > 100
               ) {
                    headerRef.current.classList.add("sticky__header");
               } else {
                    headerRef.current.classList.remove("sticky__header");
               }
          });
          document.removeEventListener("scroll", () => {});
     }, []);

     return (
          <header ref={headerRef}>
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
                         <Stack direction="column" alignItems="center">
                              <IconButton
                                   sx={{
                                        border: "3px solid maroon",
                                        height: "28px",
                                        width: "28px",
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
                              <Tooltip
                                   title="Cart"
                                   placement="bottom"
                                   arrow
                                   enterDelay={1000}
                                   leaveDelay={200}
                              >
                                   <IconButton
                                        sx={{ postion: "relative" }}
                                        color="inherit"
                                        onClick={() => setCartOpen(!cartOpen)}
                                   >
                                        <ShoppingBag />
                                        <span className="badge">
                                             {totalQuantity}
                                        </span>
                                   </IconButton>
                              </Tooltip>
                              <Tooltip
                                   title="Profile"
                                   placement="bottom"
                                   arrow
                                   enterDelay={1000}
                                   leaveDelay={200}
                              >
                                   <IconButton
                                        color="inherit"
                                        onClick={(e) =>
                                             setProfileOpen(e.currentTarget)
                                        }
                                   >
                                        <Person />
                                   </IconButton>
                              </Tooltip>

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
                              anchorOrigin={{
                                   vertical: "bottom",
                                   horizontal: "right",
                              }}
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
                                             onClick={() => setNavOpen(false)}
                                             sx={{
                                                  background: "maroon",
                                                  color: "white",
                                                  transition:
                                                       "0.4s ease-in-out",
                                                  "&:hover": {
                                                       background: "red",
                                                  },
                                             }}
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
                                                       setNavOpen(false)
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
                              onClose={() => setCartOpen(false)}
                         >
                              <CartContainer setCartOpen={setCartOpen} />
                         </Drawer>
                    </Toolbar>
               </AppBar>
          </header>
     );
};

export default Header;
