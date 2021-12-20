import React, { Component } from "react";
import { render } from "react-dom";

export default class WeatherItem extends Component {
  render() {
    return <div className='weather-next-item'>
    <span classNane='icon-time'>{this.props.time}</span>
    <img src='https://placekitten.com/200/300' alt='placeholder'/>
    <span className='icon-temperature'>{this.props.temp}°C</span>
    </div>
  }
}
