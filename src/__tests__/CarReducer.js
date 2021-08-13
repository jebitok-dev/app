import Authentication from '../reducers/AuthReducer';
import Car from '../reducers/CarReducer';
import Favorite from '../reducers/FavReducer';
import Registration from '../reducers/Registration';

describe('AuthentificationReducer', () => {
  describe('Sign Up Reducer', () => {
    it('should return an empty object when nothing is passed to it', () => {
      expect(Registration(undefined, {})).toEqual({});
    });

    it('should return an object when request action is passed to it', () => {
      expect(Registration([], { type: 'USERS_REGISTER_REQUEST', user: { name: 'test@me.com' } })).toEqual({ registering: true });
    });

    it('should return an empty object when success action is passed to it', () => {
      expect(Registration([], { type: 'USERS_REGISTER_SUCCESS', user: { name: 'test@me.com' } })).toEqual({ });
    });

    it('should return an empty object when failure action is passed to it', () => {
      expect(Registration([], { type: 'USERS_REGISTER_FAILURE', user: { name: 'test@me.com' } })).toEqual({});
    });
  });

  describe('Login Reducer', () => {
    it('should return an empty object when nothing is passed to it', () => {
      expect(Authentication(undefined, {})).toEqual({});
    });

    it('should return an object when request action is passed to it', () => {
      expect(Authentication([], { type: 'USERS_LOGIN_REQUEST', user: { name: 'test@me.com' } })).toEqual({ loggingIn: true, user: { name: 'test@me.com' } });
    });

    it('should return an object when success action is passed to it', () => {
      expect(Authentication([], { type: 'USERS_LOGIN_SUCCESS', user: { name: 'test@me.com' } })).toEqual({ loggedIn: true, user: { name: 'test@me.com' } });
    });

    it('should return an empty object when failure action is passed to it', () => {
      expect(Authentication([], { type: 'USERS_LOGIN_FAILURE', user: { name: 'test@me.com' } })).toEqual({});
    });
  });
});

describe('Car Reducer', () => {
  describe('Get All Cars Reducer', () => {
    it('should return an empty object when nothing is passed to it', () => {
      expect(Car(undefined, {})).toEqual({});
    });

    it('should return an object (loading) when request action is passed to it', () => {
      expect(Car([], { type: 'USERS_GET_ALL_CARS_REQUEST', house: { } })).toEqual({ loading: true });
    });

    it('should return an object when success action is passed to it', () => {
      expect(Car([], { type: 'USERS_GET_ALL_CARS_SUCCESS', house: { } })).toEqual({ houses: { } });
    });

    it('should return an empty object when failure action is passed to it', () => {
      expect(Car([], { type: 'USERS_GET_ALL_CARS_FAILURE', house: { } })).toEqual({});
    });
  });

  describe('Get All Favorite Cars Reducer', () => {
    it('should return an empty object when nothing is passed to it', () => {
      expect(Favorite(undefined, {})).toEqual({});
    });

    it('should return an object (loading) when request action is passed to it', () => {
      expect(Favorite([], { type: 'USER_GET_ALL_FAVORITES_REQUEST', favorite: { } })).toEqual({ loading: true });
    });

    it('should not return an object when success action is passed to it', () => {
      expect(Favorite([], { type: 'USER_GET_ALL_FAVORITES_SUCCESS', favorite: { } })).not.toEqual({ favorites: { } });
    });

    it('should return an empty object when failure action is passed to it', () => {
      expect(Favorite([], { type: 'USER_GET_ALL_FAVORITES_FAILURE', favorite: { } })).toEqual({});
    });
  });

  describe('Post Favorite Car Reducer', () => {
    it('should return an object (loading) when request action is passed to it', () => {
      expect(Favorite([], { type: 'USER_ADD_TO_FAVORITES_REQUEST', favorite: { } })).toEqual({ loading: true });
    });

    it('should return an object when success action is passed to it', () => {
      expect(Favorite([], { type: 'USER_ADD_TO_FAVORITES_SUCCESS', favorite: { } })).toEqual({ favorites: { } });
    });

    it('should return an empty object when failure action is passed to it', () => {
      expect(Favorite([], { type: 'USER_ADD_TO_FAVORITES_FAILURE', favorite: { } })).toEqual({});
    });
  });
});
