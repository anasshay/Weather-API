import React, { Component } from 'react'

export default class WeatherItems extends Component {
    render() {
        return (
              <div className='weather-next-item'>
              <span classNane='icon-time'>3:00</span>
              <img src='https://placekitten.com/200/300' alt='placeholder'/>
              <span className='icon-temperature'>10°C</span>
              </div>
        )
    }
}
