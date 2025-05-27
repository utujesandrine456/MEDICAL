import React from "react";
import { news } from "./assets/assets.jsx";
import './New.css';



const New = () => {
  return (
    <div className="news-container">
      {news.map((item, index) => (
        <div className="news-card" key={index}>
          <img src={item.image} alt="news" className="news-image" />
          <div className="key">
            <p className="news-date">{item.date}</p>
            <h3 className="news-article">{item.article}</h3>
            <div className="icons">{item.icons}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default New;
