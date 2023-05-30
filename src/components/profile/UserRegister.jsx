import React, { useRef, useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import "../../styles/profile.css";
import {
      Typography,
      TextField,
      Box,
      Button,
      Paper,
      Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import { authActions } from "../../app/slices/authSlice";
import { useDispatch } from "react-redux";

const user_regex = /^[A-z][A-z0-9-_]{3,23}$/;
const pwd_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const email_regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const userRegister = () => {
      const userRef = useRef();
      const errRef = useRef();
      const [user, setUser] = useState("");
      const [validName, setValidName] = useState(false);
      const [userFocus, setUserFocus] = useState(false);

      const [email, setEmail] = useState("");
      const [validEmail, setValidEmail] = useState(false);
      const [emailFocus, setEmailFocus] = useState(false);

      const [pwd, setPwd] = useState("");
      const [validPwd, setValidPwd] = useState(false);
      const [pwdFocus, setPwdFocus] = useState(false);

      const [matchPwd, setMatchPwd] = useState("");
      const [validMatch, setValidMatch] = useState(false);
      const [matchFocus, setMatchFocus] = useState(false);

      const [success, setSuccess] = useState(false);
      const [errMsg, setErrMsg] = useState("");
      const dispatch = useDispatch();

      useEffect(() => {
            userRef.current.focus();
      }, []);

      useEffect(() => {
            const result = user_regex.test(user);
            setValidName(result);
      }, [user]);

      useEffect(() => {
            const result = email_regex.test(email);
            setValidEmail(result);
      }, [email]);

      useEffect(() => {
            const result = pwd_regex.test(pwd);
            setValidPwd(result);
            const match = pwd === matchPwd;
            setValidMatch(match);
      }, [pwd, matchPwd]);

      useEffect(() => {
            setErrMsg("");
      }, [user, pwd, matchPwd, email]);

      const handleSubmit = (e) => {
            e.preventDefault();
            const v1 = user_regex.test(user);
            const v2 = pwd_regex.test(pwd);
            const v3 = email_regex.test(email);
            if (!v1 || !v2 || !v3) {
                  setErrMsg("Invalid Entry");
                  return;
            }
            setSuccess(true);
            dispatch(authActions.login());
      };

      return (
            <>
                  {success ? (
                        <Paper
                              style={{
                                    background: "#99929266",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "whitesmoke",
                                    padding: "2rem",
                                    margin: "2rem",
                                    minWidth: "100%",
                                    minHeight: "100vh",
                              }}
                        >
                              <Typography variant="h1" color="goldenrod">
                                    Success
                              </Typography>
                              <Typography variant="h4" color="green">
                                    Your account have been successfully created!
                              </Typography>
                              <Link to="/" className="signupButton">
                                    Explore Dishies
                              </Link>
                        </Paper>
                  ) : (
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
                              <Typography variant="h3">
                                    Register Here
                              </Typography>
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
                                                      validName
                                                            ? "success"
                                                            : "error"
                                                }`}
                                                onChange={(e) =>
                                                      setUser(e.target.value)
                                                }
                                                required
                                                aria-invalid={
                                                      validName
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
                                                      !validName
                                                            ? "instructions"
                                                            : "offscreen"
                                                }
                                          >
                                                <FaInfoCircle />
                                                4 to 24 characters. <br />
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
                                                label="Password"
                                                type="password"
                                                color={`${
                                                      validPwd
                                                            ? "success"
                                                            : "error"
                                                }`}
                                                onChange={(e) =>
                                                      setPwd(e.target.value)
                                                }
                                                required
                                                aria-invalid={
                                                      validPwd
                                                            ? "false"
                                                            : "true"
                                                }
                                                aria-describedby="pwdnote"
                                                onFocus={() =>
                                                      setPwdFocus(true)
                                                }
                                                onBlur={() =>
                                                      setPwdFocus(false)
                                                }
                                          />
                                          <Typography
                                                variant="body1"
                                                id="pwdnote"
                                                className={
                                                      pwdFocus && !validPwd
                                                            ? "instructions"
                                                            : "offscreen"
                                                }
                                          >
                                                <FaInfoCircle />
                                                8 to 24 characters. <br />
                                                Must include <br />
                                                uppercase and <br />
                                                lowercase letters,
                                                <br />
                                                a number and a <br /> special
                                                character. <br /> Allowed
                                                special <br />
                                                characters:
                                                <span aria-label="exclamation mark">
                                                      !
                                                </span>
                                                <span aria-label="at symbol">
                                                      @
                                                </span>
                                                <span aria-label=" hashtag">
                                                      #
                                                </span>
                                                <span aria-label=" dollar sign">
                                                      $
                                                </span>
                                                <span aria-label=" percent">
                                                      %
                                                </span>
                                          </Typography>
                                    </Stack>

                                    <Stack direction="column" spacing={2}>
                                          <TextField
                                                label="Confirm Password"
                                                type="password"
                                                id="confirm_pwd"
                                                color={`${
                                                      validMatch
                                                            ? "success"
                                                            : "error"
                                                }`}
                                                required
                                                onChange={(e) =>
                                                      setMatchPwd(
                                                            e.target.value
                                                      )
                                                }
                                                aria-invalid={
                                                      validMatch
                                                            ? "false"
                                                            : "true"
                                                }
                                                aria-describedby="confirmnote"
                                                onFocus={() =>
                                                      setMatchFocus(true)
                                                }
                                                onBlur={() =>
                                                      setMatchFocus(false)
                                                }
                                          />
                                          <Typography
                                                variant="body1"
                                                id="confirmnote"
                                                className={
                                                      matchFocus && !validMatch
                                                            ? "instructions"
                                                            : "offscreen"
                                                }
                                          >
                                                <FaInfoCircle />
                                                Must match the first <br />
                                                password input field
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
                                                      !validName ||
                                                      !validPwd ||
                                                      !validMatch
                                                            ? true
                                                            : false
                                                }
                                          >
                                                Sign Up
                                          </Button>
                                    </Box>
                              </form>
                              <Box mt="1rem">
                                    <Typography
                                          variant="body2"
                                          className="line"
                                    >
                                          Already have an account?
                                          <Link to="/login">Login here</Link>
                                    </Typography>
                              </Box>
                        </Paper>
                  )}
            </>
      );
};

export default userRegister;
