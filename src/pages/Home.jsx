import React, { useState, useEffect } from "react";
import Wrapper from "../wrapper/Wrapper";
import Hero from "../components/UI/Hero";
import PopularMenu from "../components/UI/PopularMenu";
import AboutUs from "../components/UI/AboutUs";
import MenuPack from "../components/UI/MenuPack";

const Home = () => {
      useEffect(() => {
            window.scrollTo(0, 0);
      }, []);

      return (
            <Wrapper title="Home">
                  <main>
                        <Hero />
                        <PopularMenu />
                        <AboutUs />
                        <MenuPack />
                  </main>
            </Wrapper>
      );
};

export default Home;
