import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/Contact.css';
import Navbar from './Navbar';



function Contact() {
  return (
    <div>
      <Navbar />
      <div className="pageContainer">

        <div className="formContainer">
          <div>
            <h2>Contact Me</h2>
            <p>If you want to reach me about a job or a past project, please fill out the form below.</p>
          </div>
          <Form>
            <Form.Group controlId="emailInput">
              <Form.Label>Your Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" required />
            </Form.Group>
            <Form.Group controlId="reasonInput">
              <Form.Label>What is this about?</Form.Label>
              <Form.Control type="text" placeholder="Why are you contacting me?" required />
            </Form.Group>
            <Form.Group controlId="descriptionInput">
              <Form.Label>Describe request in-depth:</Form.Label>
              <Form.Control as="textarea" rows="3" required />
            </Form.Group>
            <div className="buttonDiv">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>

        <div className="bottomDiv">
          <p>&#169; Sam Stoia</p>
        </div>
      </div >

    </div>

  )
}

export default Contact;