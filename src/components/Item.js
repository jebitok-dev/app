import React from 'react';
import {
  FaTwitter, FaFacebookF, FaPinterestP, FaAngleLeft, FaAngleRight,
} from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      newData: [],
      threeIndex: [],
      workingData: [],
      colorArray: ['wheat', 'wheat', 'rgb(59, 59, 92)', 'rgb(23, 23, 119)', 'rgb(59, 59, 119)', 'wheat'],
    };
    this.handleChangeLeft = this.handleChangeLeft.bind(this);
    this.handleChangeRight = this.handleChangeRight.bind(this);
    this.backColor = this.backColor.bind(this);
  }

  /* eslint-disable react/prop-types */
  // componentDidMount() {
  //   const { response } = this.props;
  //   const { threeIndex } = this.state;
  //   let middle = Math.floor(Math.random() * response.length);
  //   const first = middle;
  //   middle += 1;
  //   const last = middle + 1;
  //   threeIndex.push(first);
  //   threeIndex.push(middle);
  //   threeIndex.push(last);
  //   const fill = [];
  //   response.forEach((value, index) => {
  //     threeIndex.forEach((val) => {
  //       if (index + 1 === val) {
  //         fill.push(value);
  //         this.setState({
  //           workingData: fill,
  //         });
  //       }
  //     });
  //   });
  //   this.setState({
  //     data: response,
  //   });
  // }

  handleChangeLeft() {
    const { newData, threeIndex } = this.state;
    let threeData = newData;
    if (threeData.length === 3) {
      threeData = [];
    }
    if (threeIndex[0] >= 2) {
      threeIndex[0] -= 1;
      threeIndex[1] -= 1;
      threeIndex[2] -= 1;
    }
    const { data } = this.state;
    data.forEach((value, index) => {
      threeIndex.forEach((val, ind) => {
        const { workingData } = this.state;
        if (index === val - 1) {
          workingData[ind] = value;
        }
        return workingData;
      });
    });
    this.setState({
      threeIndex,
    });
  }

  handleChangeRight() {
    const { threeIndex, data, workingData } = this.state;
    const myLength = data.length;
    const limit = myLength;
    if (threeIndex[0] <= limit - 3) {
      threeIndex[0] -= 1;
      threeIndex[1] -= 1;
      threeIndex[2] -= 1;
    }
    data.forEach((value, index) => {
      threeIndex.forEach((val, ind) => {
        if (index + 1 === val) {
          workingData[ind] = value;
        }
        return workingData;
      });
    });
    this.setState({
      threeIndex,
    });
  }

  backColor(index) {
    const { colorArray } = this.state;
    return colorArray[index - 1];
  }

  render() {
    const { workingData, threeIndex } = this.state;
    const myItems = Object.keys(workingData);
    const display = workingData.length !== 0
      ? (myItems.map((post, i) => (
        <div key={uuidv4()} className="utopian-items">
          <div className="itemContainer">
            <div className="backgroundc" style={{ backgroundColor: `${this.backColor(threeIndex[0] + i)}` }} />
            <Link to={`/model/${workingData[i].id}`}>
              <img alt="img" className="itemsImg" src={`https://res.cloudinary.com/dhxgtfnci/image/upload//hospital/tesla${threeIndex[0] + i}.webp`} />
            </Link>
          </div>
          <p className="teslanames">
            {workingData[i].name}
          </p>
          <div className="dots">............</div>
          <p className="itemdescrption">{workingData[i].description}</p>
          <div className="footer">
            <FaTwitter className="icons" />
            <FaFacebookF className="icons" />
            <FaPinterestP className="icons" />
          </div>
        </div>
      ))) : (<div>Loading</div>);

    return (
      <div className="itemsContainer">
        <button
          type="button"
          className="leftbutton"
          onClick={this.handleChangeLeft}
        >
          <FaAngleLeft />
        </button>
        {display}
        <button
          type="button"
          className="rightbutton"
          onClick={this.handleChangeRight}
        >
          <FaAngleRight />
        </button>
      </div>
    );
  }
}

export default Items;
