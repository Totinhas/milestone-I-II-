import React from "react"; //import the React object from the "react" package
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const APIKey = "1dd19a616dc63d6585c2578c4fa4c9e3";




class App extends React.Component {
  state = {
    temperatureMax: undefined,
    temperatureMin: undefined,
    city: undefined,
    humidity: undefined,
    icon: undefined,
    feelsLike: undefined,
    error: undefined,

  };
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},&units=metric&APPID=${APIKey}`);
    const data = await api_call.json();

    if (city) {
      console.log(data);
      this.setState({
        temperatureMax: data.main.temp_max,
        temperatureMin: data.main.temp_min,
        country: data.sys.country,
        city: data.name,
        humidity: data.main.humidity,
        icon: "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png",
        feelsLike: data.main.feels_like,
        error: ""

      });

    } else {
      this.setState({
        temperatureMax: undefined,
        temperatureMin: undefined,
        city: undefined,
        humidity: undefined,
        icon: undefined,
        feelsLike: undefined,
        error: "Please enter a valid city",
      });
    }
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temperatureMax={this.state.temperatureMax}
          temperatureMin={this.state.temperatureMin}
          country={this.state.country}
          city={this.state.city}
          icon={this.state.icon}
          feelsLike={this.state.feelsLike}
          error={this.state.error}
        />
      </div >
    );

  }
}; //creates an instance of App and that instance is extendind React.component

export default App; //makes the component available for other files to import