import fetchJsonp from 'fetch-jsonp'

export function handleSearchTextChange(text) {
  return {
    type: 'SEARCH_TEXT_CHANGE',
    text
  };
}

export function requestSearch() {
  return {
    type: 'REQUEST_SEARCH'
  };
}
  
export function receiveSearch(resultList) {
  return {
    type: 'RECEIVE_SEARCH',
    errorMsg: '',
    resultList
  };
}

export function errorSearch(errorMsg) {
  return {
    type: 'ERROR_SEARCH',
    errorMsg
  };
}

export function handleSearchTextSubmit(searchText) {
  return function(dispatch) {
    const pagePrefix = 'https://en.wikipedia.org/?curid=';
    let pageLink = '';

    dispatch(requestSearch());

    fetchJsonp('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='+ searchText +'&callback=JSON_CALLBACK')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log("data: ", data);
        const pages = data.query.pages;

        /* Return a list with the enumerables elements from a object  */
        const result = Object.keys(pages).map((page, index) => {
          pageLink = pagePrefix + pages[page].pageid;
          return {
            'title': pages[page].title,
            'body': pages[page].extract,
            'page': pageLink
          };
        });

        console.log("RESULT: ", result);

        dispatch(receiveSearch(result));
    })
    .catch(function (ex) {
      dispatch(errorSearch(ex.message));
    });
  }
}