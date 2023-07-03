"use client";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Typer from "../UI/Typer";

export const FormaComponent = () => {
  return (
    <div className="form">
      <h3 style={{ color: "white" }}>
        <Typer
          text="Заполните заявку и мы перезвоним Вам и бесплатно
          проконсультируем по телефону или при личной встрече!"
        />
      </h3>
      <IoIosArrowForward className="arrow" size={100} color="white" />
      <div className="subscribe">
        <p>Заявка</p>
        <input
          className="subscribe-mail"
          placeholder="Введите почту"
          type="email"
        />
        <br />
        <input
          className="subscribe-number"
          placeholder="Введите номер телефона"
          type="text"
        />
        <br />
        <div className="submit-btn">Отправить</div>
      </div>
    </div>
  );
};
