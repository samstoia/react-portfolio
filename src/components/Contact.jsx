import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/Contact.css';
import Navbar from './Navbar';
import {apiKey, authDomain, databaseURL, storageBucket, messagingSenderId, appId} from '../config';

import Firebase from 'firebase';
const uuidv4 = require('uuid/v4');
require('dotenv').config();




class Contact extends React.Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp({apiKey, authDomain, databaseURL, storageBucket, messagingSenderId, appId});
    this.state = {
      message: [],
      submitted: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.writeUserData = this.writeUserData.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }
 

  writeUserData = () => {
    Firebase.database().ref('/').child('submission/').push(this.state.message);
    console.log('DATA SAVED');
  }


  handleSubmit = (event) => {
    event.preventDefault();
    let email = "email: " + this.refs.email.value;
    let subject = "subject: " + this.refs.subject.value;
    let message = "message: " + this.refs.message.value;
    let id = uuidv4();


    if (email && subject && message) {
      if (this.state.message.length > 0) {
        this.state.message = [];
      }
      const newState = Object.assign({}, this.state)
      newState.message.push(email, subject, message, id)
      this.setState({ state: newState });
    }
    this.refs.email.value = '';
    this.refs.subject.value = '';
    this.refs.message.value = '';
    alert(`Thanks for your message, I'll get in touch at your ${email} shortly`)
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="pageContainer">

          <div className="formContainer">
            <div>
              <h2>Contact Me</h2>
              <p>If you want to reach me about a job or a past project, please fill out the form below.</p>
            </div>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Your Email address</Form.Label>
                <Form.Control ref="email" id="email" type="email" placeholder="name@example.com" required />
              </Form.Group>
              <Form.Group>
                <Form.Label>What is this about?</Form.Label>
                <Form.Control ref="subject" id="subject" type="text" placeholder="Why are you contacting me?" required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Describe request in-depth:</Form.Label>
                <Form.Control ref="message" id="message" as="textarea" rows="3" required />
              </Form.Group>
              <div className="buttonDiv">
                <Button name="submit" variant="primary" type="submit" id="submit" value="submit">
                  Submit
              </Button>
              
              </div>
            </Form>

        </div>
        
        
      </div>
    </div>
    )
  }
}

export default Contact;