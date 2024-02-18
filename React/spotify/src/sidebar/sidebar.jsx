import React from "react";
import "./sidebar.css";
import logo from "../assets/icons/logo-spotify.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar__navigation">
        <div className="logo">
          <a href="">
            <img src={logo} alt="logo-spotify" />
          </a>
        </div>
        <ul>
          <li>
            <a className="inicio" href="./inicio.jsx">
              <span className="fa fa-home"></span>
              <span>Início</span>
            </a>
          </li>
          <li>
            <a className="buscar" href="./buscar.jsx">
              <span className="fa fa-search"></span>
              <span>Buscar</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="library">
        <div className="library__content">
          <button className="library__button">
            <span className="fa fa-folder"></span>
            <span>Sua biblioteca</span>
          </button>
          <span className="fa fa-plus"></span>
        </div>

        <div className="section-scroll">
          <section className="section-playlist">
            <div className="section-playlist__content">
              <span className="text title">Crie sua primeira playlist</span>
              <span className="text subtitle">É fácil, vamos te ajudar.</span>
              <button className="section-playlist__button">
                <span>Criar playlist</span>
              </button>
            </div>
          </section>

          <section className="section-playlist">
            <div className="section-playlist__follow">
              <span className="text title">
                Que tal seguir um podcast novo?
              </span>
              <span className="text subtitle">
                Avisaremos você sobre novos episódios.
              </span>
              <button className="section-follow__button">
                <span>Explore podcasts</span>
              </button>
            </div>
          </section>
        </div>

        <div className="utilitarios">
          <div className="utilitarios__links">
            <a className="link" href="">
              Legal
            </a>
            <a className="link" href="">
              Centro de Privacidade
            </a>
            <a className="link" href="">
              Política de Privacidade
            </a>
            <a className="link" href="">
              Cookies
            </a>
            <a className="link" href="">
              Sobre anúncios
            </a>
            <a className="link" href="">
              Acessibilidade
            </a>
            <a className="link" href="">
              Notice at Collection
            </a>
            <a className="link" href="">
              Definições de cookies
            </a>
            <div className="cookies">
              <a href="">Cookies</a>
            </div>
          </div>
        </div>

        <div className="languages">
          <button className="languages__button">
            <span className="fa fa-globe"></span>
            <span>Português do Brasil</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
