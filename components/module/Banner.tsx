"use client";

import Typer from "../UI/Typer";

export const BannerComponent = () => {
  return (
    <div className="banner">
      <div className="banner-wrapper">
        <div className="main-slogan" style={{ color: "white" }}>
          <Typer
            text="Создание сайтов и
              Веб приложений
              под ключ в Бишкеке"
          />
        </div>
        <div className="second-text">
          <Typer
            text="Мы разработаем вам под ключ сайт и мобильное
              приложение любой сложности за адекватную стоимость и поможем запустить
              в сеть."
          />
        </div>
      </div>
    </div>
  );
};
