import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import TripPage from './TripPage';
import MyTrips from './MyTrips';
import Header from './Header';
import '../App.css';

function App() {
    return (
            <Router>
                <Header />
                <NavBar />
                    <Routes>
                        <Route exact path="/" element={<TripPage />} />
                        <Route path="/" element= {<TripPage />} />
                        <Route path="/my-trips" element= {<MyTrips />} />
                    </Routes>
            </Router>
                    
    )
}

export default App;

