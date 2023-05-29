import React, { useEffect } from "react";
import Wrapper from "../wrapper/Wrapper";
import Hero from "../components/UI/Hero";
import PopularMenu from "../components/UI/PopularMenu";
import AboutUs from "../components/UI/AboutUs";
import MenuPack from "../components/UI/MenuPack";
import NewsLetter from "../components/UI/NewsLetter";
import Download from "../components/UI/Download";
import { useDispatch } from "react-redux";
import { cartActions } from "../app/slices/cartSlice";
import axios from "axios";

const Home = () => {
      const dispatch = useDispatch();
      const getProducts = async () => {
            const products = await axios.get(
                  "http://localhost:1337/api/products?populate=image"
            );
            const itemsJson = await products.json();
            dispatch(cartActions.setProducts(itemsJson.data));
      };
      useEffect(() => {
            getProducts();
      }, []);

      return (
            <Wrapper title="Home">
                  <Hero />
                  <main>
                        <PopularMenu products={products} />
                        <AboutUs />
                        <MenuPack />
                        <NewsLetter />
                        <Download />
                  </main>
            </Wrapper>
      );
};

export default Home;
