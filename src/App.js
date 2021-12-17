import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
import storm from '../src/img/weather-icons/storm.svg'
import SearchComp from "./SearchComp";


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
        <header>
          <SearchComp></SearchComp>
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
          
          <div className='weather-next'>
            <div className='weather-next-item'>
              <span classNane='icon-time'>3:00</span>
              <img src='https://placekitten.com/200/300' alt='placeholder'/>
              <span className='icon-temperature'>10°C</span>
              </div>
            <div className='weather-next-item'>
              <span classNane='icon-time'>6:00</span>
              <img src='https://placekitten.com/200/300' alt='placeholder' />
              <span className='icon-temperature'>10°C</span>
              </div>
            <div className='weather-next-item'>
              <span classNane='icon-time'>9:00</span>
              <img src='https://placekitten.com/200/300' alt='placeholder' />
              <span className='icon-temperature'>10°C</span>
              </div>
            <div className='weather-next-item'>
              <span classNane='icon-time'>12:00</span>
              <img src='https://placekitten.com/200/300' alt='placeholder' />
              <span className='icon-temperature'>10°C</span>
              </div>
            <div className='weather-next-item'>
              <span classNane='icon-time'>15:00</span>
              <img src='https://placekitten.com/200/300' alt='placeholder' />
              <span className='icon-temperature'>10°C</span>
              </div>
            <div className='weather-next-item'>
              <span classNane='icon-time'>18:00</span>
              <img src='https://placekitten.com/200/300' alt='placeholder' />
              <span className='icon-temperature'>10°C</span>
              </div>
            <div className='weather-next-item'>
              <span classNane='icon-time'>21:00</span>
              <img src='https://placekitten.com/200/300' alt='placeholder' />
              <span className='icon-temperature'>10°C</span>
              </div>
          </div>
          </main>

      </div>
    );
  }
}

export default App;
