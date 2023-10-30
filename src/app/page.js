"use client";

import React, { useContext } from "react";
import styles from "./page.module.css";
import General from "./resources/templates/general.template";
import Teachers from "./users/teachers";
import { AppContext } from "./utils/context/AppContext";
import { ENUMS } from "./utils/enums";
import Students from "./users/students";

export default function Home() {
  const { class_type } = useContext(AppContext);
  return (
    <main className={styles.main}>
      <General>
        {class_type === ENUMS.CLASS.STUDENT && <Students />}
        {class_type === ENUMS.CLASS.TEACHER && <Teachers />}
      </General>
    </main>
  );
}
