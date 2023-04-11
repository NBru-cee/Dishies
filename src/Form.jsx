import React, { useState } from "react";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
      label: {
            color: "black",
      },
      selectedLabel: {
            color: "red",
      },
});

function MyForm() {
      const classes = useStyles();
      const [selectedValue, setSelectedValue] = useState("");

      const handleChange = (event) => {
            setSelectedValue(event.target.value);
      };

      return (
            <RadioGroup value={selectedValue} onChange={handleChange}>
                  <FormControlLabel
                        value="option1"
                        control={<Radio />}
                        label={
                              <span
                                    className={`${classes.label} ${
                                          selectedValue === "option1"
                                                ? classes.selectedLabel
                                                : ""
                                    }`}
                              >
                                    Option 1
                              </span>
                        }
                  />
                  <FormControlLabel
                        value="option2"
                        control={<Radio />}
                        label={
                              <span
                                    className={`${classes.label} ${
                                          selectedValue === "option2"
                                                ? classes.selectedLabel
                                                : ""
                                    }`}
                              >
                                    Option 2
                              </span>
                        }
                  />
                  <FormControlLabel
                        value="option3"
                        control={<Radio />}
                        label={
                              <span
                                    className={`${classes.label} ${
                                          selectedValue === "option3"
                                                ? classes.selectedLabel
                                                : ""
                                    }`}
                              >
                                    Option 3
                              </span>
                        }
                  />
            </RadioGroup>
      );
}
export default MyForm;
