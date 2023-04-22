import React, { useRef, useState, useEffect } from "react";
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import "../../styles/profile.css";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { authActions } from "../../app/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

const user_regex = /^[A-z][A-z0-9-_]{3,23}$/;
const pwd_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const UserLogin = () => {
     
     const userRef = useRef();
     const errRef = useRef();
     const [user, setUser] = useState("");
     const [validName, setValidName] = useState(false);
     const [userFocus, setUserFocus] = useState(false);
     const [pwd, setPwd] = useState("");
     const [validPwd, setValidPwd] = useState(false);
     const [pwdFocus, setPwdFocus] = useState(false);
     const [matchPwd, setMatchPwd] = useState("");
     const [validMatch, setValidMatch] = useState(false);
     const [matchFocus, setMatchFocus] = useState(false);
     const [errMsg, setErrMsg] = useState("");
     const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
     const dispatch = useDispatch();

     useEffect(() => {
          userRef.current.focus();
     }, []);

     useEffect(() => {
          const result = user_regex.test(user);
          console.log(result);
          console.log(user);
          setValidName(result);
     }, [user]);

     useEffect(() => {
          const result = pwd_regex.test(pwd);
          console.log(result);
          console.log(pwd);
          setValidPwd(result);
          const match = pwd === matchPwd;
          setValidMatch(match);
     }, [pwd, matchPwd]);

     useEffect(() => {
          setErrMsg("");
     }, [user, pwd, matchPwd]);

     const handleSubmit = (e) => {
          e.preventDefault();
          const v1 = user_regex.test(user);
          const v2 = pwd_regex.test(pwd);
          if (!v1 || !v2) {
               setErrMsg("Invalid Entry");
               return;
          }
          setSuccess(true);
          dispatch(authActions.login());
     };

     return (
          <>
               {isLoggedIn ? (
                    <article
                         style={{
                              background: "#99929266",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "whitesmoke",
                         }}
                    >
                         <h1>Success</h1>
                         <Typography
                              variant="h5"
                              color="darksmoke"
                              mt={2}
                              textAlign="center"
                         >
                              <Link to="/home">Sign in</Link>
                         </Typography>
                    </article>
               ) : (
                    <article className="login">
                         <p
                              ref={errRef}
                              className={errMsg ? "errmsg" : "offscreen"}
                              aria-live="assertLive"
                         >
                              {errMsg}
                         </p>
                         <h1>Login Here</h1>
                         <form onSubmit={handleSubmit}>
                              <label htmlFor="username">
                                   Username:
                                   <span
                                        className={validName ? "valid" : "hide"}
                                   >
                                        <FaCheck />
                                   </span>
                                   <span
                                        className={
                                             validName || !user
                                                  ? "hide"
                                                  : "invalid"
                                        }
                                   >
                                        <FaTimes />
                                   </span>
                              </label>
                              <input
                                   type="text"
                                   id="username"
                                   ref={userRef}
                                   autoComplete="off"
                                   onChange={(e) => setUser(e.target.value)}
                                   required
                                   aria-invalid={validName ? "false" : "true"}
                                   aria-describedby="uidnote"
                                   onFocus={() => setUserFocus(true)}
                                   onBlur={() => setUserFocus(false)}
                              />
                              <p
                                   id="uidnote"
                                   className={
                                        userFocus && user && !validName
                                             ? "instructions"
                                             : "offscreen"
                                   }
                              >
                                   <FaInfoCircle />
                                   4 to 24 characters. <br />
                                   Must begin with a letter. <br />
                                   Letters, Numbers, underscores, and hyphens
                                   allowed
                              </p>

                              <label htmlFor="password">
                                   Password:
                                   <span
                                        className={validPwd ? "valid" : "hide"}
                                   >
                                        <FaCheck />
                                   </span>
                                   <span
                                        className={
                                             validPwd || !pwd
                                                  ? "hide"
                                                  : "invalid"
                                        }
                                   >
                                        <FaTimes />
                                   </span>
                              </label>
                              <input
                                   type="password"
                                   id="password"
                                   onChange={(e) => setPwd(e.target.value)}
                                   required
                                   aria-invalid={validPwd ? "false" : "true"}
                                   aria-describedby="pwdnote"
                                   onFocus={() => setPwdFocus(true)}
                                   onBlur={() => setPwdFocus(false)}
                              />
                              <p
                                   id="pwdnote"
                                   className={
                                        pwdFocus && !validPwd
                                             ? "instructions"
                                             : "offscreen"
                                   }
                              >
                                   <FaInfoCircle />
                                   8 to 24 characters. <br />
                                   Must include uppercase and lowercase letters,
                                   an number and a special character. <br />
                                   Allowed special characters:
                                   <span aria-label="exclamation mark">!</span>
                                   <span aria-label="at symbol">@</span>
                                   <span aria-label=" hashtag">#</span>
                                   <span aria-label=" dollar sign">$</span>
                                   <span aria-label=" percent">%</span>
                              </p>

                              <label htmlFor="confirm_pwd">
                                   Confirm Password:
                                   <span
                                        className={
                                             validMatch && matchPwd
                                                  ? "valid"
                                                  : "hide"
                                        }
                                   >
                                        <FaCheck />
                                   </span>
                                   <span
                                        className={
                                             validMatch || !matchPwd
                                                  ? "hide"
                                                  : "invalid"
                                        }
                                   >
                                        <FaTimes />
                                   </span>
                              </label>
                              <input
                                   type="password"
                                   id="confirm_pwd"
                                   required
                                   onChange={(e) => setMatchPwd(e.target.value)}
                                   aria-invalid={validMatch ? "false" : "true"}
                                   aria-describedby="confirmnote"
                                   onFocus={() => setMatchFocus(true)}
                                   onBlur={() => setMatchFocus(false)}
                              />
                              <p
                                   id="confirmnote"
                                   className={
                                        matchFocus && !validMatch
                                             ? "instructions"
                                             : "offscreen"
                                   }
                              >
                                   <FaInfoCircle />
                                   Must match the first password input field
                              </p>
                              <Button
                                   variant="contained"
                                   type="submit"
                                   sx={{
                                        mt: "2rem",
                                        fontSize: "inherit",
                                   }}
                                   color="error"
                                   disabled={
                                        !validName || !validPwd || !validMatch
                                             ? true
                                             : false
                                   }
                              >
                                   Sign Up
                              </Button>
                         </form>
                         <p>
                              Already have an account?
                              <span className="line">
                                   <Link to="/register">Sign In</Link>
                              </span>
                         </p>
                    </article>
               )}
          </>
     );
};

export default UserLogin;
