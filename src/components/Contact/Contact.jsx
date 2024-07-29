import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <p>Let's get in touch!</p>
      </div>
      <div className={styles.linksContainer}>
        <a href="mailto:ksikka@mun.ca" className={styles.link}>
          <img src={getImageUrl("history/gmail.png")} alt="Email icon" />
        </a>
        <a href="https://www.linkedin.com/myname" className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
        </a>
        <a href="https://www.github.com/kunal77689" className={styles.link}>
          <img src={getImageUrl("history/github.png")} alt="Github icon" />
        </a>
      </div>
    </footer>
  );
};
