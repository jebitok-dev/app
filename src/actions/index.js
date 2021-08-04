import axios from 'axios';

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.token}`,
  },
};

export const getAppointments = () => async (dispatch) => {
  try {
    const res = await axios.get('https://thawing-beach-22464.herokuapp.com/cars', config, { withCredentials: true });
    dispatch({
      type: 'GET_APPOINMENTS',
      payload: res.data,
    });
  } catch (e) {
    return e;
  }
};

export const giveCars = () => async (dispatch) => {
  try {
    const res = await axios.get('https://thawing-beach-22464.herokuapp.com/cars');
    dispatch({
      type: 'GET_CARS',
      payload: res.data,
    });
  } catch (e) {
    return e;
  }
};

export const postAppointments = (appointments) => async (dispatch) => {
  try {
    const res = await axios.post('https://thawing-beach-22464.herokuapp.com/appointments', appointments,
      {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }, { withCredentials: true });
    dispatch({
      type: 'POST_APPOINTMENTS',
      payload: res.data,
    });
  } catch (e) {
    return e;
  }
};
