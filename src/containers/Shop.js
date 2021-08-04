import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import '../styles/shop.css';

const Shop = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    };
    const fetchData = async () => {
      const result = await axios(
        'https://thawing-beach-22464.herokuapp.com/cars', config, { withCredentials: true },
      );
      setCars(result.data);
    };
    fetchData();
  }, []);

  const renderCars = cars.length !== 0 ? (
    cars.map((value, index) => (
      <div
        key={uuidv4}
        className="shopitems"
      >
        <img
          className="itemsImg"
          id="itemsimage"
          alt="none"
          src=""
        />
        <p className="shopmodel">{value.model}</p>
        <p className="shopreview">{value.review}</p>
        <div>
          <p className="price">Price range</p>
          <p className="shopprice">{value.price}</p>
        </div>
      </div>
    ))
  ) : (<div>Loading...</div>);

  return (
    <div className="home">
      <div className="homeContainer">
        <Logo />
        <Navbar />
        <Footer />
      </div>
      <div className="shopcars">
        {renderCars}
      </div>
    </div>
  );
};

export default Shop;
