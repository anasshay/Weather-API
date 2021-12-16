import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
import storm from '../src/img/weather-icons/storm.svg'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Anass"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <header><h1 className=''>Hello</h1>
        <button >FIND WEATHER</button>      
        </header>  
        <main>
          <div class="weather-now">
            <img className='weather-now-icon' src={storm} alt='strom' />
            <h3 className='weather-now-text'>overcast clouds</h3>
            <div classNsame="weather-now-description">
              <p className='temperature'><span className='bold-span'>Temperature</span> 10°C to 11°C</p>
              <div className='hum-pre'>
                <span className='bold-span'>Humidity</span>
                <span className='value'>78%</span>
                <span className='bold-span'>Pressure</span>
                <span className='value'>1008.48</span>

              </div>
              </div>
            </div>
          
          </main>

      </div>
    );
  }
}

export default App;
