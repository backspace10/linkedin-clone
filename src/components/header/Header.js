import {
  AppsRounded,
  BusinessCenter,
  HouseRounded,
  Notifications,
  Search,
  SupervisorAccount,
  TextsmsRounded,
} from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { auth } from "../../firebase";
import "./Header.css";
import HeaderOption from "./header/headerOption/HeaderOption";
const Header = () => {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.fpsa.org/wp-content/uploads/linkedin-logo-copy.png"
          alt="logo"
        />
        <div className="header__search">
          <Search />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HouseRounded} title="Home" selected />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={TextsmsRounded} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption
          avatar="https://png.pngtree.com/png-clipart/20200701/original/pngtree-mask-vector-avatar-icon-image-png-image_5415576.jpg"
          title="Me"
          onClick={logoutOfApp}
        />
        <span className="rightBorder"></span>
        <HeaderOption Icon={AppsRounded} title="Work" className="work__icon" />
        <div className="content">
          <p>Try premium free </p>
          <p>for 1 month </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
