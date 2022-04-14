import React, {Component} from 'react'
import './App.css'
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom"

import Login from './login'
import Activities from './dashboard/activities'
import Status from "./dashboard/status";
import TrainingStatistics from "./dashboard/training-statistics";
import RidingStatistics from "./dashboard/riding-statistics";
import WeekTraining from "./dashboard/week-training";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard/activities" element={<Activities />} />
                <Route path="/dashboard/week-training" element={<WeekTraining />} />
                <Route path="/dashboard/training-statistics" element={<TrainingStatistics />} />
                <Route path="/dashboard/riding-statistics" element={<RidingStatistics />} />
                <Route path="/dashboard/status" element={<Status />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App