import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=ru&units=metric&appid=b586b55156f3a7720246011d73f86156`


  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      }, [])
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input type="text"
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Город" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{Math.floor(data.main.temp)}℃</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <h1 className="bold">{Math.floor(data.main.feels_like)}℃</h1> : null}
              <p>По ощущениям</p>
            </div>
            <div className="humidity">
              {data.main ? <h1 className="bold">{data.main.humidity}%</h1> : null}
              <p>Влажность воздуха</p>
            </div>
            <div className="wind">
              {data.wind ? <h1 className="bold">{data.wind.speed}м/с</h1> : null}
              <p>Скорость ветра</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
