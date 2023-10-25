import React from "react";
import style from "./table.module.css";

function Table({ children }) {
  return <table className={style.table}>{children}</table>;
}

export default Table;

