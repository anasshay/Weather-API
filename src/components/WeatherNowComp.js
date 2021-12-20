import React from 'react'
import storm from '../img/weather-icons/storm.svg'
import fakeWeather from "../data/FakeWeather.json"
import "../App.css"



export default class WeatherNowComp extends React.Component {


  render() {
    return (
      <div>
        <div class="weather-now">
            <img className='weather-now-icon' src={this.props.weatherIcon} alt='storm' />
            <h3 className='weather-now-text'>{this.props.currentState}</h3>
            <div classNsame="weather-now-description">
              <p className='temperature'><span className='bold-span'>Temperature</span> {this.props.lowTemp}°C to {this.props.highTemp}°C</p>
              <div className='hum-pre'>
                <span className='bold-span'>Humidity</span>
                <span className='value'>{this.props.humidity}%</span>
                <span className='bold-span'>Pressure</span>
                <span className='value'>{this.props.pressure}</span>
              </div>
              </div>
        </div>
      </div>
    )
  }
}
