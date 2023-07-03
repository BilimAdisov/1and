"use client";

import { FaInstagram } from "react-icons/fa";
import Typer from "../UI/Typer";

export const FooterComponent = () => {
  return (
    <footer className="footer">
      <h1>Aksoft</h1>
      <div className="mini-slogan">
        <Typer text="Создавать - это наша страсть, это то, что делает нас живыми." />
      </div>
      <div className="contact">
        <p>+996551881999</p>
        <p>aksoft@gmail.com</p>
        <p>г. Бишкек, ул. Советская 86</p>
        <a target="blank" href="https://www.instagram.com/aksoftdev/">
          <FaInstagram size={30} />
        </a>
      </div>
    </footer>
  );
};
