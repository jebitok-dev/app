import Authentication from '../reducers/AuthReducer';
import Car from '../reducers/CarReducer';
import Favorite from '../reducers/FavReducer';
import Registration from '../reducers/Registration';

describe('AuthenticationReducer', () => {
  describe('Sign Up Reducer', () => {
    it('should return an empty object when nothing is passed to it', () => {
      expect(Registration({}, {})).toEqual({});
    });

    it('should return an object when request action is passed to it', () => {
      expect(Registration([], { type: 'REGISTER_REQUEST', user: { name: 'test@me.com' } })).toEqual({ registering: true });
    });

    it('should return an empty object when success action is passed to it', () => {
      expect(Registration([], { type: 'REGISTER_SUCCESS', user: { name: 'test@me.com' } })).toEqual({ });
    });

    it('should return an empty object when failure action is passed to it', () => {
      expect(Registration([], { type: 'REGISTER_FAILURE', user: { name: 'test@me.com' } })).toEqual({});
    });
  });

  describe('Login Reducer', () => {
    it('should return an empty object when nothing is passed to it', () => {
      expect(Authentication({}, {})).toEqual({});
    });

    it('should return an object when request action is passed to it', () => {
      expect(Authentication([], { type: 'LOGIN_REQUEST', user: { name: 'test@me.com' } })).toEqual({ loggedIn: true, user: { name: 'test@me.com' } });
    });

    it('should return an object when success action is passed to it', () => {
      expect(Authentication([], { type: 'LOGIN_SUCCESS', user: { name: 'test@me.com' } })).toEqual({ loggedIn: true, user: { name: 'test@me.com' } });
    });

    it('should return an empty object when failure action is passed to it', () => {
      expect(Authentication([], { type: 'LOGIN_FAILURE', user: { name: 'test@me.com' } })).toEqual({});
    });
  });
});

describe('Car Reducer', () => {
  describe('Get All Cars Reducer', () => {
    it('should return an empty object when nothing is passed to it', () => {
      expect(Car(undefined, {})).toEqual({});
    });

    it('should return an object (loading) when request action is passed to it', () => {
      expect(Car([], { type: 'GET_ALL_CARS_REQUEST', car: { } })).toEqual({ loading: true });
    });

    it('should return an object when success action is passed to it', () => {
      expect(Car([], { type: 'GET_ALL_CARS_SUCCESS', car: { } })).toEqual({ cars: { } });
    });

    it('should return an empty object when failure action is passed to it', () => {
      expect(Car([], { type: 'GET_ALL_CARS_FAILURE', car: { } })).toEqual({});
    });
  });

  describe('Get All Favorite Cars Reducer', () => {
    it('should return an empty object when nothing is passed to it', () => {
      expect(Favorite(undefined, {})).toEqual({});
    });

    it('should return an object (loading) when request action is passed to it', () => {
      expect(Favorite([], { type: 'GET_ALL_FAVORITES_REQUEST', favorite: { } })).toEqual({ loading: true });
    });

    it('should not return an object when success action is passed to it', () => {
      expect(Favorite([], { type: 'GET_ALL_FAVORITES_SUCCESS', favorite: { } })).not.toEqual({ favorites: { } });
    });

    it('should return an empty object when failure action is passed to it', () => {
      expect(Favorite([], { type: 'GET_ALL_FAVORITES_FAILURE', favorite: { } })).toEqual({});
    });
  });

  describe('Post Favorite Car Reducer', () => {
    it('should return an object (loading) when request action is passed to it', () => {
      expect(Favorite([], { type: 'ADD_TO_FAVORITES_REQUEST', favorite: { } })).toEqual({ loading: true });
    });

    it('should return an object when success action is passed to it', () => {
      expect(Favorite([], { type: 'ADD_TO_FAVORITES_SUCCESS', favorite: { } })).toEqual({ favorites: { } });
    });

    it('should return an empty object when failure action is passed to it', () => {
      expect(Favorite([], { type: 'ADD_TO_FAVORITES_FAILURE', favorite: { } })).toEqual({});
    });
  });
});
