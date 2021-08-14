import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Home from '../../components/Home';
import store from '../../reducers/index';

describe('Home Component', () => {
  it('should match snapshot', () => {
    const home = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Home user={{ name: 'test' }} />
        </MemoryRouter>
      </Provider>,
    ).toJSON();
    expect(home).toMatchSnapshot();
  });
});
