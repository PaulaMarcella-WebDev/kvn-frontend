import { useState } from "react";
import styles from "@/styles/Mobilecranes.module.scss";
import mobilecranes from "@/data/mobilecranes";

const Mobilecranes = () => {
  const [isOpen, setIsOpen] = useState({});
  const toggle = (title) => {
    setIsOpen({ [title]: !isOpen[title] });
  };
  return (
    <div className={styles.mobilecranes}>
      {mobilecranes &&
        mobilecranes.map((crane) => {
          const { title, description } = crane;
          return (
            <div className={styles.crane} key={title}>
              <h4 className={styles.title} onClick={() => toggle(title)}>
                {title}
              </h4>
              {isOpen[title] && (
                <div className={styles.dropdown}>
                  <p className={styles.description}>{description}</p>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Mobilecranes;
