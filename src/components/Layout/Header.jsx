import React from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes["header-main"]}>
        <h1 className={classes["header-title"]}>JSX-Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["header-image-container"]}>
        <img className={classes["header-image"]} src={mealsImage} alt="Meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
