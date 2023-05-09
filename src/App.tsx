import React, {Suspense, lazy} from 'react';
import './App.css';
import GeoLocation from './component/FrontPage/geoLocation';
const WeatherPage = lazy(()=>import('./component/Finalweather/WeatherPage'))
function App() {
    
  return (
    <>
      {/* <GeoLocation /> */}
      <Suspense fallback={<div>Please wait while Loading</div>}>
        <WeatherPage />
      </Suspense>
     
    </>
  );
}

export default App;
