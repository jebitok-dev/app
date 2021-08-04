import React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Appointment from '../components/Appointment';
import Footer from '../components/Footer';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      userId: undefined,
    };
  }

  componentDidMount() {
    this.setState({
      user: localStorage.username,
      userId: localStorage.id,
    });
  }

  render() {
    const { user, userId } = this.state;
    return (
      <div className="home">
        <div className="homeContainer">
          <Logo />
          <Navbar />
          <Footer />
        </div>
        <Appointment user={user} userId={userId} />
      </div>
    );
  }
}

export default Book;
