import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Dispatch } from 'redux';

import { sessionSetOAuthToken } from 'state/redux/actions/session-actions';
import { UserName, userSetName } from 'state/redux/actions/user-actions';
import TextInput from 'components/text-input/TextInput';

import './login.scss';

interface LoginProps {
  setName: (name: UserName) => void;
  setOAuthToken: (token: string) => void;
}

// TODO: Define the state interface (how do we define dynamic key names?)
interface LoginState {
  firstName: string;
  lastName: string;
  redirectToHome: boolean;
  [x: string]: string | boolean;
}

class Login extends React.Component<LoginProps, LoginState> {
  public state = {
    firstName: '',
    lastName: '',
    redirectToHome: false
  };
  private handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.id;
    this.setState({
      [fieldName]: e.target.value
    });
  };
  public handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (this.state.firstName.length > 0 && this.state.lastName.length > 0) {
      const ot = `${this.state.firstName.toUpperCase()}_${this.state.lastName.toUpperCase()}_TOKEN`;
      this.props.setOAuthToken(ot);
      this.props.setName({ firstName: this.state.firstName, lastName: this.state.lastName });
      this.setState({
        redirectToHome: true
      });
    }
  };
  public render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/home" />;
    }

    return (
      <form className="login">
        <section className="login__fields">
          <TextInput inputId="firstName" label="First Name" onChange={this.handleFieldChange} />
          <TextInput inputId="lastName" label="Last Name" onChange={this.handleFieldChange} />
        </section>
        <section className="login__cta-section">
          <input type="submit" value="log in" className="button__cta" onClick={this.handleSubmit} />
          <Link to="/home" className="form__link">
            register
          </Link>
        </section>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setName: (name: UserName) => dispatch(userSetName(name)),
    setOAuthToken: (token: string) => dispatch(sessionSetOAuthToken(token))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
