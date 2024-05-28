import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: '',
      hasEmailError: false,
      /* Add the states "content" and "hasContentError" */
      
      
    };
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState({
      email: inputValue,
      hasEmailError: isEmpty,
    });
  }

  /* Declare the method handleContentChange */
  

  handleSubmit() {
    this.setState({isSubmitted: true});
  }

  render() {
    let emailErrorText;
    if (this.state.hasEmailError) {
      emailErrorText = (
        <p className='contact-message-error'>
          Please enter your email address
        </p>
      );
    }
    
    /* Declare the variable contentErrorText */
    
    
    /* Create an if statement with hasContentError as the condition */
    
    
    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <div className='contact-submit-message'>
          Sent Successfully
        </div>
      );
    } else {
      contactForm = (
        <form onSubmit={() => {this.handleSubmit()}} >
          <p>Email Address (required)</p>
          <input
            value={this.state.email}
            onChange={(event) => {this.handleEmailChange(event)}}
          />
          {emailErrorText}
          <p>Message (required)</p>
          {/* Add the value and an onChange event */}
          <textarea
            
            
          />
          {/* Display contentErrorText  */}
          
          
          <input
            type='submit'
            value='Send'
          />
        </form>
      );
    }
    
    return (
      <div className='contact-form'>
        {contactForm}
      </div>
    );
  }
}

export default ContactForm;
