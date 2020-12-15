import React from 'react';
import './Card.css';


export default function Card({ min, max, name, weather, img, onClose, id }) {
  var climaColor = "white"
  if (weather === "Clear") {
    climaColor = "yellow"
  } else if (weather === "Clouds") {
    climaColor = "gray"
  } else if (weather === "Rain") {
    climaColor = "blue"
  } else if (weather === "Snow") {
    climaColor = "aqua"
  } else if (weather === "Haze" || weather === "Mist") {
    climaColor = "#5c86bd"
  } else if (weather === "Extreme") {
    climaColor = "red"
  }
  return (
    <div className="card" style={{ backgroundColor: climaColor }}>
      <div id="closeIcon" className="row">
        <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Max</p>
            <p>{max}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img className="iconoClima" src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="80" height="80" alt="" />
          </div>
        </div>
      </div>
    </div >
  );
};
