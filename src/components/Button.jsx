import React from "react";
import "../styles/Button.css";

function Button({ children, ...props }) {
  return <button className="button-styled" {...props}>{children}</button>;
}

export default Button;
