import React, { useEffect } from "react";
import Wrapper from "../wrapper/Wrapper";
import MenuTitle from "../components/menu-section/MenuTitle";
import UserRegister from "../components/profile/userRegister";

const Register = () => {
     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);
     return (
          <Wrapper title="Register">
               <MenuTitle title="Register Here" />
               <main>
                    <UserRegister />
               </main>
          </Wrapper>
     );
};

export default Register;
