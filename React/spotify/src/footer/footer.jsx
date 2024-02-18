import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <a href="">
        <footer>
          <div className="footer__texto">
            <div className="footer__title">
              <span>Testar o Premium de graça</span>
            </div>
            <div className="footer__subtitle">
              <span>
                Inscreva-se para curtir música ilimitada e podcasts só com
                alguns anúncios. Não precisa de cartão de crédito.
              </span>
            </div>
          </div>

          <div className="footer__action">
            <button className="footer__button">Inscreva-se grátis</button>
          </div>
        </footer>
      </a>
    </div>
  );
};

export default Footer;
