import React from "react";

const Wrapper = (props) => {
     document.title = `Dishies | ${props.title}`;
     return <div>{props.children}</div>;
};

export default Wrapper;
