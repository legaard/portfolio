import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { resetPagePosition } from '../utils/page';
import PageTransitionGroup from '../components/PageTransitionGroup';
import * as contactActions from '../actions/contact';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.inputName = {
      name: 'name',
      email: 'email',
      subject: 'subject',
      message: 'message'
    };
  }

  componentWillMount() {
    resetPagePosition();
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.props.isSending) return;
    
    const data = {
      name: this.props.name,
      email: this.props.email,
      subject: this.props.subject,
      message: this.props.message
    }

    this.props.sendMessage(data); 
  }

  onChange(event) {
    const value = event.target.value;
    const inputName = event.target.name;

    switch(inputName) {
      case this.inputName.name:
        this.props.updateName(value);
        break;
      case this.inputName.email:
        this.props.updateEmail(value);
        break;
      case this.inputName.subject:
        this.props.updateSubject(value);
        break;
      case this.inputName.message:
        this.props.updateMessage(value);
        break;
    }
  }

  render () {
    return (
      <PageTransitionGroup component="section">
        <h1>Contact</h1>
        <div className="row">
          <p className="col-lg-12">
            If you have any questions or just want to chat, feel free to reach out to me on a social network (links can be found in the lower right corner) or fill out the contact form below – I will get back to you as soon as possible.
          </p>
        </div>
        <form className="row" id="contact-form" onSubmit={this.onSubmit.bind(this)}>
          <div className="col-md-4">
            <label>Name</label>
            <input name={this.inputName.name} onChange={this.onChange.bind(this)}
                   value={this.props.name} type="text" placeholder="Full name"
                   required />
          </div>
          <div className="col-md-4">
            <label>Email</label>
            <input name={this.inputName.email} onChange={this.onChange.bind(this)}
                   value={this.props.email} type="email" placeholder="Email address"
                   required />
          </div>
          <div className="col-md-4">
            <label>Subject</label>
            <input name={this.inputName.subject} onChange={this.onChange.bind(this)}
                   value={this.props.subject} type="text" placeholder="Subject"
                   required />
          </div>
          <div className="col-sm-12">
            <label>Message</label>
            <textarea name={this.inputName.message} onChange={this.onChange.bind(this)}
                      value={this.props.message} placeholder="Message"
                      required />
          </div>
          <div className="col-sm-12">
            <input className={(this.props.isSending ? 'busy' : 'ready') + ' button'}
                   type="submit" value={this.props.isSending ? 'sending...' : 'send'}
                   required />
          </div>
        </form>
      </PageTransitionGroup>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    name: state.contactReducer.senderName,
    email: state.contactReducer.senderEmail,
    subject: state.contactReducer.subject,
    message: state.contactReducer.message,
    isSending: state.contactReducer.isSending,
    errorMessage: state.contactReducer.error
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (data) => {
      dispatch(contactActions.send());
      
      axios.post('/api/send_email.php', data)
        .then((response) => {
          if(response.status === 200) {
            dispatch(contactActions.clearInput());
          }
        })
        .catch((err) => {
          console.log(err);          
          dispatch(contactActions.setError('Failed to send message via contact form'));
        });
    },
    updateName: (name) => {
      dispatch(contactActions.setSenderName(name));
    },
    updateEmail: (email) => {
      dispatch(contactActions.setSenderEmail(email));
    },
    updateSubject: (subject) => {
      dispatch(contactActions.setSubject(subject));
    },
    updateMessage: (message) => {
      dispatch(contactActions.setMessage(message));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)