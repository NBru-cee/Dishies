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
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <main>
                              <ContactForm />
                        </main>
                  </LocalizationProvider>
            </Wrapper>
      );
};

export default Contact;
