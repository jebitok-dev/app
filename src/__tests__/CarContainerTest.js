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
    }
]

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

const getAllCarApiUrl  = {
    method: 'GET',
    url: 'https://young-falls-88019.herokuapp.com/cars',
    params: {},
    headers: {
        authorization: '*********',
    },
};

const getAllFavoritesApiUrl = {
    method: 'GET',
    url: 'https://young-falls-88019.herokuapp.com/users/${user}/favorites',
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

const fetchDataRegister = async () => dispatch => fetch(('https://young-falls-88019.herokuapp.com/signup', {
    data: registerObject,
    method: 'POST',
    headers: {'content-type': 'applicationn/json'},
}))
    .then(() => dispatch(successRegister()));

const fetchDataLogin = async () => dispatch => fetch(('https://young-falls-88019.herokuapp.com/auth/login', {

}))