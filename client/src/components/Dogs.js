import React, {useEffect}  from 'react';
import Dog from './Dog';
import { connect, useDispatch } from "react-redux";
import { getDogs } from '../actions/index'

function Dogs(props){
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getDogs())}, []);

   return (
     <div className="dogs">
       {props.dogs && props.dogs.map((dog)=>
        <Dog 
          name= {dog.name}
          img= {dog.img}
          temperament = {dog.temperament}
        />
       )}
     </div>
   )
}

function mapStateToProps(state){
  return{
    dogs: state.dogs
  }
}
function mapDispatchToProps(dispatch){
  return{
    getDogs: dogs => dispatch(getDogs(dogs)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dogs);