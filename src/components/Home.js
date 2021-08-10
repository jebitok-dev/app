import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaUserNinja, FaPlayCircle } from 'react-icons';

const Home = ({ user }) => {
  const dispatch = useDispatch();

  const logout = () => {
    history.pushState('/login');
    dispatch(userActions.logout());
  };

  return (
    <div className="bg-login-bg">
      <div className="bg-black bg-opacity-50 h-auto p-5 text-white">
        <header className="flex mb-10 justify-between">
          <Link to="/">
            <img src="" alt="" />
          </Link>
          <div className="mt-5 flex gap-4 md:mx-10 items-center">
            <FaUserNinja />
            <Link to="/">{user.name}</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/login" onClick={logout} className="bg-black bg-opacity-40 py-2 px-6 text-white font-semibold rounded-full shadow-2xl focus:outline-none">Logout</Link>
          </div>
        </header>
        <div className="pt-10 mt-10 w-4/4 sm:w-3/4 md:w-2/4 xl:w-2/4">
          <h2 className="intro-x font-bold text-white text-3xl xl:text-5xl text-left pb-2">Find your car!</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium,
            porro optio odio obcaecati corrupti ullam!
          </p>
          <div className="flex gap-4 my-4">
            <button type="button" className="bg-primary py-3 mt-3 px-6 text-white block font-semibold rounded-full shadow-2xl focus:outline-none">
              Start Free
            </button>
            <div className="flex gap-4 my-4">
              <FaPlayCircle />
              <div>Watch Video</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Home;
