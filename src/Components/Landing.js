import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../style/landing.css';
import {addSelectOptions} from '../Actions/util.js';

function Landing() {

    //Landing page

    const[distance, setDistance] = useState(50);
    const[duration, setDuration] = useState(1);


return(
    <div className="landing-page">
        <div className="main-content">
            <div className="call-to-action">
                <h1 className="title">Get a car with <span className="accent" >RentYourCar </span>!</h1>
                <p className="subtitle">We've got all the cars you will ever need</p>
                <form id="search-car">
                    <select classNamz="select" id="nbRentalDays" autoComplete="on" onClick={event => setDuration(event.target.value)}>
                        <option key={1} value="1">1 day</option>
                        {addSelectOptions(2, 30,1," days")}
                    </select>
                    <select classNamz="select" id="nbKm" autoComplete="on" onClick={event => setDistance(event.target.value)}>
                        {addSelectOptions(50, 3000,50," km")}
                    </select>
                </form>       
                <Link to={'/cars/' + duration + '/' + distance} ><button className="btn select-button">See selection &gt;&gt;</button></Link>
            </div>
        </div>
    </div>
);
}

export default Landing;
