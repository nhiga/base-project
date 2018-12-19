import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Header from '../Header';

configure({ adapter: new Adapter() });

describe('Header', () => {
  it('renders', () => {
    const component = mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(component.find('.header__title')).toHaveLength(1);
    expect(component.find('.header__nav')).toHaveLength(1);
    expect(component.find('.header__nav-link')).toHaveLength(3);
  });
});
