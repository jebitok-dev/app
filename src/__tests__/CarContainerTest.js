import moxios from 'moxios';
import mockStore from './Utils/utils';

const expectedRegisterStatus = {
  message: 'Account created  successfully!',
  auth_token: '*********',
  id: '1',
};

const expectedLoginStatus = {
  auth_token: '*********',
  id: '1',
};

const expectedCarStatus = [
  {
    id: 4,
    model: 'VW Golf',
    price: 36000,
    reviews: 'fast & sleek model',
    picture: 'https://unsplash.com/photos/tWPJ3euclZY',
    name: 'Doe',
    created_at: '2021-13-08',
    updated_at: '2021-13-08',
  },
  {
    id: 4,
    model: 'MK7 Golf',
    price: 34000,
    reviews: 'fast & sleek model',
    picture: 'https://unsplash.com/photos/WyZh1SAPLQw',
    name: 'Doe',
    created_at: '2021-13-08',
    updated_at: '2021-13-08',
  },
];

const expectedFavoriteStatus = [
  {
    id: 4,
    name: 'name',
    user_id: 1,
    car_id: 1,
    created_at: '2021-13-08',
    updated_at: '2021-13-08',
  },
];

const registerObject = {
  name: 'doe',
  email: 'foo@bar.com',
  password: '12345',
  password_confirmation: '12345',
};

const loginObject = {
  email: 'foo@bar.com',
  password: '12345',
};

const signInApiUrl = {
  method: 'POST',
  url: 'https://young-falls-88019.herokuapp.com/auth/login',
  params: {},
  headers: {},
  data: loginObject,
};

const signUpApiUrl = {
  method: 'POST',
  url: 'https://young-falls-88019.herokuapp.com/signup',
  params: {},
  headers: {
    authorization: '*********',
  },
};

const getAllCarApiUrl = {
  method: 'GET',
  url: 'https://young-falls-88019.herokuapp.com/cars',
  params: {},
  headers: {
    authorization: '*********',
  },
};

const getAllFavoritesApiUrl = {
  method: 'GET',
  url: 'https://young-falls-88019.herokuapp.com/users/3/favorites',
  params: {},
  headers: {
    authorization: '*********',
  },
};

const successRegister = () => ({
  type: 'USERS_REGISTER_SUCCESS',
  user: expectedRegisterStatus,
});

const successLogin = () => ({
  type: 'USERS_LOGIN_SUCCESS',
  user: expectedRegisterStatus,
});

const successCars = () => ({
  type: 'GET_ALL_CARS_SUCCESS',
  cars: expectedCarStatus,
});

const successFavorite = () => ({
  type: 'GET_ALL_FAVORITES_SUCCESS',
  cars: expectedFavoriteStatus,
});

const fetchDataRegister = async () => (dispatch) => fetch(('https://young-falls-88019.herokuapp.com/signup', {
  data: registerObject,
  method: 'POST',
  headers: { 'content-type': 'application/json' },
}))
  .then(() => dispatch(successRegister()));

const fetchDataLogin = async () => (dispatch) => fetch(('https://young-falls-88019.herokuapp.com/auth/login', {
  data: registerObject,
  method: 'POST',
  headers: { 'content-type': 'application/json' },
}))
  .then(() => dispatch(successLogin()));

const fetchDataCar = async () => (dispatch) => fetch(('https://young-falls-88019.herokuapp.com/cars', {
  data: registerObject,
  method: 'GET',
  headers: { 'content-type': 'application/json', authorization: '********' },
}))
  .then(() => dispatch(successCars()));

const fetchDataFavorite = async () => (dispatch) => fetch(('https://young-falls-88019.herokuapp.com/users/3/favorites', {
  data: registerObject,
  method: 'GET',
  headers: { 'content-type': 'application/json', authorization: '********' },
}))
  .then(() => dispatch(successFavorite()));

describe('sign up', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.install();
  });

  const store = mockStore(expectedRegisterStatus);

  it('Store is updated correctly', async () => {
    moxios.wait(() => {
      moxios.stubOnce('POST', signUpApiUrl, {
        status: 200,
        response: expectedRegisterStatus,
      });
    });
    return store.dispatch(fetchDataRegister).then(() => {
      const newState = store.getState();
      expect(Object.entries(newState)).toEqual(Object.entries(expectedRegisterStatus));
    });
  });

  it('should return an empty array', async () => store.dispatch(fetchDataRegister)
    .then(() => {
      expect(store.getActions()).toEqual([]);
    }));

  it('should not return an empty array', async () => store.dispatch(fetchDataRegister)
    .then(() => {
      expect(store.getState()).not.toEqual([]);
    }));
});

describe('login', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  const store = mockStore(expectedLoginStatus);

  it('Store is updated correctly', async () => {
    moxios.wait(() => {
      moxios.stubOnce('POST', signInApiUrl, {
        status: 200,
        response: expectedLoginStatus,
      });
    });

    return store.dispatch(fetchDataLogin).then(() => {
      const newState = store.getState();
      expect(Object.entries(newState)).toEqual(Object.entries(expectedLoginStatus));
    });
  });

  it('should return an empty array', async () => store.dispatch(fetchDataLogin)
    .then(() => {
      expect(store.getActions()).toEqual([]);
    }));

  it('should not return an empty array', async () => store.dispatch(fetchDataLogin)
    .then(() => {
      expect(store.getState()).not.toEqual([]);
    }));
});

describe('cars', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  const store = mockStore(expectedCarStatus);

  it('Store is updated correctly', async () => {
    moxios.wait(() => {
      moxios.stubOnce('GET', getAllCarApiUrl, {
        status: 200,
        response: expectedCarStatus,
      });
    });

    return store.dispatch(fetchDataCar).then(() => {
      const newState = store.getState();
      expect(Object.entries(newState)).toEqual(Object.entries(expectedCarStatus));
    });
  });

  it('should return an empty array', async () => store.dispatch(fetchDataCar)
    .then(() => {
      expect(store.getActions()).toEqual([]);
    }));

  it('should not return an empty array', async () => store.dispatch(fetchDataCar)
    .then(() => {
      expect(store.getState()).not.toEqual([]);
    }));

  it('should not return the size of the object', async () => store.dispatch(fetchDataCar)
    .then(() => {
      expect(store.getState().length).toEqual(2);
    }));
});

describe('favorite cars', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  const store = mockStore(expectedFavoriteStatus);

  it('Store is updated correctly', async () => {
    moxios.wait(() => {
      moxios.stubOnce('GET', getAllFavoritesApiUrl, {
        status: 200,
        response: expectedFavoriteStatus,
      });
    });

    return store.dispatch(fetchDataFavorite).then(() => {
      const newState = store.getState();
      expect(Object.entries(newState)).toEqual(Object.entries(expectedFavoriteStatus));
    });
  });

  it('should return an empty array', async () => store.dispatch(fetchDataFavorite)
    .then(() => {
      expect(store.getActions()).toEqual([]);
    }));

  it('should not return an empty array', async () => store.dispatch(fetchDataFavorite)
    .then(() => {
      expect(store.getState()).not.toEqual([]);
    }));

  it('should not return the size of the object', async () => store.dispatch(fetchDataFavorite)
    .then(() => {
      expect(store.getState().length).toEqual(1);
    }));
});
