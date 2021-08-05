import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from '../../components/App';
import '@testing-library/jest-dom';

Enzyme.configure({ adapter: new Adapter() });

it('works', () => {
  const app = mount(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  expect(app).toMatchSnapshot();
});
