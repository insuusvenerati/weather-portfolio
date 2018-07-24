import React from 'react';
import PropTypes from 'prop-types';

class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.city &&
          this.props.country && (
            <p>
              {' '}
              Location: {this.props.city}, {this.props.country}
            </p>
          )}
        {this.props.temperature && (
          <p> Temperature: {this.props.temperature}</p>
        )}
        {this.props.humidity && <p> Humidity: {this.props.humidity}</p>}
        {this.props.description && <p> Conditions: {this.props.description}</p>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

Weather.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  temperature: PropTypes.number,
  humidity: PropTypes.number,
  description: PropTypes.string,
  error: PropTypes.string,
};
export default Weather;
