const initialState = {
    dogs: [],
    temperaments: [],
    dogDetail: {}
  }
  
  function rootReducer(state = initialState, action) {
    if (action.type === "GET_DOGS") {
      return {
        ...state,
        dogs: state.dogs.concat(action.payload)
      }
    }
    if (action.type === "GET_DOG_DETAIL") {
      return {
        ...state,
        dogDetail: action.payload
      }
    }
    if (action.type === "ADD_DOG") {
      return {
        ...state,
        dogs: state.dogs.concat(action.payload)
      }
  }    
    return state;
  }
  
export default rootReducer;