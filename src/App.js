import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import FakeWeather from './data/FakeWeather.json';

import "./App.css";

import SearchComp from "./Componentss/SearchComp";
import WeatherItemComp from "./Componentss/WeatherItemComp";
import WeatherItems from "./Componentss/WeatherItems";
import storm from './img/weather-icons/storm.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherList: FakeWeather.list,
    };
  }

  handleInputChange = (value) => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <header>
          <SearchComp />
        </header>
        <main>
          <WeatherItemComp lowTemp={Math.round(this.state.weatherList[1].main.temp_min - 273.15)} currentState={this.state.weatherList[2].weather[0].description} highTemp={Math.round(this.state.weatherList[1].main.temp_max - 273.15)} pressure={this.state.weatherList[1].main.pressure} humidity={this.state.weatherList[1].main.humidity} humidity={this.state.weatherList[0].main.humidity} 
        pressure={this.state.weatherList[0].main.pressure}/>
          <div className="weather-next">
          {this.state.weatherList.map((item,index) =>{
                  if(index > 0 && index <8){
                    return  <WeatherItems time={item.dt_txt} dayDegree={item.main.temp} />
                  }
                }
          )}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
