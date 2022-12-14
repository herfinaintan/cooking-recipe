import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/header.scss";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const loginClickHandler = () => {
    menuToggleHandler();
    navigate("/login");
  };
  return (
    <header className="header">
      <div className="header__content">
        <h2 className="header__content__logo">CookRecipe</h2>
        <nav
          className={`${"header__content__nav"} ${
            menuOpen && size.width < 768 ? "header__content__nav isMenu" : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/" onClick={menuToggleHandler}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/recipe" onClick={menuToggleHandler}>
                Recipe
              </Link>
            </li>
          </ul>

          <button onClick={loginClickHandler}>Login</button>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
