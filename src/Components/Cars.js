import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {addSelectOptions, calculatePrice} from '../Actions/util';
import '../style/cars.css';

require("regenerator-runtime/runtime");

function Cars(props) {

    const[cars, setCars] = useState([]);
    const[duration, setDuration] = useState(props.match.params.duration);
    const[distance, setDistance] = useState(props.match.params.distance);

    const fetchCars = async (duration, distance) => {

        const res = await axios.get('/cars.json', {
            params: {
                duration: duration,
                distance: distance
            }
        });
        console.log(res.data);
        setCars(res.data);
        
    }

    useEffect(() => {
        fetchCars(duration, distance);
    }, [distance, duration]);



return(
    <div className="cars-page">
                 <h2 className="car-title">Find you next companion</h2>
        <div className="search">
            <h3 className="car-sub-title">Rent for:</h3>
            <form id="search-car">
                <select className="car-select" value={duration} className="car-page-select" id="nbRentalDays" autoComplete="on" onChange={event => setDuration(event.target.value)}>
                        <option value="">--DAYS--</option>
                        <option key={1} value="1">1 day</option>
                        {addSelectOptions(2, 30,1," days")}
                </select>
                <select className="car-select"  value={distance} className="car-page-select"  id="nbKm" autoComplete="on" onChange={event => setDistance(event.target.value)}>
                        <option value="">--KM--</option>
                        {addSelectOptions(50, 3000,50," km")}
                </select>
            </form>       
        </div>
        
        <div className="cars-display">
            {
            
            /* displaing picture, brand, model, price per day and price per km  for each car*/

            cars.map(car => (
                <div className="cars" key={car.id}>
                    <div className="car-image">
                        <img src={car.picturePath}></img>
                        <span className="hidden-text"> Book it &gt;&gt;</span>
                    </div>
                    <div className="car-info">
                        <div className="car-brand-model">{car.brand} {car.model}</div>
                        <div className="car-pricing">
                            <span>{car.pricePerDay}€/day </span>
                            <span>{car.pricePerKm}€/Km</span>
                        </div>
                        {duration && distance ? <div className="total-price">{(calculatePrice(car.pricePerDay,duration,true) + calculatePrice(car.pricePerKm,distance, false))}€</div> : ""}
                    </div>    
                </div>
            ))}
            </div>
    </div>

);
}

export default Cars;
