import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import fakeWeather from "./data/FakeWeather.json"

import "./App.css";
import storm from './img/weather-icons/storm.svg'

import SearchComp from "./components/SearchComp";
import WeatherNowComp from "./components/WeatherNowComp";
import WeatherItem from "./components/WeatherItem"


const API_key = 'b3a3b3e8c8d522d4417af4909738cc02';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherList: fakeWeather.list,
      city: '',
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  // http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${APO_key}

  render() {
    return (
      <div className="app">
        <header>
          <SearchComp/>
        </header>  
        <main>
          <WeatherNowComp lowTemp={Math.round(this.state.weatherList[1].main.temp_min - 273.15)} currentState={this.state.weatherList[2].weather[0].description} highTemp={Math.round(this.state.weatherList[1].main.temp_max - 273.15)} pressure={this.state.weatherList[1].main.pressure} humidity={this.state.weatherList[1].main.humidity} weatherIcon="https://placekitten.com/200/300" />
          
          <div className='weather-next'>
            {this.state.weatherList.map((item, index)=>{
              if (index>0 && index<8) {
                return <WeatherItem temp={Math.round(item.main.temp)} time={item.dt_txt} />
              }
            })}
          </div>
        </main>

      </div>
    );
  }
}

export default App;
