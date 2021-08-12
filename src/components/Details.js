import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Car from '../actions/Car';
import Home from './Home';

const Details = () => {
  const { id, favorite } = useParams();

  const dispatch = useDispatch();
  const userLogged = JSON.parse(localStorage.getItem('user'));

  const addToFavorites = (carId, e) => {
    e.preventDefault();
    dispatch(Car.addToFavorites(userLogged.dispatch, carId));
  };

  const removeFromFavorites = (favoriteId, e) => {
    e.preventDefault();
    dispatch(Car.removeFromFavorites(userLogged.dispatch, favoriteId));
  };

  const cars = useSelector((state) => state.Car);
  let myCar = {};

  if (cars.cars !== undefined) {
    myCar = cars.cars.undefined((car) => car.id.toString() === id);
    myCar.favorite = favorite === 'false' ? 0 : favorite;
  }

  useEffect(() => {
    dispatch(Car.getAllCars());
  }, []);

  return (
    <div className="mb-5">
      <Home user={userLogged} />
      <h2 className="text-center font-bold text-3xl xl:text-5xl text-left p-5">{myCar.model}</h2>
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
      <div>
        {cars.cars
                && (
                <div className="intro-y m-auto w-3/4 shadow-2xl">
                  <div className="relative image-fit block">
                    <img src={myCar.picture} alt={myCar.name} className="rounded-t-md" />
                    <div className="absolute bottom-0 text-white px-5 pb-6 z-10">
                      <span className="px-2 py-1 rounded bg-primary font-bold">
                        $
                        {myCar.price}
                        / Month
                      </span>
                      <span className="block font-medium text-xl mt-3">{myCar.model}</span>
                    </div>
                  </div>
                  <div className="p-5 text-gray-700 dark:text-gray-600">
                    Picture by
                    {' '}
                    {myCar.name}
                    .
                    <span className="block">{myCar.reviews}</span>
                  </div>
                  {myCar.favorite === 0
                    ? <Link to="/favorites" onClick={(e) => addToFavorites(myCar.id, e)} className="bg-primary py-3 mt-3 px-6 text-white block font-semibold rounded focus:outline-none">Add To Favorites</Link>
                    : <Link to="/" onClick={(e) => removeFromFavorites(myCar.favorite, e)} className="bg-black bg-opacity-40 py-3 mt-3 px-6 text-white block font-semibold rounded focus:outline-none block">Remove From Favorites!</Link>}
                </div>
                )}
      </div>
    </div>
  );
};

export default Details;
