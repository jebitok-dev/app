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
            user_id: undefined,
        };
    }

    componentDidMount() {
        this.setState({
            user: localStorage.username,
            user_id: localStorage.id,
        });
    }

    render() {
        const {user, user_id} = this.state;
        return (
            <div className="home">
                <div className="homeContainer">
                    <Logo />
                    <Navbar />
                    <Footer />
                </div>
                <Appointment user={user} userId={user_id} />
            </div>
        );
    }
}

export default Book;
