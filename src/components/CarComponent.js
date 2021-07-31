import { useState } from "react";
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect, ReactReduxContext} from 'react-redux';
import {getItems} from '../actions/index';

const CarComponent = props => {
    const [rerender] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => rerender(null), 2000);
        return() => {
            clearTimeout(timer1);
        };
    }, []);

    const handleChange = () => {
        const {history} = props;
        history.push('/configure');
    };

    const {getItems} = props;
    getItems();
    return (
        <ReactReduxContext.Consumer>
            {({store}) => {
                const {match} = props;
                const {params} = match;
                const id = params.model_id;
                const newCar = [];
                const nowState = store.getState();
                nowState.getAppointments.items.map(value => {
                    if(value.id === parseInt(id, 10)) {
                        newCar.push(value);
                    }
                    return newCar;
                });
                const img = newCar[0] === undefined ? (<div className="loading">Loading</div>) : (
                    <img 
                        alt="img"
                        className="itemimage"
                        src={`https://res.cloudinary.com/dhxgtfnci/image/upload//hospital/tesla${newCar[0].id}.webp`}
                    />
                );
                const display = newCar[0] !== undefined
                ? (
                    <div className="carview">
                        <div className="carim">
                            {img}
                        </div>
                        <div className="cardetailss">
                            <p className="carname">
                                {newCar[0].name}
                            </p>
                        </div>
                    </div>
                )
            }}
        </ReactReduxContext.Consumer>
    )
}

export default CarComponent;
