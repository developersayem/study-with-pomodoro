import React from "react";
import "./Activities.css";

const Activities = () => {
  return (
    <div>
      <div className="user-section">
        <div className="user-img">
          <img src={process.env.PUBLIC_URL + "user.jpg"} />
        </div>
        <div className="user-details">
          <h2 className="user-name">John Wick</h2>
          <p className="user-add">Las Vegas,United States</p>
        </div>
      </div>
      <div className="user-body">
        <div>
          <h2 className="mp">
            69 <small>kg</small>
          </h2>
          <p className="mp">Weight</p>
        </div>
        <div>
          <h2 className="mp">6.3</h2>
          <p className="mp">Height</p>
        </div>
        <div>
          <h2 className="mp">
            55 <small>yrs</small>
          </h2>
          <p className="mp">Age</p>
        </div>
      </div>
      <h2>Add A Break</h2>
      <div className="add-break">
        <div className="break-box">
          <div>
            <button>5</button>
          </div>
          <div>
            <button>10</button>
          </div>
          <div>
            <button>15</button>
          </div>
          <div>
            <button>20</button>
          </div>
          <div>
            <button>30</button>
          </div>
          <div>
            <button>60</button>
          </div>
        </div>
      </div>
      <h2>Study Details</h2>
      <div className="study-container">
        <h3>Study time:</h3>
        <h3>00</h3>
      </div>
      <div className="break-time">
        <h3>Break time:</h3>
        <h3>00</h3>
      </div>
      <button className="activity-btn">Activity Completed</button>
    </div>
  );
};

export default Activities;
