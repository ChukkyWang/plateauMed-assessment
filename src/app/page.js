"use client";

import styles from "./page.module.css";
import General from "./resources/templates/general.template";
import Teachers from "./teachers";

export default function Home() {
  return (
    <main className={styles.main}>
      <General>
        <Teachers />
      </General>
    </main>
  );
}
