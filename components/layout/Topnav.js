import React from "react";
import styles from "../../styles/Topnav.module.scss";

const Topnav = () => {
  return (
    <div className={styles.topnav}>
      <p>Benzstraße 13, 49076 Osnabrück, Germany</p>
      <div>
        <p>info@kvn.de</p>
        <p>+49 (0)54188 8888888</p>
      </div>
    </div>
  );
};

export default Topnav;
