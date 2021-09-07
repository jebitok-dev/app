const success = (message) => ({ type: 'SUCCESS', message });
const error = (message) => ({ type: 'ERROR', message });
const clear = () => ({ type: 'CLEAR' });
const Actions = {
  success,
  error,
  clear,
};

export default Actions;
