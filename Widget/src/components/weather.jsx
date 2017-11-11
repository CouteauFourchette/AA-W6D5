import React from 'react';

class Weather extends React.Component{
  constructor() {
    super();
    this.state = {
      location: '',
      temp: '',
      description: '',
    }
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(this.getWeather.bind(this), console.log, options);
    // 6dbaf7780d5dd1bb47fd0365eab5223d
  }

  getWeather(pos) {
    const crd = pos.coords;
    const lat = crd.latitude;
    const lon = crd.longitude;
    const that = this;
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
        if (xmlhttp.status == 200) {
          const apiResponse = JSON.parse(xmlhttp.response);

          const results = apiResponse.query.results.channel;

          that.setState({
            location: results.location.city,
            temp: results.item.condition.temp,
            description: results.item.condition.text
          });
          //  document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
        }
        else if (xmlhttp.status == 400) {
          alert('There was an error 400');
        }
        else {
          alert('something else other than 200 was returned');
        }
      }
    };

    xmlhttp.open("GET", `https://query.yahooapis.com/v1/public/yql?q=select%20location%2C%20item.condition%20from%20weather.forecast%20where%20woeid%20in%20(SELECT%20woeid%20FROM%20geo.places%20WHERE%20text%3D%22(${lat}%2C${lon})%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&format=json`, true);
    xmlhttp.send();
  }

  render() {
    return (<div>Weather {this.state.temp} {this.state.description} {this.state.location}</div>);
  }
}

export default Weather;
