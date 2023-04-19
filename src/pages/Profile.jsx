import React from "react";
import Wrapper from "../wrapper/Wrapper";
import MenuTitle from "../components/menu-section/MenuTitle";

const Profile = () => {
     return (
          <Wrapper title="Profile">
               <MenuTitle title="Your profile" />
               <main>
                    <h2
                         style={{
                              color: "maroon",
                              textAlign: "center",
                              fontSize: "1.4rem",
                         }}
                    >
                         No Profile yet!
                    </h2>
               </main>
          </Wrapper>
     );
};

export default Profile;
