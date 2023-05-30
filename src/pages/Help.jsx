import React, { useState } from "react";
import {
      Typography,
      Box,
      Accordion,
      Paper,
      AccordionDetails,
      AccordionSummary,
} from "@mui/material";
import Wrapper from "../wrapper/Wrapper";
import MenuTitle from "../components/menu-section/MenuTitle";

const Help = () => {
      const [expanded, setExpanded] = useState(false);
      const handleChange = (isExpanded, panel) => {
            setExpanded(isExpanded ? panel : false);
      };
      return (
            <Wrapper title="Help">
                  <MenuTitle title="Help Center" />
                  <main>
                        <Paper
                              elevation={4}
                              sx={{ margin: "2rem", padding: "2rem" }}
                        >
                              <Typography
                                    variant="h4"
                                    color="maroon"
                                    textAlign="center"
                                    margin="2rem 0"
                              >
                                    Welcome to the Dishies Help Center
                              </Typography>
                              <Box>
                                    <Typography variant="body1">
                                          At Dishies, we strive to provide you
                                          with the best food delivery and
                                          restaurant services experience. We
                                          understand that sometimes you may have
                                          questions or encounter issues along
                                          the way. This Help Center is designed
                                          to assist you in finding answers to
                                          common queries and provide guidance on
                                          using our platform effectively.
                                    </Typography>
                                    <Typography
                                          variant="h5"
                                          color="red"
                                          textAlign="center"
                                    >
                                          Frequently Asked Questions (FAQs)
                                    </Typography>
                                    <Box
                                          margin="3rem 0"
                                          display="flex"
                                          alignItems="center"
                                          flexDirection="column"
                                    >
                                          <Accordion
                                                expanded={expanded === "panel1"}
                                                onChange={(isExpanded) =>
                                                      handleChange(
                                                            isExpanded,
                                                            "panel1"
                                                      )
                                                }
                                          >
                                                <AccordionSummary
                                                      id="panel1-header"
                                                      aria-controls="panel1-content"
                                                >
                                                      <Typography
                                                            variant="h6"
                                                            color="maroon"
                                                            textAlign="center"
                                                      >
                                                            How do I place an
                                                            order?
                                                      </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                      <Typography>
                                                            Browse through the
                                                            list of available
                                                            restaurants in your
                                                            area. Select a
                                                            restaurant and
                                                            explore their menu.
                                                            Add your desired
                                                            items to the cart.
                                                            Review your order
                                                            and proceed to
                                                            checkout. Provide
                                                            the necessary
                                                            delivery or pickup
                                                            details. Choose your
                                                            preferred payment
                                                            method and complete
                                                            the order.
                                                      </Typography>
                                                </AccordionDetails>
                                          </Accordion>

                                          <Accordion
                                                expanded={expanded === "panel2"}
                                                onChange={(isExpanded) =>
                                                      handleChange(
                                                            isExpanded,
                                                            "panel2"
                                                      )
                                                }
                                          >
                                                <AccordionSummary
                                                      id="panel2-header"
                                                      aria-controls="panel2-content"
                                                >
                                                      <Typography
                                                            variant="h6"
                                                            color="maroon"
                                                            textAlign="center"
                                                      >
                                                            What are the
                                                            available payment
                                                            methods?
                                                      </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                      <Typography>
                                                            We accept various
                                                            payment methods,
                                                            including credit
                                                            cards, debit cards,
                                                            and online payment
                                                            platforms. During
                                                            the checkout
                                                            process, you'll be
                                                            able to select your
                                                            preferred payment
                                                            option.
                                                      </Typography>
                                                </AccordionDetails>
                                          </Accordion>

                                          <Accordion
                                                expanded={expanded === "panel3"}
                                                onChange={(isExpanded) =>
                                                      handleChange(
                                                            isExpanded,
                                                            "panel3"
                                                      )
                                                }
                                          >
                                                <AccordionSummary
                                                      id="panel3-header"
                                                      aria-controls="panel3-content"
                                                >
                                                      <Typography
                                                            variant="h6"
                                                            color="maroon"
                                                            textAlign="center"
                                                      >
                                                            How can I track my
                                                            order?
                                                      </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                      <Typography>
                                                            Once your order is
                                                            confirmed, you'll
                                                            receive a
                                                            confirmation email
                                                            or SMS with a
                                                            tracking link. You
                                                            can click on the
                                                            link to track the
                                                            status of your
                                                            delivery in
                                                            real-time.
                                                      </Typography>
                                                </AccordionDetails>
                                          </Accordion>
                                          <Accordion
                                                expanded={expanded === "panel4"}
                                                onChange={(isExpanded) =>
                                                      handleChange(
                                                            isExpanded,
                                                            "panel4"
                                                      )
                                                }
                                          >
                                                <AccordionSummary
                                                      id="panel4-header"
                                                      aria-controls="panel4-content"
                                                >
                                                      <Typography
                                                            variant="h6"
                                                            color="maroon"
                                                            textAlign="center"
                                                      >
                                                            What if I need to
                                                            modify or cancel my
                                                            order?
                                                      </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                      <Typography>
                                                            If you need to
                                                            modify or cancel
                                                            your order, please
                                                            contact our customer
                                                            support team as soon
                                                            as possible. They
                                                            will assist you in
                                                            making the necessary
                                                            changes or canceling
                                                            the order if
                                                            applicable.
                                                      </Typography>
                                                </AccordionDetails>
                                          </Accordion>
                                          <Accordion
                                                expanded={expanded === "panel2"}
                                                onChange={(isExpanded) =>
                                                      handleChange(
                                                            isExpanded,
                                                            "panel2"
                                                      )
                                                }
                                          >
                                                <AccordionSummary
                                                      id="panel2-header"
                                                      aria-controls="panel2-content"
                                                >
                                                      <Typography
                                                            variant="h6"
                                                            color="maroon"
                                                            textAlign="center"
                                                      >
                                                            What is the
                                                            estimated delivery
                                                            time?
                                                      </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                      <Typography>
                                                            The estimated
                                                            delivery time
                                                            depends on various
                                                            factors, including
                                                            the distance between
                                                            the restaurant and
                                                            your location,
                                                            current order
                                                            volume, and traffic
                                                            conditions. We
                                                            provide an estimated
                                                            delivery time range
                                                            during the checkout
                                                            process.
                                                      </Typography>
                                                </AccordionDetails>
                                          </Accordion>
                                          <Accordion
                                                expanded={expanded === "panel2"}
                                                onChange={(isExpanded) =>
                                                      handleChange(
                                                            isExpanded,
                                                            "panel2"
                                                      )
                                                }
                                          >
                                                <AccordionSummary
                                                      id="panel2-header"
                                                      aria-controls="panel2-content"
                                                >
                                                      <Typography
                                                            variant="h6"
                                                            color="maroon"
                                                            textAlign="center"
                                                      >
                                                            Getting Help
                                                      </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                      <Typography>
                                                            If you have any
                                                            additional questions
                                                            or need further
                                                            assistance, our
                                                            customer support
                                                            team is ready to
                                                            help. You can reach
                                                            out to us through
                                                            the following
                                                            channels:
                                                      </Typography>
                                                </AccordionDetails>
                                          </Accordion>
                                          <Accordion
                                                expanded={expanded === "panel2"}
                                                onChange={(isExpanded) =>
                                                      handleChange(
                                                            isExpanded,
                                                            "panel2"
                                                      )
                                                }
                                          >
                                                <AccordionSummary
                                                      id="panel2-header"
                                                      aria-controls="panel2-content"
                                                >
                                                      <Typography
                                                            variant="h6"
                                                            color="maroon"
                                                            textAlign="center"
                                                      >
                                                            For more support:
                                                      </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                      <Typography>
                                                            Email:
                                                            support@dishies.com
                                                      </Typography>
                                                      <Typography>
                                                            Phone:
                                                            +1-XXX-XXX-XXXX Live
                                                      </Typography>
                                                      <Typography>
                                                            Chat: Visit our
                                                            website and click on
                                                            the chat icon in the
                                                            bottom right corner.
                                                            Our support team is
                                                            available during
                                                            [business hours],
                                                            [days of the week].
                                                            We strive to respond
                                                            promptly and provide
                                                            the best possible
                                                            solutions to your
                                                            queries or concerns.
                                                      </Typography>
                                                </AccordionDetails>
                                          </Accordion>
                                          <Accordion
                                                expanded={expanded === "panel2"}
                                                onChange={(isExpanded) =>
                                                      handleChange(
                                                            isExpanded,
                                                            "panel2"
                                                      )
                                                }
                                          >
                                                <AccordionSummary
                                                      id="panel2-header"
                                                      aria-controls="panel2-content"
                                                >
                                                      <Typography
                                                            variant="h6"
                                                            color="maroon"
                                                            textAlign="center"
                                                      >
                                                            Tips and
                                                            Recommendations
                                                      </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                      <Typography>
                                                            I Explore the
                                                            Dishies app or
                                                            website to discover
                                                            new restaurants,
                                                            trending dishes, and
                                                            special offers.
                                                            Leave a review and
                                                            rating for the
                                                            restaurants you've
                                                            ordered from to help
                                                            others make informed
                                                            choices. Sign up for
                                                            our newsletter to
                                                            receive updates on
                                                            new restaurants,
                                                            discounts, and
                                                            promotions.
                                                      </Typography>
                                                </AccordionDetails>
                                          </Accordion>
                                    </Box>
                                    <Typography variant="h6">
                                          Thank you for choosing Dishies! We are
                                          here to enhance your food delivery and
                                          restaurant services experience.
                                    </Typography>
                                    <Typography
                                          variant="h6"
                                          textAlign="center"
                                          color="green"
                                    >
                                          Enjoy your delicious meals!
                                    </Typography>
                              </Box>
                        </Paper>
                  </main>
            </Wrapper>
      );
};

export default Help;
