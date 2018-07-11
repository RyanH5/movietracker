import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../Components/MovieCard';

export class CardContainer extends Component {
  constructor(props) {
    super(props);
  }

  cardsDisplay = () => {
    console.log(this.props.movies)
    const cards = this.props.movies.map(movie => {
      return <MovieCard  average={movie.average} />
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



