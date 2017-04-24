import React from 'react'
import { connect } from 'react-redux'

class ResultList extends React.Component {

  render() {
    console.log("Rendering results");
    const result = this.props.searchResult.map((result, index) => {
      return (
        <a key={index} href={result.page} className="flex-container-itens list-group-item">
          <h4>{result.title}</h4>
          <p>{result.body}</p>
        </a>
      );
    })

    /* In the current version of React, it is not possible to return multiple ReactElement items from the render function. Is necessary to wrap the results in container */
    return <div>{result}</div>;
  }
}

function mapStateToProps(state) {
  return {
    searchResult: state.searchResult
  };
}

export default connect(mapStateToProps)(ResultList);
// connect return a new component with the seme name as the one it connects to (ResultList). 
// This new component gets subscribed to the redux store and gets access to the state and dispatchs according to the map functions that are passed in the first connect call
