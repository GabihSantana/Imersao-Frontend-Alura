import React from "react";
import "./header.css";
import smallRight from "../assets/icons/small-right.png";
import smallLeft from "../assets/icons/small-left.png";
import search from "../assets/icons/search.png";

const Header = () => {
  return (
    <div className="main-container">
      <nav className="header__navigation">
        <div className="navigation">
          <button className="arrow-left">
            <img src={smallLeft} alt="Seta esquerda" />
          </button>
          <button className="arrow-right">
            <img src={smallRight} alt="Seta direita" />
          </button>
        </div>
        <div className="header__search">
          <img src={search} alt="" />
          <input
            id="search-input"
            type="text"
            maxLength="800"
            autoComplete="off"
            placeholder="O que você quer ouvir?"
          />
        </div>

        <div className="header__login">
          <button className="subscribe">Inscreva-se</button>
          <button className="login">Entrar</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
