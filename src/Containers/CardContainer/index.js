import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../Components/MovieCard';
import './styles.css';
import PropTypes from 'prop-types';

export class CardContainer extends Component {
  constructor(props) {
    super(props);
  }

  cardsDisplay = () => {
    const cards = this.props.movies.map((movie, index) => {
      return <MovieCard  {...movie} key={index} />;
    });
    return cards;
  }

  render () {
    return (
      <div className="card-container">{this.cardsDisplay()}</div>
    );
  }
}

CardContainer.propTypes = {
  movies: PropTypes.array.isRequired
};

export const mapStateToProps = (state) => ({
  movies: state.moviesData
});

export default connect(mapStateToProps)(CardContainer);


