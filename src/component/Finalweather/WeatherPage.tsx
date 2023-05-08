import React from "react";
import "./WeatherPage.css";
import cloud from "../../image/forecast.png";
import city from "../../image/city.jpg";
function WeatherPage() {
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row justify-content-center align-items-center w-100">
          <div className="col-sm-6 col-lg-4 p-0 h-100 first-div ">
            <img className="image" src={city} />
          </div>
          <div className="col-sm-6 py-3 col-lg-4 bg-dark opacity-75 d-flex flex-column align-items-center justify-content-center">
            <div className="text-center">
              <img src={cloud} />
            </div>
            <div className="text-center">
              <p className="text-light weatherCondition">Haze</p>
            </div>
            <hr />
            <div className="input-group pt-2">
              <input
                type="text"
                className="form-control border-0"
                placeholder="Search City"
              />
              <div className="input-group-append">
                <button className="btn btn-secondary searchIcon border-0" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
            <div className="text-center pt-4">
              <p className="text-light h6">New Delhi</p>
            </div>
            <hr className="weatherDetailSeparation p-0 m-0" />
            <div className="pt-4 col-9">
              <span className="text-light float-left h6">Temperature</span>
              <span className="text-light float-right h6">22 c</span>
            </div>
            <hr className="weatherDetailSeparation p-0 m-0" />
            <div className="pt-4 col-9">
              <span className="text-light float-left h6">Humidity</span>
              <span className="text-light float-right h6">22 c</span>
            </div>
            <hr className="weatherDetailSeparation p-0 m-0" />
            <div className="pt-4 col-9">
              <span className="text-light float-left h6">Visibility</span>
              <span className="text-light float-right h6">22 c</span>
            </div>
            <hr className="weatherDetailSeparation p-0 m-0" />
            <div className="pt-4 col-9">
              <span className="text-light float-left h6">wind Speed</span>
              <span className="text-light float-right h6">22 c</span>
            </div>          
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherPage;
