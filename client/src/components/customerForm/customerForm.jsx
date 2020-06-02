import React, { useState } from "react";
import { Form, Message, Modal, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const CustomerForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [facility, setFacility] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [open, setOpen] = useState(false);

  const history = useHistory();

  const close = () => {
    setOpen(false);
  };

  const closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    setOpen({ closeOnEscape, closeOnDimmerClick, open: true });
  };

  const formSubmit = async (body) => {
    try {
      setErrorMsg("");
      await axios.post("/api/v1/user", body);
      // alert("Form Submitted");
      history.push("/customer/thanks");
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userForm = {
      name: name,
      mobileNumber: mobile,
      email: email,
      address: address,
      phoneNumber: phone,
      facility: facility.toLowerCase(),
    };
    formSubmit(userForm);
  };

  return (
    <div>
      <h3 style={{ margin: " 20px 0px" }}>Facility Booking Form</h3>
      <Form onSubmit={onSubmit} error={!!errorMsg}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Enter your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Input
            fluid
            label="Mobile number"
            placeholder="Enter your mobile number"
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Email"
            placeholder="Enter your email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Input
            fluid
            label="Phone number"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Form.TextArea
          label="Address"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Form.Input
          fluid
          label="Facilities"
          placeholder="What type of facility you are looking for..."
          value={facility}
          onChange={(e) => setFacility(e.target.value)}
        />
        <Message error header="Oops!" content={errorMsg} />
        <Form.Button floated="right" primary>
          Submit
        </Form.Button>
      </Form>
      <div style={{ margin: " 20px 0px" }}>
        <h5>Please Check available facilities first</h5>
        <Modal
          open={open}
          className="container"
          trigger={
            <Button onClick={closeConfigShow(false, true)} secondary>
              Available Facilities
            </Button>
          }
        >
          <Modal.Header>Available Facilities</Modal.Header>
          <Modal.Content scrolling>
            <Modal.Description>
              <b>
                This are the available facilities for now please chose any one
                for your need.
              </b>
              <h5>
                <div style={{ margin: "5px" }}>1. Restaurant</div>
                <div style={{ margin: "5px" }}>2. Spa</div>
                <div style={{ margin: "5px" }}>3. Saloon</div>
                <div style={{ margin: "5px" }}>4. Hotel</div>
              </h5>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button positive onClick={close}>
              Done
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    </div>
  );
};

export default CustomerForm;
