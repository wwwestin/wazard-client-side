import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import TripPage from './TripPage';
import MyTrips from './MyTrips';

function App() {
    return (
        <div className='App'>
            <NavBar />
            <Routes>
            <Route exact path="/" element= {<TripPage />} />
            <Route exact path="/my-trips" element= {<MyTrips />} />
            </Routes>
        </div>
    )
}

export default App;