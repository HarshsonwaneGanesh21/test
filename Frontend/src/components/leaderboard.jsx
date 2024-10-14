import React from "react";
import { Link } from 'react-router-dom';

const Leaderboard=()=>{
 return(
    <>
        <div className="leads">
        <Link to="/rewards" className="shortcut">
          <div className="l1">
            <img src="https://assets.habit.yoga/freeyoga/Below-10002.png"></img>
          </div>
        </Link>
        </div>
    </>
 )   
}
export default Leaderboard;
