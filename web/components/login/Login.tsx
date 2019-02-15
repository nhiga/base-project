import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { AppState } from 'state/redux/store';
import { UserActionType, userLogin } from 'state/redux/actions/user-actions';
import TextInput from 'components/text-input/TextInput';

import './login.scss';

interface LoginProps extends RouteComponentProps {
  isAuthenticated?: boolean;
  login: (username: string, password: string) => (dispatch: Dispatch) => void;
}

class Login extends React.Component<LoginProps> {
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

    if (this.usernameInput.current && this.passwordInput.current) {
      if (this.usernameInput.current && this.usernameInput.current.validate()) {
        usernameValid = true;
      }
      if (this.passwordInput.current && this.passwordInput.current.validate()) {
        passwordValid = true;
      }
      if (usernameValid && passwordValid) {
        this.props.login(this.usernameInput.current.getValue(), this.passwordInput.current.getValue());
      } else {
        if (!usernameValid && this.usernameInput.current) {
          this.usernameInput.current.setFocus();
        } else if (!passwordValid && this.passwordInput.current) {
          this.passwordInput.current.setFocus();
        }
      }
    } else {
      // TODO: If we get here it means we lost references to the inputs. Reload the page?
      console.log(`[Login] Invalid input reference`);
    }
  };
  public render() {
    if (this.props.isAuthenticated) {
      let from;
      if (this.props.location && this.props.location.state) {
        from = this.props.location.state.from;
      }
      return <Redirect to={from ? from : '/home'} />;
    }

    // TODO: Create Form component
    return (
      <form className="login">
        <section className="login__fields">
          <TextInput ref={this.usernameInput} inputId="username" label="Username" isRequired />
          <TextInput ref={this.passwordInput} inputId="password" label="Password" type="password" isRequired />
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

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.session.isAuthenticated
});

const mapDispatchToProps = (dispatch: Dispatch | ThunkDispatch<{}, {}, UserActionType>) => ({
  login: (username: string, password: string) => dispatch<any>(userLogin(username, password))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
