import React, { useState, forwardRef } from "react";
import {
      Stack,
      IconButton,
      Typography,
      Box,
      Tooltip,
      Snackbar,
      Alert,
} from "@mui/material";
import { RiSendPlaneLine } from "react-icons/ri";
import "../../styles/home.css";

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
      return <Alert ref={ref} {...props} elevation={6} />;
});

const NewsLetter = () => {
      const [open, setOpen] = useState(false);
      const [wordEntered, setWordEntered] = useState("");
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
            <section className="newsletter">
                  <Stack direction="column" spacing={2}>
                        <Box textAlign="center">
                              <Typography
                                    variant="h4"
                                    color="maroon"
                                    mb={1}
                                    textAlign="center"
                              >
                                    Get in Touch
                              </Typography>
                              <Typography variant="body1" color="#1c264c">
                                    Help improve dishies with a quick message
                                    down here:
                              </Typography>
                        </Box>
                        <Box>
                              <Stack
                                    sx={{
                                          display: "flex",
                                          alignItems: "center",
                                          flexDirection: "row",
                                          justifyContent: "center",
                                          padding: "1rem",
                                          background:
                                                "linear-gradient(to left, #eb3a3a 0%, #e46a6a 100%)",
                                          borderRadius: "0.5rem",
                                    }}
                              >
                                    <input
                                          placeholder="Send message..."
                                          value={wordEntered}
                                          onChange={(e) =>
                                                setWordEntered(e.target.value)
                                          }
                                    />
                                    <Tooltip
                                          title="Email us"
                                          placement="right"
                                          arrow
                                          enterDelay={500}
                                          leaveDelay={100}
                                    >
                                          <IconButton
                                                sx={{
                                                      color: "whitesmoke",
                                                      border: "2px solid whitesmoke",
                                                      ml: "0.2rem",
                                                      transition: "0.4s",
                                                      display: "flex",
                                                      alignItems: "center",
                                                      justifyContent: "center",
                                                      "&:hover": {
                                                            transform:
                                                                  "scale(1.1) ",
                                                      },
                                                }}
                                                onClick={handleClick}
                                          >
                                                <RiSendPlaneLine
                                                      style={{
                                                            fontSize: "2rem",
                                                      }}
                                                />
                                          </IconButton>
                                    </Tooltip>
                              </Stack>
                        </Box>
                  </Stack>
                  <Snackbar
                        open={open}
                        onClose={handleClose}
                        autoHideDuration={2000}
                  >
                        <SnackbarAlert onClose={handleClose} severity="success">
                              Message sent successfully !
                        </SnackbarAlert>
                  </Snackbar>
            </section>
      );
};

export default NewsLetter;
