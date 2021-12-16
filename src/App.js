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
          <div class="current-state">
            <img className='current-state-icon' src={storm} alt='strom' />
            <h3 className='current-state-text'>overcast clouds</h3>
            </div>
            <div className="current-state-description"></div>
          
          </main>

      </div>
    );
  }
}

export default App;
