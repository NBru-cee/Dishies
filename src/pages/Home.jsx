import React, { useState, useEffect } from "react";
import Wrapper from "../wrapper/Wrapper";
import Hero from "../components/UI/Hero";

const Home = () => {
      useEffect(() => {
            window.scrollTo(0, 0);
      }, []);

      return (
            <Wrapper title="Home">
                  <Hero />
            </Wrapper>
      );
};

export default Home;
