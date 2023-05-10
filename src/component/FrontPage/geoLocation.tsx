import React, { useEffect, useState } from "react";
import "./geoLocation.css";
// import cloud from "WeatherIcons.gif";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/apicall";
import axios from "axios";
interface DataObj {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    temp: number | undefined;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  name: string;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
}

function GeoLocation() {
  const [lat, setLat] = useState<number>(23.0333);
  const [lon, setLon] = useState<number>(72.6167);
  const navigate = useNavigate();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const { data, error } = useFetch<DataObj>(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=90e918820d68a22bfa5083f4abd98194`
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/weather", { state: {cityName: data?.name, error:error}});
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [data]);

  return (
    <>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row w-100">
          <div className="col pb-5 bg-dark text-light opacity-75 d-flex flex-column justify-content-center align-items-center text-center">
            <div className="col-12 col-sm-10 col-lg-6 ">
              <img src="WeatherIcons.gif" className="w-50" />
            </div>
            <div className="col-12 col-sm-10 col-lg-6">
              <span className="h4">Detecting Your Location</span>
              <br />
              <span>Your current location will be displayed on the App</span>
              <br />
              <span> & used for calculating real time Weather.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GeoLocation;
