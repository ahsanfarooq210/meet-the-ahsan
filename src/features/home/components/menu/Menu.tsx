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
    href: "/",
  },
  {
    text: "About",
    icon: personSvg,
    href: "/about",
  },
  {
    text: "Portfolio",
    icon: portfolioSvg,
    href: "#",
  },
  {
    text: "Contact",
    icon: letterSvg,
    href: "#",
  },
  {
    text: "Chat",
    icon: chat,
    href: "#",
  },
];
const Menu = () => {
  return (
    <div>
      <ul className="menu-list">
        {listItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href} className="menu-list-item">
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
