import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom';
import Shop from '../../containers/Shop';

Enzyme.configure({ adapter: new Adapter() });

it('Shop Container shows', () => {
  const shop = mount(
    <BrowserRouter>
      <Shop />
    </BrowserRouter>,
  );
  expect(shop).toMatchSnapshot();
});
