/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import ContentPage from 'components/content-page/ContentPage';

class About extends Component {
  public render() {
    return (
      <ContentPage>
        <div className="content-page__main">
          <h2 className="content-page__title">About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel magna cursus, vulputate nisl sit amet,
            congue tellus. Duis tristique, tortor in lacinia fringilla, enim arcu elementum odio, vel porttitor velit
            massa a nunc. Sed vulputate aliquet sem, et consequat sem ultrices vitae. Fusce mattis interdum enim, sed
            finibus tortor commodo in. Phasellus non fermentum dui. Phasellus tristique porta diam sit amet efficitur.
            Nunc magna mauris, ultricies sit amet consectetur ut, fringilla nec ipsum. Vestibulum mollis vitae libero
            nec sollicitudin. Aenean eget dignissim purus. Proin finibus placerat lectus sit amet bibendum. Suspendisse
            nec lectus sit amet libero elementum tempor efficitur sed massa. Cras porttitor nisl in mollis mollis.
            Pellentesque accumsan tellus vitae tortor egestas, ut euismod magna tincidunt. Integer consequat tristique
            lacus at sollicitudin. Curabitur faucibus nibh augue, a volutpat turpis commodo id. In aliquet tincidunt
            elit, a laoreet est dictum id.
          </p>
        </div>
      </ContentPage>
    );
  }
}

export default About;
