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
          <Form action='./send.php' method="POST">
            <Form.Group>
              <Form.Label>Your Email address</Form.Label>
              <Form.Control name="email" id="email" type="email" placeholder="name@example.com" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>What is this about?</Form.Label>
              <Form.Control name="subject" id="subject" type="text" placeholder="Why are you contacting me?" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Describe request in-depth:</Form.Label>
              <Form.Control name="message" id="message" as="textarea" rows="3" required />
            </Form.Group>
            <div className="buttonDiv">
              <Button name="submit" variant="primary" type="submit" id="submit" value="submit">
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