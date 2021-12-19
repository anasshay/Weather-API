import React, { Component } from 'react'

export default class WeatherItems extends Component {
    render(props) {
        return (
              <div className='weather-next-item'>
              <span classNane='icon-time'>{this.props.time}</span>
              <img src={this.props.imgSrc} alt='placeholder'/>
              <span className='icon-temperature'>{this.props.temp}</span>
              </div>
        )
    }
}
