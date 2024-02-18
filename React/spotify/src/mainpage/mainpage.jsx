import React from "react";
import "./mainpage.css";
import lofi from "../assets/playlist/play-lofi.jpg";
import todayTop from "../assets/playlist/play-top-today.jpg";
import chill from "../assets/playlist/play-chill.jpg";
import topYear from "../assets/playlist/play-top.jpg";
import jazz from "../assets/playlist/play-jazz.jpg";
import twitter from "../assets/icons/twitter.png";
import facebook from "../assets/icons/facebook.png";
import insta from "../assets/icons/insta.png";

const Mainpage = () => {
  return (
    <main>
      <div className="main-container">
        <div className="playlist-content">
          <div id="result-playlists">
            <div className="playlist">
              <h2 className="playlist_offer">Playlists do Spotify</h2>
              <a href="" className="more">
                Mostrar Tudo
              </a>
            </div>
            <div className="offer">
              <div className="offer__list">
                <section className="offer__list-playlist">
                  <div className="playlists">
                    <a className="playlist" href="">
                      <div className="play">
                        <span className="fa fa-solid fa-play"></span>
                      </div>
                      <img className="pic" src={lofi} alt="Lofi beats" />
                      <span className="type">lofi beats</span>
                      <span className="description">
                        chill beats, lofi vibes, new tracks every week.
                      </span>
                    </a>
                  </div>
                  <div className="playlists">
                    <a className="playlist" href="">
                      <div className="play">
                        <span className="fa fa-solid fa-play"></span>
                      </div>
                      <img
                        className="pic"
                        src={todayTop}
                        alt="Today's Top Hits"
                      />
                      <span className="type">Todays Top Hits</span>
                      <span className="description">
                        Teddy Swims is on top of the Hottest 50!
                      </span>
                    </a>
                  </div>
                  <div className="playlists">
                    <a className="playlist" href="">
                      <div className="play">
                        <span className="fa fa-solid fa-play"></span>
                      </div>
                      <img className="pic" src={chill} alt="Chillout Lounge" />
                      <span className="type">Chillout Lounge</span>
                      <span className="description">
                        Just lean back and enjoy relaxed beats.
                      </span>
                    </a>
                  </div>
                  <div className="playlists">
                    <a className="playlist" href="">
                      <div className="play">
                        <span className="fa fa-solid fa-play"></span>
                      </div>
                      <img className="pic" src={topYear} alt="All Out 2020s" />
                      <span className="type">All Out 2020s</span>
                      <span className="description">
                        The biggest songs of the 2020s.
                      </span>
                    </a>
                  </div>
                  <div className="playlists">
                    <a className="playlist" href="">
                      <div className="play">
                        <span className="fa fa-solid fa-play"></span>
                      </div>
                      <img className="pic" src={jazz} alt="Jazz" />
                      <span className="type">Jazz in the Background</span>
                      <span className="description">
                        Soft instrumental Jazz for all your activities.
                      </span>
                    </a>
                  </div>
                </section>
              </div>
              <div className="important">
                <div className="company">
                  <span className="category">Empresa</span>
                  <a href="">Sobre</a>
                  <a href="">Empregos</a>
                  <a href="">For the Record</a>
                </div>
                <div className="comunity">
                  <span className="category">Comunidades</span>
                  <a href="">Para Artistas</a>
                  <a href="">Desenvolvedores</a>
                  <a href="">Publicidade</a>
                  <a href="">Investidores</a>
                  <a href="">Fornecedores</a>
                </div>
                <div className="utility">
                  <span className="category">Links úteis</span>
                  <a href="">Suporte</a>
                  <a href="">Aplicativo móvel grátis</a>
                </div>
                <div className="social__media">
                  <button className="rede">
                    <span>
                      <img src={insta} alt="" />
                    </span>
                  </button>
                  <button className="rede">
                    <span>
                      <img src={twitter} alt="" />
                    </span>
                  </button>
                  <button className="rede">
                    <span>
                      <img src={facebook} alt="" />
                    </span>
                  </button>
                </div>
              </div>
              <hr />
              <span className="copyright">© 2024 Spotify AB</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Mainpage;
