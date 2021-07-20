/*ACTIONS DOGS
getDogs ---> devuelve las primeras 8 razas de perros en la api + las de la DB
getBreedDetail ---> recibe un id y devuelve el detalle de una raza en particular
getDogsByName ---> recibe un nombre y devuelve las primeras 8 razas de perro con ese nombre
getTemperaments ---> devuelve todos los temperamentos de la base de datos
addDog ---> recibe info del formulario y crea un perro en la base de datos*/

export function getDogs() {
    return function(dispatch) {
        fetch("http://localhost:3001/dogs")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_DOGS", payload: json });
        });
    };
}

export function getdDogDetail(id) {
  return function(dispatch) {
    return fetch("http://localhost:3001/dogs/"+id)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_DOG_DETAIL", payload: json });
      });
  };
}

export function addDog(payload) {
    return { type: "ADD_DOG", payload };
}

// export function removeMovieFavorite(payload) {
//     return { type: "REMOVE_MOVIE_FAVORITE", payload };
// }