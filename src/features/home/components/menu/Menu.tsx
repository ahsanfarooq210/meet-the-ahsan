import React from "react";
import "./Menu.css";
import homeSvg from "../../../../../public/HomeSvg.svg";
import personSvg from "../../../../../public/PersonSvg.svg";
import portfolioSvg from "../../../../../public/ProtfolioSvg.svg";
import letterSvg from "../../../../../public/LetterSvg.svg";
import chat from "../../../../../public/ChatSvg.svg";
import Image from "next/image";

const listItems = [
  {
    text: "Home",
    icon: homeSvg,
  },
  {
    text: "About",
    icon: personSvg,
  },
  {
    text: "Portfolio",
    icon: portfolioSvg,
  },
  {
    text: "Contact",
    icon: letterSvg,
  },
  {
    text: "Chat",
    icon: chat,
  },
];
const Menu = () => {
  return (
    <div>
      <ul className="menu-list">
        {listItems.map((item, index) => {
          return (
            <li key={index} >
              <a href=""  className="menu-list-item">
                <span className="menu-list-item-text">{item.text}</span>
                <div className="menu-list-item-image">
                  <Image
                    width={20}
                    height={20}
                    src={item.icon}
                    alt=""
                    style={{ margin: 0 }}
                  />
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
