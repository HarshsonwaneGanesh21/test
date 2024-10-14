import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Resources from "./components/Resources";
import Referral from "./components/Referral";
import Sidebar from "./components/Siderbar";
import BatchTiming from "./components/BatchTiming";
import Leaderboard from "./components/leaderboard";
import Rewards from "./components/Rewards";
const Dashboard = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Routes>
            <Route path="/Batchtiming" element={<BatchTiming/>}></Route>
            <Route path="/rewards" element={<Rewards/>}></Route>

            </Routes>
            <Routes>
                <Route exact path="/" element={<Home />}>
                </Route>
                <Route path="/referral" element={<Referral />}>
                </Route>
                <Route path="/leaderboard" element={<Leaderboard />}>
                </Route>
                <Route path="/resources" element={<Resources />}>
                </Route>
            </Routes>
        </>
    )
}
export default Dashboard;