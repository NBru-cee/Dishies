import React, { useState, useEffect } from "react";
import Wrapper from "../wrapper/Wrapper";
import { products } from "../assets/data/products";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../app/slices/cartSlice";
import MenuTitle from "../components/menu-section/MenuTitle";
import MainMenuItem from "../components/menu-section/MainMenuItem";
import RelatedProducts from "../components/menu-section/RelatedProducts";

const MenuItem = () => {
      const { id } = useParams();
      const product = products.find((product) => product.id === id);
      const dispatch = useDispatch();
      const addProduct = () => {
            dispatch(
                  cartActions.addProduct({
                        id,
                        title,
                        price,
                        image01,
                  })
            );
      };
      const { title, price, image01, category, desc, delivers, purchases } =
            product;
      const [prevImage, setPrevImage] = useState(product.image01);
      const relatedProducts = products.filter(
            (product) => category === product.category
      );
      useEffect(() => {
            setPrevImage(product.image01);
      }, [product]);

      useEffect(() => {
            window.scrollTo(0, 0);
      }, [product.id]);
      return (
            <Wrapper title="Menu Item">
                  <MenuTitle title={title} />
                  <main>
                        <MainMenuItem
                              product={product}
                              prevImage={prevImage}
                              setPrevImage={setPrevImage}
                              addProduct={addProduct}
                        />
                        <RelatedProducts relatedProducts={relatedProducts} />
                  </main>
            </Wrapper>
      );
};

export default MenuItem;
