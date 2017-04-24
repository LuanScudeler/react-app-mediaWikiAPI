const reducer = (state = {
    isFetching: false,
    errorMsg: '',
    searchText: '',
    searchResult: []
  }, action) => {
  switch(action.type) {
    case 'SEARCH_TEXT_CHANGE':
      return {...state, searchText: action.text}
    case 'REQUEST_SEARCH':
      return {...state, isFetching: true }
    case 'RECEIVE_SEARCH':
      return {...state, 
              searchResult: action.resultList,
              errorMsg: action.errorMsg,
              isFetching: false }
    case 'ERROR_SEARCH':
      return {...state, 
              errorMsg: action.errorMsg, 
              isFetching: false }
    default:
      return state;
  }
}

export default reducer;