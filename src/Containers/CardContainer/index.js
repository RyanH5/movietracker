import React, { Component } from 'react';
import { connect } from 'react-redux';

export class CardContainer extends Component {

  render () {
    return (
      <div>hi</div>
    );
  }
}

export const mapStateToProps = (state) => {

  movies: state.moviesData
}

export default connect(mapStateToProps)(CardContainer);



