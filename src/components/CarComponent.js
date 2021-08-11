import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Car from '../actions/Car';

const CarComponent = ({ userLogged, cars, myFavorites }) => {
  const dispatch = useDispatch();

  const addToFavorites = (carId, e) => {
    e.preventDefault();
    dispatch(Car.addToFavorites(userLogged.dispatch, carId));
  };

  const removeFromFavorites = (favoriteId, e) => {
    e.preventDefault();
    dispatch(Car.removeFromFavorites(userLogged.dispatch, favoriteId));
  };

  const checkIfFavorite = (id) => {
    const checked = myFavorites.some((item) => item.id === id);
    return checked;
  };

  return (
    <div>
      <div className="col-lg-8 offset-lg-2">
        {cars.loading && (
        <div className="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center p-10">
          <span className="w-20 h-20">
            <svg width="25" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#2d3748" className="w-full h-full">
              <g fill="none" fillRule="evenodd" strokeWidth="4">
                <circle cx="22" cy="22" r="1">
                  <animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite" />
                </circle>
                <circle cx="22" cy="22" r="1">
                  <animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite" />
                </circle>
              </g>
            </svg>
          </span>
          <div className="text-center text-xs mt-2">Loading...</div>
        </div>
        )}
        {cars.error && (
        <span className="text-danger">
          ERROR:
          {cars.error}
        </span>
        )}
        {cars.cars
                && (
                <div className="intro-y grid grid-cols-12 gap-6 mt-5 p-5">
                  {cars.cars.map((car) => (
                    <div key={Car.id} className="intro-y blog col-span-12 md:colspan-6 lg:col-span-4 shadow-2xl">
                      <Link to={`/details/${car.id}/${checkIfFavorite(car.id) ? car.id_favorite : false}/`} className="relative image-fit block">
                        <img src={car.picture} alt={car.name} className="rounded-t-md" />
                        <div className="absolute bottom-0 text-white px-5 pb-6 z-10">
                          <span className="px-2 py-1 rounded bg-primary font-bold">
                            $
                            {car.price}
                            / Month
                          </span>
                          <span className="block font-medium text-xl mt-3">{car.model}</span>
                        </div>
                      </Link>
                      <div className="p-5 text-gray-700 dark:text-gray-600">
                        Picture by
                        {' '}
                        {car.owner}
                        .
                        <span className="block truncate ...">{car.reviews}</span>
                      </div>
                      {!checkIfFavorite(car.id)
                        ? <Link to="/favorites" onClick={(e) => addToFavorites(car.id, e)} className="bg-primary py-3 mt-3 px-6 text-white block font-semibold rounded focus:outline-none">Add To Favorites</Link>
                        : <Link to="/" onClick={(e) => removeFromFavorites(car.id_favorite, e)} className="bg-black bg-opacity-40 py-3 mt-3 px-6 text-white block font-semibold rounded focus:outline-none block">Remove From Favorites!</Link>}
                    </div>
                  ))}
                </div>
                )}
        <p />
      </div>
    </div>
  );
};

CarComponent.propTypes = {
  userLogged: PropTypes.oneOfType([PropTypes.object]).isRequired,
  cars: PropTypes.oneOfType([PropTypes.object]).isRequired,
  myFavorites: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default CarComponent;
