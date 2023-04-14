import burger from "../imgs/product-imgs/burger-8.png";
import cake from "../imgs/product-imgs/cake-6.jpg";
import chicken from "../imgs/product-imgs/chicken-3.jpg";
import dish from "../imgs/product-imgs/dish-5.png";
import pizza from "../imgs/product-imgs/pizza-12.png";
import fries from "../imgs/product-imgs/fries-10.jpg";
import bread from "../imgs/product-imgs/loaf-bread-3.jpg";
import coffee from "../imgs/product-imgs/coffee-3.jpg";

import {
      Ri24HoursLine,
      RiSecurePaymentLine,
      RiMoneyDollarCircleLine,
} from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import service01 from "../../assets/imgs/common-imgs/service-02.png";
import service02 from "../../assets/imgs/common-imgs/service-03.png";

export const links = [
      { id: 1, path: "/home", title: "Home" },
      { id: 2, path: "/about", title: "About" },
      { id: 3, path: "/foods", title: "Menu" },
      { id: 4, path: "/cart", title: "Cart" },
      { id: 5, path: "/contact", title: "Contact" },
];

export const infoLinks = [
      { id: 1, path: "#", title: "Terms of Service" },
      { id: 2, path: "#", title: "Returns & Refunds" },
      { id: 3, path: "#", title: "Privacy Policy" },
      { id: 4, path: "#", title: "FAQ" },
      { id: 5, path: "#", title: "Payment Methods" },
];

export const popularMenu = [
      { id: 13, title: "Cheese Burger", price: "27.00", image01: burger },
      { id: 4, title: "French Cake", price: "43.5", image01: cake },
      { id: 3, title: "Shashlik Chicken", price: "50.5", image01: chicken },
      { id: 6, title: "Chicken Dish", price: "64.25", image01: dish },
      { id: 10, title: "Pizza With Mushroom", price: "49.00", image01: pizza },
      { id: 20, title: "French Fries", price: "40.0", image01: fries },
      { id: 7, title: "Loaf Bread", price: "13.0", image01: bread },
      { id: 31, title: "Rwandan  Coffee", price: "30.0", image01: coffee },
];

export const services = [
      {
            id: 1,
            icon: <Ri24HoursLine />,
            content: " We are 24/7 available to your service as that is what we are here for. Anytime you need something just call and sit back while everything is being done for you.",
      },
      {
            id: 2,
            icon: <FaTruck />,
            content: " We also offer delivery services for customers. This includes our fast motorbike couriers and also professional truck drivers for those with much products that might require shipping.",
      },
      {
            id: 3,
            icon: <RiMoneyDollarCircleLine />,
            content: " For people not satisfied by our services, we have also the refund and return services for them to get back their money or request for another product of the same type.",
      },
      {
            id: 4,
            icon: <RiSecurePaymentLine />,
            content: " All payment methods are secure with our services because we have insurance from different companies and our tech staff are very experienced with money transfer security.",
      },
];

export const extraServices = [
      {
            id: 1,
            image: service01,
            content: " We are not just a fast food restaurant for delivering but we also provide restaurant services. So for those who want to grap dinner you're all welcome.",
      },
      {
            id: 2,
            image: service02,
            content: " Our staff is very experienced when it becomes to making ravishing dishes that can make your mouth salivary. Services are so quick and special so don't hesitate to come.",
      },
];
