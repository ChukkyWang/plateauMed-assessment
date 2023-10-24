import React from "react";
import style from "./button.module.css";

function Button({ className, children, ...rest }) {
  return (
    <button className={`${className} ${style.button}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
