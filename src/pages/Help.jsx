import React, { useState } from "react";
import {
      Typography,
      Box,
      Accordion,
      Paper,
      AccordionDetails,
      AccordionSummary,
} from "@mui/material";

const Help = () => {
      const [expanded, setExpanded] = useState(false);
      const handleChange = (isExpanded) => {
            setIsExpanded(isExpanded ? panel : false);
      };
      return (
            <Paper>
                  <Typography variant="h4" color="maroon" textAlign="center">
                        Welcome to the Dishies Help Center
                  </Typography>
                  <Box>
                        <Typography variant="body1">
                              At Dishies, we strive to provide you with the best
                              food delivery and restaurant services experience.
                              We understand that sometimes you may have
                              questions or encounter issues along the way. This
                              Help Center is designed to assist you in finding
                              answers to common queries and provide guidance on
                              using our platform effectively.
                        </Typography>
                        <Typography variant="h5" color="red" textAlign="center">
                              Frequently Asked Questions (FAQs)
                        </Typography>
                        <Box>
                              <Accordion
                                    expanded={expanded === "panel1"}
                                    onChange={(isExpanded) =>
                                          handleChange(isExpanded, "panel1")
                                    }
                              >
                                    <AccordionSummary
                                          id="panel1-header"
                                          aria-controls="panel1-content"
                                    >
                                          <Typography>
                                                How do I place an order?
                                          </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                          <Typography>
                                                To place an order, simply browse
                                                the available restaurants,
                                                select your desired items, and
                                                proceed to checkout. You can
                                                choose from delivery or pickup
                                                options based on your
                                                preference.
                                          </Typography>
                                    </AccordionDetails>
                              </Accordion>

                              <Accordion
                                    expanded={expanded === "panel2"}
                                    onChange={(isExpanded) =>
                                          handleChange(isExpanded, "panel2")
                                    }
                              >
                                    <AccordionSummary
                                          id="panel2-header"
                                          aria-controls="panel2-content"
                                    >
                                          <Typography>
                                                What are the available payment
                                                methods?
                                          </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                          <Typography>
                                                We accept various payment
                                                methods, including credit cards,
                                                debit cards, and online payment
                                                platforms. During the checkout
                                                process, you'll be able to
                                                select your preferred payment
                                                option.
                                          </Typography>
                                    </AccordionDetails>
                              </Accordion>

                              <Accordion
                                    expanded={expanded === "panel3"}
                                    onChange={(isExpanded) =>
                                          handleChange(isExpanded, "panel3")
                                    }
                              >
                                    <AccordionSummary
                                          id="panel3-header"
                                          aria-controls="panel3-content"
                                    >
                                          <Typography>
                                                What are the available payment
                                                methods?
                                          </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                          <Typography>
                                                We accept various payment
                                                methods, including credit cards,
                                                debit cards, and online payment
                                                platforms. During the checkout
                                                process, you'll be able to
                                                select your preferred payment
                                                option.
                                          </Typography>
                                    </AccordionDetails>
                              </Accordion>
                              <Accordion
                                    expanded={expanded === "panel2"}
                                    onChange={(isExpanded) =>
                                          handleChange(isExpanded, "panel2")
                                    }
                              >
                                    <AccordionSummary
                                          id="panel2-header"
                                          aria-controls="panel2-content"
                                    >
                                          <Typography>
                                                What are the available payment
                                                methods?
                                          </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                          <Typography>
                                                We accept various payment
                                                methods, including credit cards,
                                                debit cards, and online payment
                                                platforms. During the checkout
                                                process, you'll be able to
                                                select your preferred payment
                                                option.
                                          </Typography>
                                    </AccordionDetails>
                              </Accordion>
                              <Accordion
                                    expanded={expanded === "panel2"}
                                    onChange={(isExpanded) =>
                                          handleChange(isExpanded, "panel2")
                                    }
                              >
                                    <AccordionSummary
                                          id="panel2-header"
                                          aria-controls="panel2-content"
                                    >
                                          <Typography>
                                                What are the available payment
                                                methods?
                                          </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                          <Typography>
                                                We accept various payment
                                                methods, including credit cards,
                                                debit cards, and online payment
                                                platforms. During the checkout
                                                process, you'll be able to
                                                select your preferred payment
                                                option.
                                          </Typography>
                                    </AccordionDetails>
                              </Accordion>
                              <Accordion
                                    expanded={expanded === "panel2"}
                                    onChange={(isExpanded) =>
                                          handleChange(isExpanded, "panel2")
                                    }
                              >
                                    <AccordionSummary
                                          id="panel2-header"
                                          aria-controls="panel2-content"
                                    >
                                          <Typography>
                                                What are the available payment
                                                methods?
                                          </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                          <Typography>
                                                We accept various payment
                                                methods, including credit cards,
                                                debit cards, and online payment
                                                platforms. During the checkout
                                                process, you'll be able to
                                                select your preferred payment
                                                option.
                                          </Typography>
                                    </AccordionDetails>
                              </Accordion>
                        </Box>
                        {/* 



How can I track my order? Once your order is confirmed, you'll receive a confirmation email or SMS with a tracking link. You can click on the link to track the status of your delivery in real-time.

What if I need to modify or cancel my order? If you need to modify or cancel your order, please contact our customer support team as soon as possible. They will assist you in making the necessary changes or canceling the order if applicable.

What is the estimated delivery time? The estimated delivery time depends on various factors, including the distance between the restaurant and your location, current order volume, and traffic conditions. We provide an estimated delivery time range during the checkout process.

Getting Help
If you have any additional questions or need further assistance, our customer support team is ready to help. You can reach out to us through the following channels:

Email: support@dishies.com
Phone: +1-XXX-XXX-XXXX
Live Chat: Visit our website and click on the chat icon in the bottom right corner.
Our support team is available during [business hours], [days of the week]. We strive to respond promptly and provide the best possible solutions to your queries or concerns.

Tips and Recommendations
Explore the Dishies app or website to discover new restaurants, trending dishes, and special offers.
Leave a review and rating for the restaurants you've ordered from to help others make informed choices.
Sign up for our newsletter to receive updates on new restaurants, discounts, and promotions.
Thank you for choosing Dishies! We are here to enhance your food delivery and restaurant services experience. Enjoy your delicious meals! */}
                  </Box>
            </Paper>
      );
};

export default Help;
