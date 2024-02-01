import React, { Component } from 'react';
import './Carousel.css';
import { images } from '../data/CarouselData';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };

    this.imagesRoute = images[this.state.index].img;
  }

  handleIncrease = () => {
    if (this.state.index === 2) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  };

  handleDecrease = () => {
    if (this.state.index === 0) {
      this.setState({ index: 2 });
    } else {
      this.setState({ index: this.state.index - 1 });
    }
  };

  render() {
    this.imagesRoute = images[this.state.index].img;

    return (
      <div className="flex">
        <ArrowBackIosIcon onClick={this.handleIncrease} />
        <img src={this.imagesRoute} alt="carousel-img" className='images' />
        <ArrowForwardIosIcon onClick={this.handleDecrease} />
      </div>
    );
  }
}

export default Carousel;
