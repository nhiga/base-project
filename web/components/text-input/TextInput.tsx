import React from 'react';

import Popover from 'components/popover/Popover';

import './text-input.scss';

type InputType = 'text' | 'password';
interface TextInputProps {
  inputId: string;
  label?: string;
  placeholder?: string;
  type?: InputType;
  className?: string;
  isRequired?: boolean;
  validate?: (
    value: string
  ) => {
    isValid: boolean;
    error: string;
  };
}

interface TextInputState {
  value: string;
  isFilled: boolean;
  isValid: boolean;
  error: string[];
}

class TextInput extends React.Component<TextInputProps, TextInputState> {
  public static defaultProps = {
    label: null,
    placeholder: null,
    isRequired: false
  };
  public state = {
    value: '',
    isFilled: false,
    isValid: true,
    error: []
  };
  private textInput = React.createRef<HTMLInputElement>();
  public setFocus = () => {
    if (this.textInput.current) {
      this.textInput.current.focus();
    }
  };
  public isValid = () => {
    return this.state.isValid;
  };
  public getValue = () => {
    return this.state.value;
  };
  public validate = () => {
    let isValid = false;
    const error: string[] = [];
    let validateResult;
    if (this.props.isRequired) {
      if (this.state.value && this.state.value.length > 0) {
        isValid = true;
      } else {
        isValid = false;
        error.push('This is a required field.');
      }
    } else {
      isValid = true;
    }
    if (this.props.validate) {
      validateResult = this.props.validate(this.state.value);
      isValid = validateResult.isValid;
      if (!validateResult.isValid) {
        error.push(validateResult.error);
      }
    }
    this.setState({
      isValid,
      error
    });
    return isValid;
  };
  private handleFieldFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    this.setState({
      isFilled: true
    });
  };
  private handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value
    });
  };
  private handleFieldBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    this.validate();
    if (!e.target.value || e.target.value.length < 1) {
      this.setState({
        isFilled: false
      });
    } else {
      this.setState({
        isFilled: true
      });
    }
  };
  public render() {
    const { isFilled, isValid } = this.state;
    const groupFilledModifier = isFilled ? ' text-input--filled' : '';
    const groupErrorModifier = !isValid ? ' text-input--error' : '';
    const inputClassModifier = this.props.className ? ` ${this.props.className}` : '';

    return (
      <div className={`text-input__group${groupFilledModifier}${groupErrorModifier}`}>
        <Popover content={this.state.error}>
          <i id="header__menu-btn-icon" className="text-input__error-icon fas fa-exclamation-triangle" />
        </Popover>
        {this.props.label ? (
          <label htmlFor={this.props.inputId} className="text-input__label">
            {this.props.label}
          </label>
        ) : null}
        <input
          type={this.props.type}
          id={this.props.inputId}
          className={`text-input__field${inputClassModifier}`}
          placeholder={!this.props.label ? this.props.placeholder : ''}
          value={this.state.value}
          onFocus={this.handleFieldFocus}
          onChange={this.handleFieldChange}
          onBlur={this.handleFieldBlur}
          ref={this.textInput}
        />
      </div>
    );
  }
}

export default TextInput;
