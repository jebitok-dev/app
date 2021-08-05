import getAppointments from '../../reducers/CarReducer';

describe('INITIAL_STATE', () => {
  test('is passes', () => {
    const action = { type: 'GET_APPOINTMENTS' };
    const initialState = {};

    expect(getAppointments(undefined, action)).toEqual(initialState);
  });
});
