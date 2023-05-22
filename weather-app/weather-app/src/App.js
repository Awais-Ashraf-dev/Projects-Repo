import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=c614e7c3b29fddce639cb5ac6fa457c7
  `;
  return (
    <div className="App">
      <div className="Search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main} </p> : null}
          </div>
        </div>
        {data.main != undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? <p>{data.main.feels_like.toFixed()}°F</p> : null}
              <p className="bold">Feels</p>
            </div>
            <div className="humidity">
              {data.main ? <p>{data.main.humidity.toFixed()}</p> : null}
              <p>Humadity</p>
            </div>
            <div className="wind">
              {data.wind ? <p>{data.wind.speed.toFixed()}mph</p> : null}
              <p>Winds</p>
            </div>
          </div>
        )}
      </div>
    </div> 
  );
}

export default App;
