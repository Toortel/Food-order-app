import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes["header-main"]}>
        <h1 className={classes["header-title"]}>JSX-Meal</h1>
        <div className={classes["header-cart"]}>(cart component here)</div>
    </header>
  );
};

export default Header;
