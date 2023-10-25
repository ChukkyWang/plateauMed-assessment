import React from "react";
import style from "./table.module.css";

function Table({ children }) {
  return <table className={style.table}>{children}</table>;
}

export default Table;

// ● National ID number - required field
// ● Title - required can be either [Mr, Mrs, Miss, Dr, Prof]
// ● Name - required
// ● Surname - required
// ● Date of Birth - required - their age may not be less than 21
// ● Teacher Number - required
// ● Salary - optional
