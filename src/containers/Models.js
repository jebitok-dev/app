import React from 'react';
import '../styles/models.css';
import golfWhite from '../images/itemsImages/golf.webp';
import golfmk from '../images/itemsImages/golfmk.webp';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';

const Model = () => (
  <div className="home">
    <div className="homeContainer">
      <Logo />
      <Navbar />
      <Footer />
    </div>
    <div className="lifestyleContainer">
      <img
        src={golfWhite}
        alt=""
        className="lifeimg"
      />
      <div className="videoContainer">
        <iframe
          width="804"
          height="452"
          src="https://www.youtube.com/embed/WfpTCiJsgiU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <img
        src={golfmk}
        alt=""
        className="lifeimg"
      />
      <div className="videoContainer">
        <iframe
          width="575"
          height="323"
          src="https://www.youtube.com/embed/JKQyE-A6z08"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <img
        src={golfWhite}
        alt=""
        className="lifeimg"
      />
      <div className="videoContainer">
        <iframe
          width="591"
          height="332"
          src="https://www.youtube.com/embed/-agUJZsUle4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <img
        src={golfmk}
        alt=""
        className="lifeimg"
      />
      <div className="videoContainer">
        <iframe
          width="591"
          height="332"
          src="https://www.youtube.com/embed/tM4s37VIAlE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <img
        src={golfmk}
        alt=""
        className="lifeimg"
      />
    </div>
  </div>
);

export default Model;
