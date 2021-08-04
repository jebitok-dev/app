import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../actions/index';
import Navbar from '../components/Navbar';
import '../styles/home.css';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Items from '../components/Item';
import Logout from '../components/auth/Logout';

const Home = () => {
  const [rerender] = useState(false);
  const currentCars = useSelector((state) => state.getAppointments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
    const timer1 = setTimeout(() => rerender(null), 2000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const handleSuccessAuth = (data) => {
    handleLogin(data);
  };

  const handleLogout = () => {
    handleLogout();
  };

  const itemContainer = (currentCars) === undefined
    ? (<div>Loading ...</div>) : (
      <Items response={currentCars.items} />
    );

  return (
    <div className="home">
      <div className="homeContainer">
        <Logo />
        <Navbar />
        <Logout handleLogout={handleLogout} />
        <Footer />
      </div>
      <div className="descriptionContainer">
        <h1>LATEST MK7 CAR MODELS</h1>
        <h2>'Anyone who knows anything about cars quietly respects the GOLF GTI' Chris Haris</h2>
        <div className="dots">..................</div>
        {itemContainer}
      </div>
      <div />
    </div>
  );
};

Home.propTypes = {
  handleLogin: PropTypes.func,
  handleLogout: PropTypes.func,
};

Home.defaultProps = {
  handleLogin: () => { },
  handleLogout: () => { },
};

export default Home;
