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
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/portfolio-943ea.appspot.com/o/assets%2Fcontact%2FemailIcon.png?alt=media&token=df804a42-c3c1-4c0a-a6d4-761ace4cfc4c"
            }
            alt="Email icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/kunal-sikka-015192207/"
          className={styles.link}
        >
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/portfolio-943ea.appspot.com/o/assets%2Fcontact%2FlinkedinIcon.png?alt=media&token=f13b6167-64d2-460f-8834-e3829c0f4e7a"
            }
            alt="LinkedIn icon"
          />
        </a>
        <a href="https://www.github.com/kunal77689" className={styles.link}>
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/portfolio-943ea.appspot.com/o/assets%2Fcontact%2FgithubIcon.png?alt=media&token=d3d98557-212f-47ba-8f9b-88685b603f0c"
            }
            alt="Github icon"
          />
        </a>
      </div>
    </footer>
  );
};
