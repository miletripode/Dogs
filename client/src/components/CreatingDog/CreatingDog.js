import React from 'react';
import { addDog } from '../../actions/index';
import { connect } from 'react-redux';

export function CreatingDog(props) {

    const [state, setState] = React.useState({
      name: '',
      height: {
        max: '',
        min: ''
      },
      weight:{
        max: '',
        min: ''
      }, 
      life_span: '',
      temperament: ''
    });
  
    const handleOnChange = (e) =>{
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
    }
  
    const handleOnSubmit = (e) =>{
      e.preventDefault();
      const { name, height, weight,  life_span, temperament } = state
      props.addDog({ name, height, weight, life_span, temperament })
      setState({
        name: '',
        height: {
          max: '',
          min: ''
        },
        weight:{
          max: '',
          min: ''
        }, 
        life_span: '',
        temperament: ''
      })
    }
  
    return (
      <div>
        <form onSubmit={handleOnSubmit}>
          <label>Name</label>
          <textarea name="name" value={state.name} onChange={handleOnChange}/>
          <br></br>
          <label>Temperament</label>
          <input name="temperament" value={state.temperament} onChange={handleOnChange}/>
          <br></br>
          <label>Life Span</label>
          <input name="life_span" value={state.life_span} onChange={handleOnChange}/>
          <br></br>
          <label>Height Max</label>
          <input name="height" value={state.height.max} onChange={handleOnChange}/>
          <br></br>
          <label>Height Min</label>
          <input name="height_min" value={state.height.min} onChange={handleOnChange}/>
          <br></br>
          <label>Weight Max</label>
          <input name="weight" value={state.weight.max} onChange={handleOnChange}/>
          <br></br>
          <label>Weight Min</label>
          <input name="weight_min" value={state.weight.min} onChange={handleOnChange}/>
          <br></br>
          <button type="submit">Submit</button> 
        </form>
      </div>
    )
  };
  
  function mapDispatchToProps(dispatch){
    return{
      addDog: (img, name, height, weight, life_span, temperament ) => dispatch(addDog(img, name, height, weight, life_span, temperament ))
    }
  }
  
export default connect(null, mapDispatchToProps)(CreatingDog)