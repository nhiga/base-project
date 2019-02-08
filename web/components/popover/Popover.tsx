import React, { KeyboardEvent, KeyboardEventHandler } from 'react';

import './popover.scss';

interface PopoverProps {
  content: string | string[];
}

class Popover extends React.Component<PopoverProps> {
  public state = {
    isVisible: false
  };
  private content = React.createRef<HTMLDivElement>();
  private clickableContent = React.createRef<HTMLSpanElement>();
  private handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };
  public handleClickOutside = (e: MouseEvent) => {
    if (this.clickableContent.current && !this.clickableContent.current.contains(e.srcElement)) {
      this.setState({
        isVisible: false
      });
    }
  };
  public handleKeyUpOutside = (e: any) => {
    const ke = e as KeyboardEvent;
    if (e.key === 'Escape') {
      this.setState({
        isVisible: false
      });
    }
  };
  public componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
    document.addEventListener('keyup', this.handleKeyUpOutside);
  }
  public componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
    document.removeEventListener('onkeyup', this.handleKeyUpOutside);
  }
  public componentDidUpdate() {
    if (this.content.current && this.clickableContent.current) {
      const right = -this.content.current.clientWidth / 2 + +this.clickableContent.current.clientWidth / 2 + 5;
      this.content.current.style.right = `${right}px`;
    }
  }
  public render() {
    const { isVisible } = this.state;
    const visibleModifier = isVisible ? ' popover--visible' : '';

    return (
      <div id="popover__container" className={`popover__container${visibleModifier}`}>
        <div ref={this.content} id="popover-content" className="popover__content popover__content--above">
          {Array.isArray(this.props.content) ? this.props.content.join('\n') : this.props.content}
        </div>
        <span ref={this.clickableContent} className="popover__content-clickable" onClick={this.handleClick}>
          {this.props.children}
        </span>
      </div>
    );
  }
}

export default Popover;
