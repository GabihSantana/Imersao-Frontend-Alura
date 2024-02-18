import React from "react";
import "./search.css";
import festasPlaylist from "../assets/playlist/1.jpeg";
import paraVoce from "../assets/playlist/2.png";
import lancamentos from "../assets/playlist/3.jpeg";
import criadores from "../assets/playlist/4.jpeg";
import paraTreinar from "../assets/playlist/5.jpeg";
import podcasts from "../assets/playlist/6.jpeg";
import sertanejo from "../assets/playlist/7.jpeg";
import samba from "../assets/playlist/8.jpeg";
import funk from "../assets/playlist/9.jpeg";
import MPB from "../assets/playlist/10.jpeg";
import rock from "../assets/playlist/11.jpeg";
import hiphop from "../assets/playlist/12.jpeg";
import indie from "../assets/playlist/13.jpeg";
import relax from "../assets/playlist/14.jpeg";
import musicaLatina from "../assets/playlist/15.jpeg";

const Search = () => {
  return (
    <main>
      <div className="playlist-container">
        <div className="playlist-content">
          <div id="result-playlists">
            <div className="playlist">
              <h1 className="greeting"></h1>
              <h2 className="session">Navegar por todas as seções</h2>
            </div>

            <div className="offer__scroll-container">
              <div className="offer__list">
                <section className="offer__list-item">
                  <a href="" className="cards">
                    <div className="cards card1">
                      <img src={festasPlaylist} alt="" />
                      <span>Boas festas</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card2">
                      <img src={paraVoce} alt="" />
                      <span>Feitos para você</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card3">
                      <img src={lancamentos} alt="" />
                      <span>Lançamentos</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card4">
                      <img src={criadores} alt="" />
                      <span>Creators</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card5">
                      <img src={paraTreinar} alt="" />
                      <span>Para Treinar</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card6">
                      <img src={podcasts} alt="" />
                      <span>Podcasts</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card7">
                      <img src={sertanejo} alt="" />
                      <span>Sertanejo</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card8">
                      <img src={samba} alt="" />
                      <span>Samba e pagode</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card9">
                      <img src={funk} alt="" />
                      <span>Funk</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card10">
                      <img src={MPB} alt="" />
                      <span>MPB</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card11">
                      <img src={rock} alt="" />
                      <span>Rock</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card12">
                      <img src={hiphop} alt="" />
                      <span>Hip Hop</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card13">
                      <img src={indie} alt="" />
                      <span>Indie</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card14">
                      <img src={relax} alt="" />
                      <span>Relax</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card15">
                      <img src={musicaLatina} alt="" />
                      <span>Música Latina</span>
                    </div>
                  </a>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Search;
