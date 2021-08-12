import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import CarComponent from '../../components/CarComponent';
import store from '../../index';

describe('CarComponent', () => {
  it('should match snapshot', () => {
    const car = renderer.create(
      <Provider store={store}>
        <CarComponent userLogged={{ name: 'John' }} cars={{ name: 'VWGOLF' }} myFavorites={['VWGOLF']} />
      </Provider>,
    ).toJSON();
    expect(car).toMatchSnapshot();
  });
});
