const getAppointments = (state = {}, action) => {
  switch (action.type) {
    case 'GET_APPOINTMENTS':
      return {
        ...state,
        appointments: action.payload,
      };
    case 'GET_CARS':
      return {
        ...state,
        appointments: action.payload,
      };
    default:
      return state;
  }
};

export default getAppointments;
