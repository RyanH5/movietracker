import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../Components/MovieCard';

export class CardContainer extends Component {
  constructor(props) {
    super(props);
  }

  cardsDisplay = () => {
    const cards = this.props.movies.map(movie => {
      console.log(movie)
      return <MovieCard  {...movie} />
    });
    return cards;
  }

  render () {
    return (
      <div>{this.cardsDisplay()}</div>
    );
  }
}

export const mapStateToProps = (state) => ({
  movies: state.moviesData
})

export default connect(mapStateToProps)(CardContainer);



