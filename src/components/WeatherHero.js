import React, { PureComponent } from 'react'
import 'semantic-ui-css/semantic.min.css';
import PropTypes from 'prop-types';
import { Container, Segment, Header } from 'semantic-ui-react'

const weatherDataShape = PropTypes.shape({
  temperature: PropTypes.number,
  city: PropTypes.string,
  country: PropTypes.string,
  humidity: PropTypes.number,
  description: PropTypes.string,
})

export default class WeatherHero extends PureComponent {
    static propTypes = {
      weatherData: weatherDataShape.isRequired,
      getWeather: PropTypes.func.isRequired
    }

  handleSumbit = (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    this.props.getWeather(city, country);    
  }

  render() {
    const { weatherData } = this.props;
    return (
      <Segment style={{ backgroundColor: '#2c3e50' }} >
      <Header
        inverted
        style={{
          backgroundColor: '#2c3e50',
          fontSize: '4em',
          fontWeight: 'normal',
          marginBottom: '2em',
          marginTop: '2em'
        }}>
        Sean Norwood
        <h3 as='title-container__subtitle' > Hi, I make neat stuff on the internet </h3>
      </Header>
        <Container>
          <form className='form-container' onSubmit={this.handleSumbit} >
            <div className='grouped fields'>
              <div className='field'>
                <input type="text" name="city" placeholder="City" />
              </div>
              <div className='field'>
                <input type="text" name="country" placeholder="Country" />
              </div>
              <div className='field'>
                <button type='submit'>Get Weather</button>
              </div>
          </div>
          </form>
          <div className='weather__info'>
            <p className="weather__key">Temperature: <span className="weather__value">{weatherData.temperature}&deg;C</span> </p>
            <p className="weather__key">Location: <span className="weather__value">{weatherData.city}, {weatherData.country}</span> </p>
            <p className="weather__key">Humidity: <span className="weather__value">{weatherData.humidity}</span> </p> 
            <p className="weather__key">Conditions: <span className="weather__value">{weatherData.description}</span> </p>
          </div>
        </Container>
      </Segment>
    )
  }
}