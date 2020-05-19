import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div className="outPut">
        <img
          alt={this.props.icon}
          src={this.props.icon}
        />

        {this.props.country && this.props.city &&
          <p><span className="title">Location:</span> {this.props.city}, {this.props.country} </p>}
        {this.props.temperatureMax &&
          <p><span className="title">Max:</span> {Math.round(this.props.temperatureMax)} ºC</p>}

        {this.props.temperatureMin &&
          <p><span className="title">Min:</span> {Math.round(this.props.temperatureMin)} ºC</p>}

        {this.props.humidity &&
          <p><span className="title">Humidity:</span> {this.props.humidity}</p>}

        {this.props.feelsLike &&
          <p><span className="title">Feels like:</span> {Math.round(this.props.feelsLike)} ºC</p>}

        {this.props.error && <p className="error">{this.props.error}</p>}


      </div>
    );
  }
};


export default Weather;