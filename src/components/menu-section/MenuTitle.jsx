import React from "react";
import "../../styles/menu.css";
import { Typography, Box } from "@mui/material";

const MenuTitle = ({ title }) => {
      return (
            <Box className="menu__title">
                  <Box className="menu__content">
                        <Box className="menu__header">
                              <Typography
                                    variant="h4"
                                    className="menu__header__title"
                              >
                                    {title}
                              </Typography>
                        </Box>
                  </Box>
            </Box>
      );
};

export default MenuTitle;
