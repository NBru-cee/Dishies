import React from "react";
import { Stack, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { profiles } from "../../assets/data/data";
import "../../styles/header.css";

const Account = () => {
      return (
            <Stack direction="column" p={2}>
                  {profiles.map((profile) => (
                        <Link
                              to={profile.path}
                              key={profile.id}
                              className="accountLink"
                        >
                              <IconButton
                                    sx={{
                                          background: "whitesmoke",
                                          transition: "0.4s",
                                    }}
                              >
                                    {profile.icon}
                              </IconButton>

                              <Typography variant="body2">
                                    {profile.title}
                              </Typography>
                        </Link>
                  ))}
            </Stack>
      );
};

export default Account;
