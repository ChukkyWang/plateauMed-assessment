import style from "./form.module.css";

export function Form({ children, className, ...rest }) {
  return (
    <form className={`${style.form} ${className}`} {...rest}>
      {children}
    </form>
  );
}
