import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      firstNameFocused: '',
      firstNameFilled: '',
      lastName: '',
      lastNameFocused: '',
      lastNameFilled: ''
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFocus(event) {
    this.setState({ [`${event.target.id}Focused`]: 'focused' });
  }

  handleBlur(event) {
    if (event.target.value.length > 0) {
      this.setState({ [`${event.target.id}`]: event.target.value });
      this.setState({ [`${event.target.id}Filled`]: 'filled' });
    } else {
      this.setState({ [`${event.target.id}Focused`]: '' });
      this.setState({ [`${event.target.id}Filled`]: '' });
    }
  }

  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value });
  }

  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value });
  }

  handleClear() {
    this.setState({
      firstName: '',
      firstNameFocused: '',
      firstNameFilled: '',
      lastName: '',
      lastNameFocused: '',
      lastNameFilled: ''
    });
  }

  handleSubmit(event) {
    alert(`Submitted for: ${this.state.firstName} ${this.state.lastName}`); // eslint-disable-line
    event.preventDefault();
  }

  render() {
    const {
      firstName,
      firstNameFocused,
      firstNameFilled,
      lastName,
      lastNameFocused,
      lastNameFilled
    } = this.state;
    return (
      <div className="login-wrapper">
        <form className="login" onSubmit={this.handleSubmit}>
          <div className={`form-group ${firstNameFocused}`}>
            <label className="form-label" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              className={`form-input ${firstNameFilled}`}
              type="text"
              value={firstName}
              onFocus={this.handleFocus}
              onChange={this.handleFirstNameChange}
              onBlur={this.handleBlur}
            />
          </div>
          <div className={`form-group ${lastNameFocused}`}>
            <label className="form-label" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              className={`form-input ${lastNameFilled}`}
              type="text"
              value={lastName}
              onFocus={this.handleFocus}
              onChange={this.handleLastNameChange}
              onBlur={this.handleBlur}
            />
          </div>
          <div className="action-group">
            <input
              className="action-button form-clear"
              type="button"
              value="Clear"
              onClick={this.handleClear}
            />
            <input
              className="action-button form-submit"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
