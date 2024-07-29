import React, { useRef } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experience = () => {
  const skillRefs = useRef([]);

  const handleMouseMove = (e, id) => {
    const skill = skillRefs.current[id];
    const rect = skill.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    skill.style.transform = `translate(${x * 1}px, ${y * 1}px)`;
  };

  const handleMouseLeave = (id) => {
    const skill = skillRefs.current[id];
    skill.style.transform = `translate(0, 0)`;
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div
              key={id}
              className={styles.skill}
              ref={(el) => (skillRefs.current[id] = el)}
              onMouseMove={(e) => handleMouseMove(e, id)}
              onMouseLeave={() => handleMouseLeave(id)}
            >
              <div className={styles.skillImageContainer}>
                <img src={skill.imageSrc} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={historyItem.imageSrc}
                alt={`${historyItem.title} Logo`}
              />

              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
