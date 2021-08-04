import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../styles/registration.css';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSuccessAuth = this.handleSuccessAuth.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleLogin() {
    const { history } = this.props;
    history.push('/login');
  }

  handleSuccessAuth(data) {
    const { handleLogin, history } = this.props;
    handleLogin(data);
    history.push('/');
    window.location.reload(false);
  }

  handleSubmit(e) {
    const {
      name, email, password, passwordConfirmation,
    } = this.state;
    axios.post('https://thawing-beach-22464.herokuapp.com/users', {
      user: {
        name,
        email,
        password,
        passwordConfirmation,
      },
    }, { withCredentials: true })
      .then((response) => {
        if (response.data.status === 'created') {
          this.handleSuccessAuth(response.data);
        }
      });
    e.preventDefault();
  }

  render() {
    const {
      name, email, password, passwordConfirmation,
    } = this.state;
    return (
      <div className="welcContainer">
        <div className="welcomeBack">
          <h1>Welcome Back!</h1>
          <p>Please Login in to keep connected with us</p>
          <button className="redirectLogin" type="button" onClick={this.handleLogin}>LOG IN</button>
        </div>
        <div className="formContainer">
          <div className="createAccount">
            <h1>Create Account</h1>
          </div>
          <form onSubmit={this.handleSubmit} className="regForm">
            <input type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange} required />
            <input type="name" name="name" placeholder="Name" value={name} onChange={this.handleChange} required />
            <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} required />
            <input type="password" name="passwordConfirmation" placeholder="Password Confirmation" value={passwordConfirmation} onChange="this.handleChange" required />
            <button className="regB" type="submit">SIGN UP</button>
          </form>
        </div>
      </div>
    );
  }
}

Registration.propTypes = {
  handleLogin: PropTypes.func,
  history: PropTypes.objectOf(PropTypes.any),
};

Registration.defaultProps = {
  handleLogin: {},
  history: {},
};

export default Registration;
