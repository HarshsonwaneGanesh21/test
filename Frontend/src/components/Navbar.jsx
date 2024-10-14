import React from "react";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { NavLink } from "react-router-dom";
import "../App.css"
const Navbar = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="left-side">
          <button className="menu-button">
            <DensityMediumIcon>
            </DensityMediumIcon>
          </button>
          <div className="b1">
            <div className="text">Namaste</div>
            <div className="text">Harsh.. ji!</div>
          </div>
        </div>
        <div className="right-side">
          <div className="cards">
            <div className="top">
              <div className="number">10210</div>
              <div className="text">My Rank</div>
            </div>
            <div className="bottom">
              <div className="number">0</div>
              <div className="text">Karma Points</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    
  );
}


export default Navbar;