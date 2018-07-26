import React from 'react';

class Weather extends React.PureComponent {
  render() {
    return (
      <div>
        {this.city &&
          this.country && (
            <p>
              {' '}
              Location: {this.city}, {this.country}
            </p>
          )}
        {this.temperature && (
          <p> Temperature: {this.temperature}</p>
        )}
        {this.humidity && <p> Humidity: {this.humidity}</p>}
        {this.description && <p> Conditions: {this.description}</p>}
        {this.error && <p>{this.error}</p>}
      </div>
    );
  }
}
export default Weather;
