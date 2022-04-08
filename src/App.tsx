import React, {Component} from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Login from './login'
import Activities from './dashboard/activities'
import Status from "./dashboard/status";
import StraviewNavBar from "./nav/StraviewNavBar"
import TrainingStatistics from "./dashboard/training-statistics";
import RidingStatistics from "./dashboard/riding-statistics";
import WeekTraining from "./dashboard/week-training";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <StraviewNavBar/>
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
}

export default App