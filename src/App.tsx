import React, { Suspense, lazy } from "react";
import "./App.css";
import GeoLocation from "./component/FrontPage/geoLocation";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import WeatherPage from "./component/Finalweather/WeatherPage";
const WeatherPage = lazy(() => import("./component/Finalweather/WeatherPage"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GeoLocation />} />
          <Route
            path="/weather"
            element={
              <Suspense
                fallback={
                  <div className="h-100 d-flex align-items-center justify-content-center">
                    <h1>Please wait while Loading</h1>
                  </div>
                }
              >
                <WeatherPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>

      {/*  */}
    </>
  );
}

export default App;
