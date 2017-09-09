import React, {Component} from 'react';
import {connect} from 'react-redux';
import GoogleMap from '../../Components/Google_Map';
import './styles.css'


class Weather extends Component{

  renderWeather(cityData){
    const name = cityData.name;
    const temp = cityData.main.temp;
    const pressure = cityData.main.pressure;
    const humidity = cityData.main.humidity;
    const { lon, lat } = cityData.coord;


    return (
      <tbody key={name}>
        <tr >
          <td>{name}</td>
          <td> {(temp - 273.15).toFixed(0)}</td>
          <td> {pressure * 0.75}</td>
          <td> {humidity}  </td>
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
          <th>Presure (mm cl. mr.)</th>
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

