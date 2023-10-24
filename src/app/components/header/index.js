"use client"

import React from "react";
import style from "./header.module.css";
import Button from "../button";

function Header() {
  return (
    <header>
      <div className={style.header}>
        <div className={style.logo}>
          <h3 className={style.logo_h3}>PlateauMed</h3>
          <p className={style.logo_p}>Assessment</p>
        </div>
        <Button onClick={() => alert("clicked")} className={style.button}>
          Switch Roles
        </Button>
      </div>
    </header>
  );
}

export default Header;
