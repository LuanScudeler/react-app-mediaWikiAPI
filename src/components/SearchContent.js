import React, { Component } from 'react'
import { handleSearchTextChange, handleSearchTextSubmit } from '../redux/actions/appActions'
import { connect } from 'react-redux'
import FaSearch from 'react-icons/lib/fa/search'

class SearchContent extends Component {
  render () {
    return (
      <div>
        <form action="#" onSubmit={ e => {
           this.props.handleSearchTextSubmit(this.props.searchText, e)} 
          }>
          <div className="flex-container-row">
            <input type="text" 
              value={this.props.searchText} 
              onChange={ e => {
                  this.props.onChange(e.target.value)
                }}
              className="form-control item" />
            <button type="submit" className="btn btn-default">
              <i className="fa" aria-hidden="true"><FaSearch className="item"/></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state - from: mapStateToProps =>", state);
  return {
    searchText: state.searchText
  };
}

function dispatchToProps(dispatch) {
  return {
    onChange: (searchText) => {
      dispatch(handleSearchTextChange(searchText));
    },
    handleSearchTextSubmit: (searchText, e) => {
      e.preventDefault();
      dispatch(handleSearchTextSubmit(searchText))
    }
  };
}

export default connect(mapStateToProps, dispatchToProps)(SearchContent);