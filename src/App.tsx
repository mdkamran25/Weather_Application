import React, { Suspense, lazy } from "react";
import "./App.css";
import GeoLocation from "./component/FrontPage/geoLocation";
const WeatherPage = lazy(() => import("./component/Finalweather/WeatherPage"));
function App() {
  return (
    <>
      {/* <GeoLocation /> */}
      <Suspense
        fallback={
          <div className="h-100 d-flex align-items-center justify-content-center">
            <h1>Please wait while Loading</h1>
          </div>
        }
      >
        <WeatherPage />
      </Suspense>
    </>
  );
}

export default App;
