import React, {Component} from 'react';
import {connect} from 'react-redux';
import GoogleMap from '../../Components/Google_Map';
import './styles.css'


class Weather extends Component{

  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;


    return (
      <tbody key={name}>
        <tr >
          <td>{name}</td>
          <td> {(temps[0]- 275.15).toFixed(0)}</td>
          <td> {pressure[0]}</td>
          <td> {humidity[0]}  </td>
        </tr>
        <tr>
          <td colSpan={4} className="map">
            <GoogleMap lon={lon} lat={lat}/>
          </td>
        </tr>
      </tbody>
    );
  }


  render(){
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature (C)</th>
          <th>Presure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
        </thead>
        {this.props.weather.map(this.renderWeather)}

      </table>
    );
  }
}

function mapStateToProps({weather}){
  return { weather };  //return { weather: weather };
}


export default connect(mapStateToProps)(Weather)

