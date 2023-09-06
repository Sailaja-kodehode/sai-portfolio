import React, { useState } from "react";
import { BsSun, BsMoonFill } from "react-icons/bs";
import "./theme.css";

const ThemeToggle = () => {
  const icon_size = 30;
  const [icon, setIcon] = useState("BsSun");
  const changeTheme = (iconName) => {
    const item = localStorage.getItem("theme");
    //dark mode n light mode

    let theme;
    if (item === "dark") {
      theme = "light";
      localStorage.setItem("theme", "");
    } else {
      theme = "dark";
      localStorage.setItem("theme", "dark");
    }
    localStorage.setItem("theme", theme);
    document.body.className = localStorage.getItem("theme");
    setIcon(iconName);
  };
  const themeIsLight = icon === "BsMoonFill";
  const Icon = themeIsLight ? (
    <BsSun
      className="lightTheme"
      size={icon_size}
      onClick={() => changeTheme("BsSun ")}
    />
  ) : (
    <BsMoonFill
      className="darkTheme"
      size={icon_size}
      onClick={() => changeTheme("BsMoonFill")}
    />
  );
  return <div className="icon">{Icon}</div>;
};

export default ThemeToggle;
