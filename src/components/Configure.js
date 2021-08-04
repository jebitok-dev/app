import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../styles/configure.css';
import { FaRegSun, FaAngleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Welcome1 from '../images/Welcome1.jpg';
import Welcome2 from '../images/Welcome2.jpg';
import Welcome3 from '../images/Welcome3.jpg';
import Welcome4 from '../images/Welcome4.jpg';
import Welcome5 from '../images/Welcome5.jpg';
import Search from '../images/search.png';

const slideImages = [
  Welcome1,
  Welcome2,
  Welcome3,
  Welcome4,
  Welcome5,
];

class Configure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transparent: 'transparent',
      white: 'white',
      oneArray: [0],
    };
    this.updateColor = this.updateColor.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
  }

  componentDidMount() {
    setInterval(this.updateColor, 6000);
  }

  handleLogin() {
    const { history } = this.props;
    history.push('/login');
  }

  handleRegistration() {
    const { history } = this.props;
    history.push('/signup');
  }

  updateColor() {
    const { oneArray } = this.state;
    let item = oneArray[0];
    if (item <= 5) {
      item += 1;
      this.setState({
        oneArray: [item],
      });
      if (item === 6) {
        item = 0;
        this.setState({
          oneArray: [item],
        });
      }
    }
  }

  render() {
    const intervalNumbers = [0, 1, 2, 3, 4, 5];
    const oneArray = this.state;
    const { white, transparent } = this.state;
    const circle = (
      intervalNumbers.map((value, index) => {
        const change = oneArray.oneArray[0];
        return (
          <div
            key={uuidv4()}
            className="default"
            style={change === index ? { backgroundColor: `${white}` } : { backgroundColor: `${transparent}` }}
          />
        );
      })
    );

    return (
      <div className="wholec">
        <button type="button" className="hello">
          <div className="first" />
          <div className="second" />
        </button>
        <div className="loginRegister">
          <button type="button" className="configure">
            <FaRegSun className="regsum" />
            <div className="config">Configure</div>
            <FaAngleRight className="rightfa" />
          </button>
        </div>
        <div className="search">
          <img src={Search} alt="" className="simage" />
        </div>
        <div className="circlebody">
          {circle}
        </div>
        <div className="slide-container">
          <Slide>
            <div className="each-slide">
              <div className="conffont" style={{ backgroundImage: `url(${slideImages[0]})` }}>
                <span style={{ color: 'white' }}>VW Golf GTI Clubsport 45</span>
              </div>
            </div>
            <div className="each-slide">
              <div className="conffont" style={{ backgroundImage: `url(${slideImages[0]})` }}>
                <span style={{ color: 'white' }}>VW Golf GTI (Mk7)</span>
              </div>
            </div>
            <div className="each-slide">
              <div className="conffont" style={{ backgroundImage: `url(${slideImages[0]})` }}>
                <span style={{ color: 'white' }}>VW Golf GTI Clubsport</span>
              </div>
            </div>
            <div className="each-slide">
              <div className="conffont" style={{ backgroundImage: `url(${slideImages[0]})` }}>
                <span style={{ color: 'white' }}>Volkswagen Golf 1.0 TSI</span>
              </div>
            </div>
            <div className="each-slide">
              <div className="conffont" style={{ backgroundImage: `url(${slideImages[0]})` }}>
                <span style={{ color: 'white' }}>Volkswagen Golf (Mk7)</span>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

Configure.propTypes = {
  history: PropTypes.string,
};

Configure.defaultProps = {
  history: '',
};

export default Configure;
