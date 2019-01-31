import React from 'react';

import Login from '../login/Login';

import './landing.scss';

class Landing extends React.Component {
  public state = {
    backgroundImage: `url('/images/landing-0.jpg')`
  };
  public componentDidMount() {
    const index = Math.floor(Math.random() * Math.floor(5));
    const backgroundImageUrl = `url('/images/landing-${index}.jpg')`;
    this.setState({ backgroundImage: backgroundImageUrl });
  }
  public render() {
    const { backgroundImage } = this.state;
    const backgroundStyle = { backgroundImage };

    return (
      <div className="landing__hero" style={backgroundStyle}>
        <Login />
      </div>
    );
  }
}

export default Landing;
