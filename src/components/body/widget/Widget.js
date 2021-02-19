import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";
import "./Widget.css";

const Widget = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widget__main">
      <div className="widget">
        <div className="widgets__header">
          <h2>Linkedin News</h2>
          <Info />
        </div>
        {newsArticle("The roles in demand in 2021", "3h ago")}
        {newsArticle("Bezos to step down as Amazon CEO", "1 day ago")}
        {newsArticle(" The key to work success in 2021", "2 day ago")}
        {newsArticle("Revival for the auto sector?", "2 day ago")}
        {newsArticle("The tech skills in demand", "3 day ago")}
      </div>

      <div className="advertise">
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Widget;
