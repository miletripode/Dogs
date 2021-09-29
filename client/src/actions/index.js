export function getDogs() {
    return function(dispatch) {
        fetch("http://localhost:3001/dogs")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_DOGS", payload: json });
        });
    };
}

export function getDogDetail(id) {
  return function(dispatch) {
      fetch("http://localhost:3001/dogs/"+id)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_DOG_DETAIL", payload: json });
      });
  };
}

export function getTemperaments() {
  return function(dispatch) {
      fetch("http://localhost:3001/temperaments")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_TEMPERAMENTS", payload: json });
      });
  };
}

export function addDog(payload) {
  return { type: "ADD_DOG", payload };
}

export function orderAlphabetically(payload) {
  return { type: "ORDER_ALPHABETICALLY", payload };
}
