import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOption.css";

const HeaderOption = ({ avatar, Icon, title, selected, onClick }) => {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && (
        <Icon
          className={`headerOption__icon && ${
            selected && "headerOptionIcon__active"
          }`}
        />
      )}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3
        className={`headerOption__title && ${
          selected && "headerOptionTitle__active"
        }`}
      >
        {title}
      </h3>
    </div>
  );
};

export default HeaderOption;
