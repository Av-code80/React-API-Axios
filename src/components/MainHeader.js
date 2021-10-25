import React, { useState } from "react";

import { IconContext } from "react-icons";
import { FaBars } from "react-icons/fa";
import styles from "./MainHeader.module.css";

const MainHeader = () => {
  const [headerToggled, setHeaderToggled] = useState(false);

  const handlerHeaderToggle = () => {
    setHeaderToggled((toggled) => !toggled);
  };

  return (
    <header
      className={`${styles.headerButton} 
        ${headerToggled ? styles.headerColorChanged : ""}`}
    >
      <IconContext.Provider value={{ color: "#ffffff" }}>
        <FaBars className={styles.faBars} onClick={handlerHeaderToggle} />
      </IconContext.Provider>
      <h1>
        {!headerToggled
          ? "React Axios API Project"
          : "Lord Of The Rings Project - @Aveh"}
      </h1>
    </header>
  );
};

export default MainHeader;
