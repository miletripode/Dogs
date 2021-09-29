import React from 'react';
import { addDog } from '../../actions/index';
import { connect } from 'react-redux';
import styles from './CreatingDog.module.css'

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
      <div className={styles.background}>
        <form onSubmit={handleOnSubmit} className={styles.box} >
          <h3>Create a dog!</h3>
          <div className={styles.formGroup}>
            <label>Name</label>
              <input 
                name="name" 
                value={state.name} 
                onChange={handleOnChange}
              />
          </div>
          <div className={styles.formGroup}>
            <label>Temperament</label>
              <input 
                name="temperament" 
                value={state.temperament} 
                onChange={handleOnChange}
              />
          </div> 
          <div className={styles.formGroup}>
            <label>Life Span</label>
              <input 
              name="life_span" 
              value={state.life_span} 
              onChange={handleOnChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Height Max</label>
              <input 
              name="height" 
              value={state.height.max} 
              onChange={handleOnChange}
              />
          </div>
          <div className={styles.formGroup}>
            <label>Height Min</label>
              <input 
              name="height_min" 
              value={state.height.min} 
              onChange={handleOnChange}
              />
          </div>
          <div className={styles.formGroup}>
            <label>Weight Max</label>
              <input 
              name="weight" 
              value={state.weight.max} 
              onChange={handleOnChange}
              />
          </div>
          <div className={styles.formGroup}>
            <label>Weight Min</label>
              <input 
              name="weight_min" 
              value={state.weight.min} 
              onChange={handleOnChange}
              />
          </div>  
          <div className={styles.formGroup}>
            <button type="submit">Submit</button> 
          </div>    
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