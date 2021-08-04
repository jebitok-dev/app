import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../styles/configure.css';
import { FaRegSun, FaAngleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Welcome1 from '../images/welcome1.jpg';
import Welcome2 from '../images/welcome2.jpg';
import Welcome3 from '../images/welcome3.jpg';
import Welcome4 from '../images/welcome4.jpg';
import Welcome5 from '../images/welcome5.jpg';
import Search from '../images/search.png';

const slideImages = [
  Welcome1,
  Welcome2,
  Welcome4,
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
    },
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
    const { oneArray } = this.props;
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
  }
}

export default Configure;
