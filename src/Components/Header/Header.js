import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import "./Header.css";

const Header = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch("subject.json")
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  }, []);

  return (
    <div className="">
      <div className="header-container">
        <div className="header">
          <img src={process.env.PUBLIC_URL + "logo.jpg"} />
          <h1 className="logo">Study With Pomodoro</h1>
        </div>
        <h2 className="sub-heading">Select today’s Subjects</h2>
      </div>
      <div className="cards-section">
        {subjects.map((subject) => (
          <Cards key={subject.id} subject={subject}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Header;
