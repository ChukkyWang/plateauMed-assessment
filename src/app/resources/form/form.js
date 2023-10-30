import style from "./form.module.css";
import React from "react";

export function Form({ children, className, ...rest }) {

  return (
      <form
        role="form"
        className={`${style.form} ${className}`}
        {...rest}
      >
        {children}
      </form>
  );
}
