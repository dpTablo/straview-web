import React, {Component} from 'react';
import './App.css';

import Login from './Login'
import Dashboard from "./Dashboard";
import {BrowserRouter, Route, Routes} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default App;