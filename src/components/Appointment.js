import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Proptypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { getCars, postAppointments } from '../actions/index';
import '../styles/appointment.css';

const Appointment = ({ user, userId }) => {
  const currentItems = useSelector((state) => state.getAppointments);
  const dispatch = useDispatch();
  const [rerender] = useState(false);

  let [model, setModel] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    dispatch(getCars());

    const timer1 = setTimeout(() => rerender(null), 2000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const locations = ['LOCATIONS', 'Mombasa', 'Nairobi', 'Kisumu', 'Eldoret'];

  const renderLocation = locations.map((item) => (
    <option key={uuidv4()} value={item}>{item}</option>
  ));

  const allModels = ['ALL MODELS'];
  if (currentItems) {
    currentItems.items.forEach((value) => {
      allModels.push(value.model);
    });
  }

  const renderModels = allModels.map((item) => (
    <option
      key={uuidv4()}
      value={item}
    >
      {item}
    </option>
  ));

  const handleModelChange = (e) => {
    model = e.target.value;
    setModel(model);
  };

  const handleLocationChange = (e) => {
    const myLocation = e.target.value;
    setLocation(myLocation);
  };

  const handleSubmit = (e) => {
    const username = user;
    const myModel = model;
    const date = '3/8/2021';
    const city = location;
    const myUserId = userId;
    const appointment = {
      appointment: {
        username,
        model: myModel,
        date,
        city,
        user_id: myUserId,
      },
    };
    dispatch(postAppointments(appointment));
    e.preventDefault();
  };

  return (
    <div className="appointmentContainer">
      <h1>
        B&nbsp;&nbsp; o &nbsp;&nbsp;o&nbsp;&nbsp; k&nbsp;&nbsp; &nbsp;&nbsp;a
        &nbsp;&nbsp;&nbsp;&nbsp;t &nbsp;&nbsp;e&nbsp;&nbsp;
        s&nbsp;&nbsp; t &nbsp;-&nbsp; r&nbsp;&nbsp; i&nbsp;&nbsp; d&nbsp;&nbsp; e
      </h1>
      <div className="hardline" />
      <div className="appointmentcontent">
        <p>
          Please let us know what you're interested in so we can help meet your needs.
          Book an appointment.
        </p>
      </div>
      <div className="booksection">
        <select
          onChange={handleModelChange}
          className="models"
        >
          {rerenderModels}
        </select>
        <select
          onChange={handleLocationChange}
          className="location"
        >
          {renderLocation}
        </select>
        <button type="button" className="appbutton" onClick={handleSubmit}>
          Book Now!
        </button>
      </div>
    </div>
  );
};

Appointment.proptypes = {
  user: Proptypes.objectOf(Proptypes.any),
  userId: Proptypes.string,
};

Appointment.defaultProps = {
  userId: undefined,
  user: {},
};

export default Appointment;
