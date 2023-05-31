import React from "react";
import Wrapper from "../wrapper/Wrapper";
import MenuTitle from "../components/menu-section/MenuTitle";
import CheckoutForm from "../components/cart/CheckoutForm.jsx";

const Checkout = () => {
      return (
            <Wrapper title="Checkout">
                  <MenuTitle title="Checkout" />
                  <CheckoutForm />
            </Wrapper>
      );
};

export default Checkout;
