import React, { useEffect } from "react";
import "./geoLocation.css";
import cloud from "../../image/WeatherIcons.gif"

function GeoLocation() {

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
          });
    }, [])

  return (
    <>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row w-100">
          <div className="col pb-5 bg-dark text-light opacity-75 d-flex flex-column justify-content-center align-items-center text-center">
            <div className="col-12 col-sm-10 col-lg-6 ">
                <img src={cloud} className="w-50" />
            </div>
            <div className="col-12 col-sm-10 col-lg-6">
                <span className="h4">Detecting Your Location</span><br />
                <span>Your current location will be displayed on the App</span><br />
                <span> & used for calculating real time Weather.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GeoLocation;
