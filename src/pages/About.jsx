import React, { useEffect } from "react";
import Wrapper from "../wrapper/Wrapper";
import Welcome from "../components/about-section/Welcome";
import OurChefs from "../components/about-section/OurChefs";
import Testimonials from "../components/about-section/Testimonials";
import OurKitchen from "../components/about-section/OurKitchen";

const About = () => {
      useEffect(() => {
            window.scrollTo(0, 0);
      }, []);

      return (
            <Wrapper title="About">
                  <main>
                        <Welcome />
                        <OurChefs />
                        <OurKitchen />
                        <Testimonials />
                  </main>
            </Wrapper>
      );
};

export default About;
