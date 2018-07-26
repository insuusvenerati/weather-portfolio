import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const Forms = () => (
      <Form onSubmit={this.props.getWeather}>
        <Form.Group widths="equal">
          <Form.Input type="text" name="city" placeholder="City" />
          <Form.Input type="text" name="country" placeholder="Country" />
        </Form.Group>
        <Button>Get Weather</Button>
      </Form>
)

export default Forms;
