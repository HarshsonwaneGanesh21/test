import React from "react";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import HouseIcon from '@mui/icons-material/House';
import GroupsIcon from '@mui/icons-material/Groups';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { NavLink } from "react-router-dom";
import "../App.css"
const Sidebar = () => {
    return (
        <>
            <div className="con1">
                <div className="con2">
                    <div className="con3">
                        <NavLink to="/" className="a1"><HouseIcon></HouseIcon></NavLink>
                        <p>HOME</p>
                    </div>
                    <div>
                        <NavLink to="/referral" className="a1"><GroupsIcon></GroupsIcon></NavLink>
                        <p>REFERRAL</p>
                    </div>
                    <div>
                        <NavLink to="/leaderboard" className="a1"><CardGiftcardIcon></CardGiftcardIcon></NavLink>
                        <p>LEADERBOARD</p>
                    </div>
                    <div>
                        <NavLink to="/resources" className="a1"><MenuBookIcon></MenuBookIcon></NavLink>
                        <p>RESOURCES</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sidebar;