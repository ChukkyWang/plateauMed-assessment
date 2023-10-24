import React from "react";
import style from "./footer.module.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className={style.footer}>
        <p>
          Implemented and developed by <a href="http://">Chukwuka Eze</a> as a Frontend
          Developer Assessment at PlateauMed Nigeria <br /> © {year}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
