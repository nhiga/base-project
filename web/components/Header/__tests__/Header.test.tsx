import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Header from '../Header';

configure({ adapter: new Adapter() });

describe('Header', () => {
  it('renders Header elements', () => {
    const component = mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(component.find('.header__spacer')).toHaveLength(1);
    expect(component.find('.header__area')).toHaveLength(1);
    expect(component.find('.header__content')).toHaveLength(1);
    expect(component.find('.header__title')).toHaveLength(1);
    expect(component.find('.header__title-logo')).toHaveLength(1);
    expect(component.find('.header__title-text')).toHaveLength(1);
  });
});
