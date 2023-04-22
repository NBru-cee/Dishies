import React, { useEffect } from "react";
import MenuTitle from "../components/menu-section/MenuTitle";
import Wrapper from "../wrapper/Wrapper";
import UserLogin from "../components/profile/UserLogin";
import "../styles/profile.css";

const Login = () => {
     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);

     return (
          <Wrapper title="Login">
               <MenuTitle title="Login Here" />
               <main className="App">
                    <UserLogin />
               </main>
          </Wrapper>
     );
};

export default Login;
