import React from "react";
import Wrapper from "../wrapper/Wrapper";
import Welcome from "../components/about-section/Welcome";
import OurChefs from "../components/about-section/OurChefs";

const About = () => {
      return (
            <Wrapper title="About">
                  <main>
                        <Welcome />
                        <OurChefs />
                  </main>
            </Wrapper>
      );
};

export default About;
