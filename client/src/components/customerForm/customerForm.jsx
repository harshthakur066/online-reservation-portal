import React from "react";
import { Form, Dropdown } from "semantic-ui-react";

const options = [
  { key: 1, text: "Restaurent", value: "Restaurent" },
  { key: 2, text: "Spa", value: "Spa" },
  { key: 3, text: "Saloon", value: "Saloon" },
  { key: 4, text: "Hotels", value: "Hotels" },
];

const customerForm = () => {
  return (
    <div>
      <h3>Facility Booking Form</h3>
      <h5>Fill this form to book the facility you are looking for</h5>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Enter your name"
            required
          />
          <Form.Input
            fluid
            label="Mobile number"
            placeholder="Enter your mobile number"
            required
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Email"
            placeholder="Enter your email"
            type="email"
            required
          />
          <Form.Input
            fluid
            label="Phone number"
            placeholder="Enter your phone number"
          />
        </Form.Group>
        <Form.TextArea label="Address" placeholder="Enter your address" />
        <Form.Group>
          <div style={{ backgroundColor: "" }}>
            <b>Facilities:</b>

            <Dropdown
              style={{ marginTop: "30px", fontSize: "1.5rem" }}
              fluid
              required
              placeholder="Choose your facility"
              options={options}
              openOnFocus
            />
          </div>
        </Form.Group>
        <Form.Button floated="right" primary>
          Submit
        </Form.Button>
      </Form>
    </div>
  );
};

export default customerForm;
