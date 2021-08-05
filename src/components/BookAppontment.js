import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect, ReactReduxContext } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from 'react-datepicker';
import { getAppointments } from '../actions/index';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import '../styles/appoointment.css';

const BookAppointment = ({
  user, userId, history, getAppointments,
}) => {
  const [models, setModels] = useState([]);
  const [model, setModel] = useState('');
  const [location, setLocation] = useState('');
  const [myId, setMyId] = useState('');
  const [startDate, setDate] = useState(new Date());
  const [success, setSuccess] = useState('Feel free to book an appointment with us!');
  const [myAppointments, setAppointments] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    };

    const fetchData = async () => {
      const result = await axios(
        'https://thawing-beach-22464.herokuapp.com/appointments', config, { withCredentials: true },
      );
      models = result.data;
      setModels(models);
    };
    fetchData();
    myAppointments = getAppointments();
    setAppointments(myAppointments);
  }, []);
  const locations = ['LOCATIONS', 'Mombasa', 'Nairobi', 'Kisumu', 'Eldoret'];

  const renderLocation = locations.map((item) => (
    <option key={uuidv4()} value={item}>{item}</option>
  ));

  const item = history.location.pathname;
  for (let i = 0; i < item.length; i += 1) {
    if (!Number.isNaN((parseInt(item.charAt(i), 10)))) {
      myId = parseInt(item.charAt(i), 10);
    }
  }

  models.forEach((value) => {
    if (value.id === myId) {
      model = value.model;
    }
  });

  const handleLocationChange = (e) => {
    const myLocation = e.target.value;
    setLocation(myLocation);
  };

  const handleChange = (date) => {
    setDate(date);
  };

  const handleSubmit = (e) => {
    const { username } = user;
    const date = startDate;
    const city = location;
    const myUserId = userId;
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },

    };

    axios.post(
      'https://thawing-beach-22464.herokuapp.com/appointments',
      {
        appointment: {
          username,
          model,
          date,
          city,
          userId: myUserId,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      },
      { withCredentials: true },
    ).then((response) => {
      setSuccess(response.data.success);
    });
    e.preventDefault();
  };
  const mySuccess = success;
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => {
        const nowState = store.getState();
        return (
          <div className="appointmentContainer">
            <h1>
              B&nbsp;&nbsp; o &nbsp;&nbsp;o&nbsp;&nbsp; k&nbsp;&nbsp; &nbsp;&nbsp;a
              &nbsp;&nbsp;&nbsp;&nbsp;t &nbsp;&nbsp;e&nbsp;&nbsp;
              s&nbsp;&nbsp; t &nbsp;-&nbsp; r&nbsp;&nbsp; i&nbsp;&nbsp; d&nbsp;&nbsp; e
            </h1>
            <div className="hardline" />
            <div className="appointmentcontent">
              <p>{mySuccess}</p>
              <p>
                Please let us know what you are interested in so we can help meet your needs.
                Book an appointment.
              </p>
            </div>
            <div className="booksection">
              <select
                onChange={handleLocationChange}
                className="locations"
              >
                {renderLocation}
              </select>
              <DatePicker selected={startDate} onChange={handleChange} />
              <button type="button" className="appbutton" onClick={handleSubmit}>
                Book Now!
              </button>
            </div>
            <h1>Your Appointments</h1>
            <div className="appointmentsContainer">
              {
                                    nowState.getAppointments.appointments !== undefined
                                      ? nowState.getAppointments.appointments.map((value, index) => (
                                        <div key={uuidv4()} className="appointments">
                                          <h3>{value.model}</h3>
                                          <p>{value.date}</p>
                                          <p>{value.city}</p>
                                        </div>
                                      )) : <div className="appointments">Loading...</div>
                                }
            </div>
          </div>
        );
      }}
    </ReactReduxContext.Consumer>
  );
};

BookAppointment.propTypes = {
  user: PropTypes.string,
  userId: PropTypes.number,
};

BookAppointment.defaultProps = {
  userId: 18,
  user: '',
};

const mapStateToProps = (state) => ({ appointments: state.appointments });
export default connect(mapStateToProps, { getAppointments })(BookAppointment);
