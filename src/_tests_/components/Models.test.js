import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom';
import Model from '../../containers/Models';

Enzyme.configure({ adapter: new Adapter() });

it('Models Container works', () => {
  const model = mount(
    <BrowserRouter>
      <Model />
    </BrowserRouter>,
  );
  expect(model).toMatchSnapshot();
});
