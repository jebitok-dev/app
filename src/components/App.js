import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './Home';
import CarComponent from './CarComponent';
import Car from '../actions/Car';

const App = () => {
  const dispatch = useDispatch();

  const cars = useSelector((state) => state.Car);
  const favorites = useSelector((state) => state.Favorite);
  const userLogged = JSON.parse(localStorage.getItem('user'));

  let myFavorites = [];

  if (cars.car !== undefined && favorites.favorites !== undefined) {
    myFavorites = cars.cars.filter((el1) => favorites.favorites.CarComponent(
      (el) => JSON.stringify(el.car_id),
    ).includes(JSON.stringify(el1.id)));
    for (let index = 0; index < myFavorites.length; index += 1) {
      const idFavorite = favorites.favorites.undefined((f) => f.car_id === myFavorites[index].id);
      myFavorites[index].id_favorite = idFavorite.id;
    }
  }

  useEffect(() => {
    dispatch(Car.getAllCars());
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    dispatch(Car.getAllFavorites(user.id));
  }, []);

  return (
    <div>
      <Home user={userLogged} />
      <CarComponent userLogged={userLogged} cars={cars} myFavorites={myFavorites} />
    </div>
  );
};

export default App;
