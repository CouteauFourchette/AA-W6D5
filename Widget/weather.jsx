import React from 'react';

class Weather extends React.Component{
  constructor() {
    super();

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(this.getWeather, console.log, options);
    // 6dbaf7780d5dd1bb47fd0365eab5223d
  }

  getWeather(pos) {
    const crd = pos.coords;
    const lat = crd.latitude;
    const long = crd.longtitude;
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
             console.log(xmlhttp.response);
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
    xmlhttp.open("GET", `https://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20weather.forecast%20where%20woeid%20in%20(SELECT%20woeid%20FROM%20geo.places%20WHERE%20text%3D%22(${lat}%2C(${long})%22)&format=json&diagnostics=true&callback=`, true);
    xmlhttp.send();
  }

  render() {
    return ( <div>Weather {this.lat}</div>);
  }
}

export default Weather;
