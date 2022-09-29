import React from "react";
import "./Cards.css";

const Cards = ({ subject }) => {
  const { img, name, time, details } = subject;
  return (
    <div className="card-container">
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <h2>Name: {name}</h2>
      {/* <p className="details">{details}</p> */}
      <p className="time">
        Time: {time}
        <span> Minutes</span>
      </p>
      <button className="card-btn">Add To List</button>
    </div>
  );
};

export default Cards;
