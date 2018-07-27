import React from 'react';
import './App.css'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Segment } from 'semantic-ui-react';
import Home from './containers/Home';
import Projects from './containers/Projects'
import About from './containers/About'
import Contact from './containers/Contact'
import Footer from './components/Footer';
import WeatherHero from './components/WeatherHero';
import NavBar from './components/NavBar'

const API_KEY = 'aa9476d2924eaebdf8e2721732d32901';

function getPosition(opts) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, opts);
  })
}

// Initialise the component
class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined
  };

  componentDidMount() {
    if(navigator.geolocation) {
      getPosition().then(this.getWeatherCoords)
    } else {
      this.getWeather('London', 'UK');
    }
  }

  getWeatherCoords = async (pos) => {
    const API_CALL = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${API_KEY}&units=metric`
    );

    const data = await API_CALL.json();
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
    });
  }

  getWeather = async (city, country) => {
    const API_CALL = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );

    const data = await API_CALL.json();
    console.log(data)
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
    });
  };

  render() {
    return (
        <Router>
          <div>
            <Segment vertical textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }}>          
              <NavBar />
              <WeatherHero weatherData={this.state} getWeather={this.getWeather} />
            </Segment>
              <Container>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                </Switch>
              </Container>
            <Footer />
            </div>
        </Router>
    )
  }
}

export default App;
