import React from "react";
import { Stack, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { profiles } from "../../assets/data/data";

const Account = () => {
      return (
            <Stack direction="column" p={2}>
                  {profiles.map((profile) => (
                        <Stack
                              key={profile.id}
                              direction="row"
                              spacing={2}
                              alignItems="center"
                              textAlign="center"
                        >
                              <Link to={profile.path}>
                                    <IconButton>{profile.icon}</IconButton>
                              </Link>
                              <Typography variant="body2">
                                    {profile.title}
                              </Typography>
                        </Stack>
                  ))}
            </Stack>
      );
};

export default Account;
