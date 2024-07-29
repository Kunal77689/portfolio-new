import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Education & Certifications</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("history/output-onlinegiftools.gif")}
          alt="coding"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Memorial University</h3> <br /> <br></br>
              <p>
                Bachelor of Science in Computer Science 2020-2024<br></br>
                Dean’s List award holder : Year 2020-21. <br></br>
                Data structures and Algorithms, Networking, OS, Databases.
                <br></br>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Amazon Web Services</h3> <br /> <br></br>
              <p>
                Completed AWS Cloud practitioner<br></br> Worked with AWS
                services like EC2, S3, RDS, ELB, API Gateway, VPC, Lambda,
                Cloudfront .
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
