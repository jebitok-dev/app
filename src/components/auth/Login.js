import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import '../../styles/registration.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSuccessAuth = this.handleSuccessAuth.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSuccessAuth(data) {
    const { handleLogin, history } = this.props;
    handleLogin(data);
    history.push('/');
    window.location.reload(false);
  }

  handleSubmit(e) {
    const { email, password } = this.state;
    axios.post('https://thawing-beach-22464.herokuapp.com/login', {
      user: {
        email,
        password,
      },
    }, { withCredentials: true })
      .then((response) => {
        if (response.date.loggen_in) {
          this.handleSuccessAuth(response.data);
        }
      }).catch((errors) => errors).catch((errors) => errors);
    e.preventDefault();
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="welcContainer">
        <div className="welcomeBack">
          <h1>Welcome Back</h1>
        </div>
        <form onSubmit={this.handleSubmit} autoComplete="off" className="regForm">
          <input type="email" placeholder="Email" value={email} onChange={this.handleChange} autoComplete="off" required />
          <input type="password" placeholder="password" value={password} onChange={this.handleChange} autoComplete="off" required />
          <button className="redirectLogin" type="submit">LOG IN</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  handleLogin: PropTypes.func,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

Login.defaultProps = {
  handleLogin: {},
};

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = (dispatch) => ({
  login: (login) => dispatch(login(login)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
