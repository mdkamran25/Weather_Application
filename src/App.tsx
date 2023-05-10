import React, { Suspense, lazy } from "react";
import "./App.css";
import GeoLocation from "./component/FrontPage/geoLocation";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WeatherPage from "./component/Finalweather/WeatherPage";
// const WeatherPage = lazy(() => import("./component/Finalweather/WeatherPage"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GeoLocation />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
      </BrowserRouter>

      {/*  */}
    </>
  );
}

export default App;
