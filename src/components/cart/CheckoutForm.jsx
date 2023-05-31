import React, { useState } from "react";
import {
      Typography,
      Box,
      InputBase,
      FormLabel,
      Button,
      Paper,
} from "@mui/material";

const CheckoutForm = () => {
      const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Submitted");
      };
      const [inputValue, setInputValue] = useState("");

      const handleChange = (e) => {
            setInputValue(e.target.value);
      };

      return (
            <>
                  <Paper
                        elevation={6}
                        sx={{
                              margin: "2rem",
                              padding: "2rem",
                              minWidth: "100%",
                              minHeight: "100vh",
                        }}
                  >
                        <Typography
                              variant="h4"
                              color="error"
                              textAlign="center"
                        >
                              Payment
                        </Typography>
                        <form onSubmit={handleSubmit}>
                              <InputBase
                                    value={country}
                                    placeholder="Country"
                                    onChange={handleChange}
                              />
                        </form>
                  </Paper>
            </>
      );
};

export default CheckoutForm;
