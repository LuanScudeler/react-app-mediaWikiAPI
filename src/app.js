import ResultList from './components/ResultList';
import SearchContent from './components/SearchContent';
import React, { Component } from 'react'
import './appStyle.css'

class App extends Component {
  
  render() {
    return (
      <div>
        <div className="container-fluid flex-container-column">
          <h1 className="title">Wikipedia viewer</h1>
          <SearchContent/>
          <a href="https://en.wikipedia.org/wiki/Special:Random" 
            className="btn btn-default randomBtn">
            Random Page
          </a>
          <ul className="list-group">
            <ResultList/>
          </ul>
        </div>
      </div>
    );
  }
}

export default App
