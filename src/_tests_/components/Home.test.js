import React from 'react';
import Enzyme, { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom';
import Home from '../../containers/Home';

Enzyme.configure({ adapter: new Adapter() });

const middleWare = [thunk];
const mockStore = configureMockStore(middleWare);
const store = mockStore({});

beforeEach(() => {
  store.clearActions();
});

it('Home Container works', () => {
  const home = mount(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>,
  );
  expect(home).toMatchSnapshot();
});
