import React, { Component } from 'react'
import storm from '../img/weather-icons/storm.svg'


export default class WeatherItemComp extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}
