import React from 'react';
import axios from 'axios';

import PageTransitionGroup from '../components/PageTransitionGroup';

export default class Contact extends React.Component {
  constructor() {
    super();

    this.STORAGE_CONTACT_KEY = "CONTACT_DATA";
    let sessionData = JSON.parse(sessionStorage.getItem(this.STORAGE_CONTACT_KEY));

    if(sessionData) {
      this.state = {
        name: sessionData.name,
        email: sessionData.email,
        subject: sessionData.subject,
        message: sessionData.message,
        isSending: false
      }
    } else {
      this.state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        isSending: false
      }
    }
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.state.isSending) return;

    this.setState({
      isSending: true,
      submitButtonValue: 'sending...'
    });

    //create data object (without the isSending value)
    let data = Object.assign({}, this.state);
    delete data.isSending;

    axios.post('/api/send_email.php', data)
    .then((res) => {
      if(res.status === 200) {
        sessionStorage.removeItem(this.STORAGE_CONTACT_KEY);

        this.setState({
          name: '',
          email: '',
          subject: '',
          message: '',
          isSending: false
        });
      }
    }).catch((err) => {
      console.log(err);
      this.setState({
        isSending: false
      });
    });
  }

  componentWillUnmount() {
    sessionStorage.setItem(this.STORAGE_CONTACT_KEY, JSON.stringify(this.state));
  }

  onChange(event) {
    let inputField = event.target.name;
    let newState = {};
    newState[inputField] = event.target.value;
    this.setState(newState);
  }

  render () {
    return (
      <PageTransitionGroup component="section">
        <h1>Contact</h1>
        <div className="row">
          <p className="col-lg-12">
            Sit tight – I am working on the site and real content will be available soon!
          </p>
        </div>
        <form className="row" id="contact-form" onSubmit={this.onSubmit.bind(this)}>
          <div className="col-md-4">
            <label>Name</label>
            <input name="name" onChange={this.onChange.bind(this)}
                   value={this.state.name} type="text" placeholder="Full name"
                   required />
          </div>
          <div className="col-md-4">
            <label>Email</label>
            <input name="email" onChange={this.onChange.bind(this)}
                   value={this.state.email} type="email" placeholder="Email address"
                   required />
          </div>
          <div className="col-md-4">
            <label>Subject</label>
            <input name="subject" onChange={this.onChange.bind(this)}
                   value={this.state.subject} type="text" placeholder="Subject"
                   required />
          </div>
          <div className="col-sm-12">
            <label>Message</label>
            <textarea name="message" onChange={this.onChange.bind(this)}
                      value={this.state.message} placeholder="Message"
                      required />
          </div>
          <div className="col-sm-12">
            <input className={(this.state.isSending ? 'busy' : 'ready') + ' button'}
                   type="submit" value={this.state.isSending ? 'sending...' : 'send'}
                   required />
          </div>
        </form>
      </PageTransitionGroup>
    );
  }
}
