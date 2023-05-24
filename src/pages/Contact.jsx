import React, { useState, useEffect } from "react";
import ContactForm from "../components/contact/ContactForm";
import MenuTitle from "../components/menu-section/MenuTitle";
import Wrapper from "../wrapper/Wrapper";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const Contact = () => {
      useEffect(() => {
            window.scrollTo(0, 0);
      }, []);

      return (
            <Wrapper title="Contact">
                  <MenuTitle title="Contact us" />

                  <main style={{ padding: "2rem" }}>
                        <ContactForm />
                  </main>
            </Wrapper>
      );
};

export default Contact;
