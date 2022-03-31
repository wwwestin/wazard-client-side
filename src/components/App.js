import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './NavBar';
import TripPage from './TripPage';
import MyTrips from './MyTrips';
import Header from './Header';
import '../App.css';

function App() {
    return (
        <div className="App">
                <>
                <Header />

                <div>
                <Router>
                    <NavBar />
                    <Route>
                        <Route exact path="/" element= {<TripPage />} />
                        <Route exact path="/my-trips" element= {<MyTrips />} />
                    </Route>
                </Router>
                </div>

                </>
                <div>
                    <TripPage />
                </div>
        </div>
    )
}

export default App;

