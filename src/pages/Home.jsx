import React, { useEffect } from "react";
import Wrapper from "../wrapper/Wrapper";
import Hero from "../components/UI/Hero";
import PopularMenu from "../components/UI/PopularMenu";
import AboutUs from "../components/UI/AboutUs";
import MenuPack from "../components/UI/MenuPack";
import NewsLetter from "../components/UI/NewsLetter";
import Download from "../components/UI/Download";

const Home = () => {
      return (
            <Wrapper title="Home">
                  <Hero />
                  <main>
                        <PopularMenu />
                        <AboutUs />
                        <MenuPack />
                        <NewsLetter />
                        <Download />
                  </main>
            </Wrapper>
      );
};

export default Home;
