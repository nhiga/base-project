import React from 'react';

import './text-input.scss';

interface TextInputProps {
  inputId: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextInputState {
  value: string;
  focus: boolean;
}

// TODO: Define the state interface (how do we define dynamic key names?)

class TextInput extends React.Component<TextInputProps, TextInputState> {
  public state = {
    value: '',
    focus: false
  };
  private handleFieldFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    this.setState({
      focus: true
    });
  };
  private handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value
    });
    this.props.onChange(e);
  };
  private handleFieldBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value || e.target.value.length < 1) {
      this.setState({
        focus: false
      });
    }
  };
  public render() {
    return (
      <div className={`text-input__group${this.state.focus ? ' focused' : ''}`}>
        <label htmlFor={this.props.inputId} className="text-input__label">
          {this.props.label}
        </label>
        <input
          type="text"
          id={this.props.inputId}
          className="text-input__field"
          value={this.state.value}
          onFocus={this.handleFieldFocus}
          onChange={this.handleFieldChange}
          onBlur={this.handleFieldBlur}
        />
      </div>
    );
  }
}

export default TextInput;
