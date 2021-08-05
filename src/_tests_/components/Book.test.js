import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Book from '../../containers/Book';

Enzyme.configure({ adapter: new Adapter() });

const initialState = {};
const middleWare = [thunk];
const mockStore = configureMockStore(middleWare);
const store = mockStore(initialState);

it('Book Container works', () => {
  const book = mount(
    <Provider store={store}>
      <BrowserRouter>
        <Book />
      </BrowserRouter>
    </Provider>,
  );
  expect(book).toMatchSnapshot();
});
