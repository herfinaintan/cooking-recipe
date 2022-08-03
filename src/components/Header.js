import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/bi";
import "../styles/header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <h2 className="header__content__logo">CookRecipe</h2>
        <nav className="header__content__nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Recipe</a>
            </li>
          </ul>
          <button>Login</button>
        </nav>
        <div className="header__content__toggle">
          <BiMenuAltRight />
        </div>
      </div>
    </header>
  );
};

export default Header;
