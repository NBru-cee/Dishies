import React, { useRef, useState, useEffect, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import "../../styles/profile.css";
import {
      Typography,
      TextField,
      Box,
      Button,
      Paper,
      Stack,
      Snackbar,
} from "@mui/material";

const address_regex = /^[a-zA-Z0-9\s\-\,\#\.]+$/;
const email_regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const user_regex = /^[A-z][A-z0-9-_]{3,23}$/;
const phone_regex = /^\+?[1-9]\d{1,14}$/;

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
      return <Alert ref={ref} {...props} elevation={6} />;
});

const ContactForm = () => {
      const navigate = useNavigate();
      const userRef = useRef();
      const errRef = useRef();
      const [user, setUser] = useState("");
      const [validUser, setValidUser] = useState(false);
      const [userFocus, setUserFocus] = useState(false);

      const [email, setEmail] = useState("");
      const [validEmail, setValidEmail] = useState(false);
      const [emailFocus, setEmailFocus] = useState(false);

      const [address, setAddress] = useState("");
      const [validAddress, setValidAddress] = useState(false);
      const [addressFocus, setAddressFocus] = useState(false);

      const [phone, setPhone] = useState("");
      const [validPhone, setValidPhone] = useState(false);
      const [phoneFocus, setPhoneFocus] = useState(false);

      const [success, setSuccess] = useState(false);
      const [errMsg, setErrMsg] = useState("");
      const [open, setOpen] = useState(false);

      useEffect(() => {
            userRef.current.focus();
      }, []);

      useEffect(() => {
            const result = user_regex.test(user);
            setValidUser(result);
      }, [user]);

      useEffect(() => {
            const result = email_regex.test(email);
            setValidEmail(result);
      }, [email]);

      useEffect(() => {
            const result = address_regex.test(address);
            setValidAddress(result);
      }, [address]);

      useEffect(() => {
            const result = phone_regex.test(phone);
            setValidPhone(result);
      }, [phone]);

      useEffect(() => {
            setErrMsg("");
      }, [user, address, phone, email]);

      const handleSubmit = (e) => {
            e.preventDefault();
            const v1 = user_regex.test(user);
            const v2 = address_regex.test(address);
            const v3 = email_regex.test(email);
            const v4 = phone_regex.test(phone);
            if (!v1 || !v2 || !v3 || !v4) {
                  setErrMsg("Invalid Entry");
                  return;
            }
            setSuccess(true);
            navigate("/");
      };

      const handleClose = () => {
            setOpen(false);
      };

      return (
            <>
                  {!success && (
                        <Paper
                              className="login"
                              sx={{
                                    padding: "2rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: "90%",
                                    margin: "2rem",
                              }}
                        >
                              <Typography
                                    variant="body1"
                                    ref={errRef}
                                    className={errMsg ? "errmsg" : "offscreen"}
                                    aria-live="assertLive"
                              >
                                    {errMsg}
                              </Typography>
                              <Typography variant="h3">Get in touch</Typography>
                              <form
                                    onSubmit={handleSubmit}
                                    className="loginForm"
                              >
                                    <Stack direction="column" spacing={2}>
                                          <TextField
                                                label="Username"
                                                type="text"
                                                id="username"
                                                ref={userRef}
                                                autoComplete="off"
                                                color={`${
                                                      validUser
                                                            ? "success"
                                                            : "error"
                                                }`}
                                                onChange={(e) =>
                                                      setUser(e.target.value)
                                                }
                                                required
                                                aria-invalid={
                                                      validUser
                                                            ? "false"
                                                            : "true"
                                                }
                                                aria-describedby="uidnote"
                                                onFocus={() =>
                                                      setUserFocus(true)
                                                }
                                                onBlur={() =>
                                                      setUserFocus(false)
                                                }
                                          />
                                          <Typography
                                                variant="body1"
                                                id="uidnote"
                                                className={
                                                      userFocus &&
                                                      user &&
                                                      !validUser
                                                            ? "instructions"
                                                            : "offscreen"
                                                }
                                          >
                                                <FaInfoCircle />
                                                Must begin with a letter. <br />
                                                Letters, Numbers, underscores,
                                                <br />
                                                and hyphens allowed
                                          </Typography>
                                    </Stack>

                                    <Stack direction="column" spacing={2}>
                                          <TextField
                                                label="Email"
                                                type="text"
                                                id="email"
                                                ref={userRef}
                                                autoComplete="off"
                                                color={`${
                                                      validEmail
                                                            ? "success"
                                                            : "error"
                                                }`}
                                                onChange={(e) =>
                                                      setEmail(e.target.value)
                                                }
                                                required
                                                aria-invalid={
                                                      validEmail
                                                            ? "false"
                                                            : "true"
                                                }
                                                aria-describedby="emailnote"
                                                onFocus={() =>
                                                      setEmailFocus(true)
                                                }
                                                onBlur={() =>
                                                      setEmailFocus(false)
                                                }
                                          />
                                          <Typography
                                                variant="body1"
                                                id="emailnote"
                                                className={
                                                      emailFocus &&
                                                      email &&
                                                      !validEmail
                                                            ? "instructions"
                                                            : "offscreen"
                                                }
                                          >
                                                <FaInfoCircle />
                                                Must contain an @ sign. <br />
                                                Letters, Numbers, underscores,
                                                <br />
                                                and hyphens allowed
                                          </Typography>
                                    </Stack>

                                    <Stack direction="column" spacing={2}>
                                          <TextField
                                                label="Address"
                                                type="text"
                                                color={`${
                                                      validAddress
                                                            ? "success"
                                                            : "error"
                                                }`}
                                                onChange={(e) =>
                                                      setAddress(e.target.value)
                                                }
                                                required
                                                aria-invalid={
                                                      validAddress
                                                            ? "false"
                                                            : "true"
                                                }
                                                aria-describedby="addressnote"
                                                onFocus={() =>
                                                      setAddressFocus(true)
                                                }
                                                onBlur={() =>
                                                      setAddressFocus(false)
                                                }
                                          />
                                          <Typography
                                                variant="body1"
                                                id="addressnote"
                                                className={
                                                      addressFocus &&
                                                      !validAddress
                                                            ? "instructions"
                                                            : "offscreen"
                                                }
                                          >
                                                <FaInfoCircle />
                                                Include your <br />
                                                country, state, city <br />
                                                street and house number
                                          </Typography>
                                    </Stack>

                                    <Stack direction="column" spacing={2}>
                                          <TextField
                                                label=" Phone"
                                                type="number"
                                                id="phone"
                                                color={`${
                                                      validPhone
                                                            ? "success"
                                                            : "error"
                                                }`}
                                                required
                                                onChange={(e) =>
                                                      setPhone(e.target.value)
                                                }
                                                aria-invalid={
                                                      validPhone && phoneFocus
                                                            ? "false"
                                                            : "true"
                                                }
                                                aria-describedby="phonenote"
                                                onFocus={() =>
                                                      setPhoneFocus(true)
                                                }
                                                onBlur={() =>
                                                      setPhoneFocus(false)
                                                }
                                          />
                                          <Typography
                                                variant="body1"
                                                id="phonenote"
                                                className={
                                                      !validPhone && phone
                                                            ? "instructions"
                                                            : "offscreen"
                                                }
                                          >
                                                <FaInfoCircle />
                                                Must contain at <br />
                                                least 10 digits
                                          </Typography>
                                    </Stack>
                                    <Box
                                          display="flex"
                                          width="100%"
                                          alignItems="center"
                                    >
                                          <Button
                                                variant="contained"
                                                type="submit"
                                                color="error"
                                                sx={{ width: "100%" }}
                                                disabled={
                                                      !validUser ||
                                                      !validAddress ||
                                                      !validPhone ||
                                                      !validEmail
                                                            ? true
                                                            : false
                                                }
                                          >
                                                Submit
                                          </Button>
                                    </Box>
                              </form>
                              <Snackbar
                                    open={open}
                                    onClose={handleClose}
                                    autoHideDuration={2000}
                              >
                                    <SnackbarAlert severity="success">
                                          Form sent successfully !
                                    </SnackbarAlert>
                              </Snackbar>
                        </Paper>
                  )}
            </>
      );
};

export default ContactForm;
