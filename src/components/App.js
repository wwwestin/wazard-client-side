import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './NavBar';
import TripPage from './TripPage';
import MyTrips from './MyTrips';

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                    <Route>
                        <Route exact path="/" element= {<TripPage />} />
                        <Route exact path="/my-trips" element= {<MyTrips />} />
                    </Route>
                </Router> 
                <div>
                    <TripPage />
                </div>
        </div>
    )
}

export default App;

