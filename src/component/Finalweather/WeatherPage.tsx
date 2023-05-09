import React, { useState, useEffect, Suspense, lazy } from "react";
import "./WeatherPage.css";
import cloud from "../../image/forecast.png";
import city from "../../image/city.jpg";
import SearchBar from "../searchBar/serach";
import useFetch from "../../hooks/apicall";
const Dates = lazy(() => import("../date/date"));
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
    temp: number|undefined;
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

};

function WeatherPage() {
  const [updateLocation, setUpdateLocation] = useState<string | null>("Mumbai");
  const { data, error } = useFetch<DataObj>(
    `https://api.openweathermap.org/data/2.5/weather?q=${updateLocation}&appid=90e918820d68a22bfa5083f4abd98194`
  );
  const [correctLocation, setCorrectLocation] = useState<boolean>(true)

  useEffect(() => {
    console.log(data?.name, "data,", updateLocation, "before");
    
    if ((data && data.name !== updateLocation)) {
      setCorrectLocation(false);
      console.log(correctLocation,"INCorrect location");
    } else {
      setCorrectLocation(true);
      console.log(correctLocation,"correct location");
    }
    // console.log(data?.name, "data, ", updateLocation, "agter");
  }, [error, data]);

// console.log(correctLocation, "correctLocation");
// console.log(data?.name, "data", updateLocation, "updateLocation")
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-6 position-relative col-lg-5 p-0 d-none d-sm-block first-div">
            <img className="image h-100 w-100" src={city} loading="lazy" />
            <div className="position-absolute top-0 pt-3 pe-4 Place1">
              { correctLocation ? <p className="text-light h2 time">{data?.name}</p>: <p className="text-light h2 time">Enter Correct City</p>}
            </div>
            <div className="position-absolute ps-3 bottom time-date">
              <Suspense fallback={<div className="text-light h2  time">Loading...</div>}>
                <Dates />
              </Suspense>
            </div>
            
          </div>
          <div className="col-sm-6 sec-div py-3 col-lg-4 bg-dark opacity-75 d-flex flex-column align-items-center justify-content-center">
            <div className="text-center">
              <img src={cloud} />
            </div>
            <div className="text-center">
              <p className="text-light weatherCondition">{data?.weather[0].main}</p>
            </div>
            <hr />
            <div className="input-group pt-2">
              <SearchBar setUpdateLocation={setUpdateLocation} />
            </div>
            <div className="text-center pt-4">
            { correctLocation ? <p className="text-light h2 time">{data?.name}</p>: <p className="text-danger h2 time">No city Found</p> }
            {/* <p className="text-light h2 time">{data?.name}</p> */}
            </div>
            <hr className="weatherDetailSeparation p-0 m-0" />
            <div className="pt-4 col-9">
              <span className="text-light float-left h6 pe-3">Temperature</span>
              {correctLocation ?  data?.main?.temp && (
                <span className="text-light float-right h6">
                  {(data.main.temp - 273.15).toFixed(2)} °C
                </span>
              ): "" }
            </div>
            <hr className="weatherDetailSeparation p-0 m-0" />
            <div className="pt-4 col-9">
              <span className="text-light float-left h6">Humidity</span>
              {correctLocation ? <span className="text-light float-right h6">
                {data?.main.humidity}%
              </span> : " "}
            </div>
            <hr className="weatherDetailSeparation p-0 m-0" />
            <div className="pt-4 col-9">
              <span className="text-light float-left h6">Visibility</span>
              {correctLocation? <span className="text-light float-right h6">
                {data?.visibility} mi
              </span> : ""}
            </div>
            <hr className="weatherDetailSeparation p-0 m-0" />
            <div className="pt-4 col-9">
              <span className="text-light float-left h6">wind</span>
              {correctLocation ? <span className="text-light float-right h6">
                {data?.wind.speed} km/h
              </span> : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(WeatherPage);
