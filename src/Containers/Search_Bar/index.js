import React, { Component } from 'react';
import './styles.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchWeather } from '../../Actions/index'


class Search_Bar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};


  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group col-md-6 col-md-offset-3">
        <input
          placeholder="Get a five-day forcast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
					<button type="Submit" className="btn btn-secondary">Submit</button>
				</span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search_Bar);
