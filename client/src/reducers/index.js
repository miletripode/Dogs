const initialState = {
    dogs: [],
    dogsStatic: [],
    temperaments: [],
    dogDetail: {}
}
  
export default function rootReducer(state = initialState, action) {
  switch(action.type){
    case "GET_DOGS":
      return {
        ...state,
        dogs: state.dogs.concat(action.payload),
        dogsStatic: state.dogsStatic.concat(action.payload)
      }
    case "GET_DOG_DETAIL":
      return {
        ...state,
        dogDetail: action.payload
      }
    case "ADD_DOG":
      return {
        ...state,
        dogs: state.dogs.concat(action.payload)
      }  
    case "GET_TEMPERAMENTS":
      return {
        ...state,
        temperaments: action.payload
      }
    case 'ORDER_ALPHABETICALLY':
      let sortedArray = action.payload === 'az' ? 
      state.dogs.sort(function(a,b){
        if(a.name > b.name){
            return 1
        }
        if(b.name > a.name){
            return -1
        }
        return 0
      }) : 
      state.dogs.sort(function(a,b){
        if(a.name > b.name){
            return -1
        }
        if(b.name > a.name){
            return 1
        }
        return 0
      }) 
      return{
        ...state,
        dogs: sortedArray
      }   
    default: return state  
  }  
}
  