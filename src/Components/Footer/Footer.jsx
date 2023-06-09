import React from "react";
import "./Footer.scss";
import FooterLogo from "../../assets/heade-rlogo.png";
import Gmail from "../../assets/gmail.png";
import Telegram from "../../assets/telegram.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="container-fluid footer">
      <div className="container d-flex justify-content-center align-items-center justify-content-md-between gap-3 flex-column flex-md-row">
        <img src={FooterLogo} alt="" />

        <ul className="d-flex gap-2 align-items-center list-unstyled">
          <li>
            <a href="">
              <img src={Gmail} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Telegram} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={twitter} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
