import React, { FormEvent } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Dispatch } from 'redux';

import { sessionSetToken } from '../../state/redux/actions/session-actions';
import { IUserName, userSetName } from '../../state/redux/actions/user-actions';

import './login.scss';

interface ILoginProps {
  user: IUserName;
  setToken: any;
  setName: any;
}

class Login extends React.Component<ILoginProps> {
  public state = {
    firstName: '',
    firstNameFocus: false,
    lastName: '',
    lastNameFocus: false,
    redirectToHome: false
  };
  private handleFieldFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const fieldName = `${e.target.id}Focus`;
    this.setState({
      [fieldName]: true
    });
  };
  private handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.id;
    this.setState({
      [fieldName]: e.target.value
    });
  };
  private handleFieldBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value || e.target.value.length < 1) {
      const fieldName = `${e.target.id}Focus`;
      this.setState({
        [fieldName]: false
      });
    }
  };
  public handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (this.state.firstName.length > 0 && this.state.lastName.length > 0) {
      this.props.setToken(`${this.state.firstName.toUpperCase()}_${this.state.lastName.toUpperCase()}_TOKEN`);
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
          <div className={`form__input-group${this.state.firstNameFocus ? ' focused' : ''}`}>
            <label htmlFor="firstName" className="form__label">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="form__input"
              value={this.state.firstName}
              onFocus={this.handleFieldFocus}
              onChange={this.handleFieldChange}
              onBlur={this.handleFieldBlur}
            />
          </div>
          <div className={`form__input-group${this.state.lastNameFocus ? ' focused' : ''}`}>
            <label htmlFor="lastName" className="form__label">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="form__input"
              value={this.state.lastName}
              onFocus={this.handleFieldFocus}
              onChange={this.handleFieldChange}
              onBlur={this.handleFieldBlur}
            />
          </div>
        </section>
        <section className="login__cta">
          <input type="submit" value="log in" className="button__cta" onClick={this.handleSubmit} />
          <Link to="/home" className="form__link">
            register
          </Link>
        </section>
      </form>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { user: state.user };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setName: (name: IUserName) => {
      dispatch(userSetName(name));
    },
    setToken: (token: string) => {
      dispatch(sessionSetToken(token));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
