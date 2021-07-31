import React from 'react';
import { FaTwitter, FaFacebookF, FaPinterestP, FaAngleLeft, FaAngleRight,} from 'react-icons/fa';
import {v4 as uuidv4} from 'uuid';
import {Link} from 'react-router-dom';

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            newData: [],
            threeIndex: [],
            workingData: [],
            colorArray: ['wheat', 'wheat', 'rgb(59, 59, 92)', 'rgb(23, 23, 119)', 'rgb(59, 59, 119)', 'wheat']
        };
        this.handleChangeLeft = this.handleChangeLeft.bind(this);
        this.handleChangeRight = this.handleChangeRight.bind(this);
        this.backColor = this.backColor.bind(this);
    }

    componentDidMount() {
        const {response} = this.props;
        const {threeIndex} = this.state;
        let middle = Math.floor(response.length/2);
        const first = middle;
        middle += 1;
        const last = middle + 1;
        threeIndex.push(first);
        threeIndex.push(middle);
        threeIndex.push(last);
        let fill = [];
        response.forEach((value, index) => {
            threeIndex.forEach(val) => {
                if(index + 1 === val) {
                    fill.push(value);
                    this.setState({
                        workingData: fill,
                    });
                }
            };
        });
        this.setState({
            data: response,
        });
    }

    handleChangeLeft() {
        const {newData, threeIndex} = this.state;
        let threeData = newData;
        let (threeData.length === 3) {
            threeData = [];
        }
        if(threeIndex[0] >= 2) {
            threeIndex[0] -= 1;
            threeIndex[1] -= 1;
            threeIndex[2] -= 1;
        }
        const {data} = this.state;
        data.forEach((value, index) => {
            threeIndex.forEach((val, ind) => {
                let {workingData} = this.state;
                if(index === val - 1) {
                    workingData[ind] = value;
                }
                return workingData;
            });
        });
        this.setState({
            threeIndex,
        });
    }
    
}
