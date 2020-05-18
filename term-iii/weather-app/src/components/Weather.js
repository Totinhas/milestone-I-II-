import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        <img
          alt={this.props.icon}
          src={this.props.icon}
        />

        {this.props.country && this.props.city &&
          <p>Location: {this.props.city}, {this.props.country} </p>}
        {this.props.temperatureMax &&
          <p>Max: {Math.round(this.props.temperatureMax)} ºC</p>}

        {this.props.temperatureMin &&
          <p>Min: {Math.round(this.props.temperatureMin)} ºC</p>}

        {this.props.humidity &&
          <p>Humidity: {this.props.humidity}</p>}

        {this.props.feelsLike &&
          <p>Feels like: {Math.round(this.props.feelsLike)} ºC</p>}

        {this.props.error && <p>{this.props.error}</p>}


      </div>
    );
  }
};


export default Weather;