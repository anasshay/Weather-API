import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

import SearchComp from "./Componentss/SearchComp";
import WeatherItemComp from "./Componentss/WeatherItemComp";
import WeatherItems from "./Componentss/WeatherItems";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Anass",
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
          <WeatherItemComp />

          <div className="weather-next">
            <WeatherItems time='3:00' imgSrc='https://placekitten.com/200/300' temp='10°C'/>
            <WeatherItems />
            <WeatherItems />
            <WeatherItems />
            <WeatherItems />
            <WeatherItems />
            <WeatherItems />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
