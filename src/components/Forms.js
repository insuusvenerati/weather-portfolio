import React from 'react';
import {Button, Form} from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Forms extends React.Component {
  render() {
    return (
      <Form onSubmit={this.props.getWeather}>
        <Form.Group widths="equal">
          <Form.Input type="text" name="city" placeholder="City" />
          <Form.Input type="text" name="country" placeholder="Country" />
        </Form.Group>
        <Button>Get Weather</Button>
      </Form>
    );
  }
}

Forms.propTypes = {
  getWeather: PropTypes.string,
};
export default Forms;
