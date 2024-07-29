import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kunal</h1>
        <p className={styles.description}>
          I'm a full-stack developer with almost 2 years of experience.
        </p>
      </div>
      <img
        src={getImageUrl("history/kunal-modified.png")}
        alt="My image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
