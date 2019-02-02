import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Dispatch } from 'redux';

import { sessionSetOAuthToken } from 'state/redux/actions/session-actions';
import { UserName, userSetName } from 'state/redux/actions/user-actions';
import TextInput from 'components/text-input/TextInput';
import { validatePassword } from 'utils/user-utils';

import './login.scss';

interface LoginProps {
  setName: (name: UserName) => void;
  setOAuthToken: (token: string) => void;
}

interface LoginState {
  redirectToHome: boolean;
  [x: string]: string | boolean;
}

class Login extends React.Component<LoginProps, LoginState> {
  public state = {
    redirectToHome: false
  };
  private usernameInput = React.createRef<TextInput>();
  private passwordInput = React.createRef<TextInput>();
  public componentDidMount() {
    if (this.usernameInput.current) {
      this.usernameInput.current.setFocus();
    }
  }
  public handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    let usernameValid = false;
    let passwordValid = false;
    if (this.usernameInput.current && this.usernameInput.current.validate()) {
      usernameValid = true;
    }
    if (this.passwordInput.current && this.passwordInput.current.validate()) {
      passwordValid = true;
    }
    if (usernameValid && passwordValid) {
      const firstName = 'AUTHENTICATED_FIRST_NAME';
      const lastName = 'AUTHENTICATED_LAST_NAME';
      const ot = 'AUTHENTICATED_TOKEN';
      this.props.setOAuthToken(ot);
      this.props.setName({ firstName, lastName });
      this.setState({
        redirectToHome: true
      });
    } else {
      if (!usernameValid && this.usernameInput.current) {
        this.usernameInput.current.setFocus();
      } else if (!passwordValid && this.passwordInput.current) {
        this.passwordInput.current.setFocus();
      }
    }
  };
  public render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/home" />;
    }

    return (
      <form className="login">
        <section className="login__fields">
          <TextInput ref={this.usernameInput} inputId="username" label="Username" isRequired />
          <TextInput
            ref={this.passwordInput}
            inputId="password"
            label="Password"
            type="password"
            validate={validatePassword}
            isRequired
          />
        </section>
        <section className="login__cta-section">
          <input type="submit" value="log in" onClick={this.handleSubmit} />
          <Link to="/home" className="login__link">
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
