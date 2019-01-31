import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Header from '../Header';

configure({ adapter: new Adapter() });

describe('Header', () => {
  it('renders the header elements with defaults', () => {
    const component = mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    // Verify the default title
    expect(component.find('#header__landing-link > #header__landing-link').text()).toBe('React Base Project');
    // Verify the child elements
    expect(component.find('.header__spacer')).toHaveLength(1);
    expect(component.find('.header__visible')).toHaveLength(1);
    expect(component.find('.header__content')).toHaveLength(1);
    expect(component.find('.header__title')).toHaveLength(1);
    expect(component.find('.header__title-logo')).toHaveLength(1);
    expect(component.find('.header__title-text')).toHaveLength(1);
    component.unmount();
  });

  it('renders the title from props', () => {
    const component = mount(
      <MemoryRouter>
        <Header title="Header Test" />
      </MemoryRouter>
    );
    // Verify the default title
    expect(component.find('#header__landing-link > #header__landing-link').text()).toBe('Header Test');
    component.unmount();
  });

  it('handles the menu button click', () => {
    const component = mount(
      <MemoryRouter>
        <Header title="Header Test" />
      </MemoryRouter>
    );
    // Verify that the mobile navbar toggles
    expect(component.find('#header__menu-btn-icon').hasClass('fa-times')).toBe(false);
    expect(component.find('#header__mobile-nav').hasClass('open')).toBe(false);
    component.find('#header__menu-btn').simulate('click');
    expect(component.find('#header__menu-btn-icon').hasClass('fa-times')).toBe(true);
    expect(component.find('#header__mobile-nav').hasClass('open')).toBe(true);
    component.find('#header__menu-btn').simulate('click');
    expect(component.find('#header__menu-btn-icon').hasClass('fa-times')).toBe(false);
    expect(component.find('#header__mobile-nav').hasClass('open')).toBe(false);
    component.unmount();
  });
});
