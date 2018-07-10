import React, { Component } from 'react';
import './styles.css';
import { fetchSomeMovies } from '../../apiCalls';
import { movieCleaner } from '../../cleaners'

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  async componentDidMount (){
    const uncleanedMovies = await fetchSomeMovies()
    const movies = movieCleaner(uncleanedMovies)
    console.log(movies);
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;