import React, {useEffect, useState}  from 'react';
import Dog from '../Dog/Dog.jsx'
import { useDispatch, useSelector } from "react-redux";
import { getDogs, orderAlphabetically } from '../../actions/index'
import Pagination from '../Pagination/Pagination.jsx';
import styles from './Dogs.module.css'
import Filters from '../Filters/Filters.jsx';


export default function Dogs(props){
    const dispatch = useDispatch()
    const dogs = useSelector((state) => state.dogs)
    useEffect(() => { dispatch(getDogs())}, []);

    const [currentPage,setCurrentPage] = useState(1);
    const [dogsPerPage,setDogsPerPage]= useState(8);
    const indexOfLastDog = currentPage * dogsPerPage; 
    const indexOfFirstDog = indexOfLastDog - dogsPerPage; 
    const currentDogs = dogs.slice(indexOfFirstDog,indexOfLastDog)

    const pagination = (pageNumber) => {
      setCurrentPage(pageNumber);
    }; 

    const [orden, setOrden] = useState('')

    function handleSortAlphabetically (e){
      e.preventDefault();
      dispatch(orderAlphabetically(e.target.value))
      setCurrentPage(1);
      setOrden(`Ordenado ${e.target.value}`)
  };

    return (
      <div className={styles.box}>
        <div>
          <Filters 
          handleSortAlphabetically={handleSortAlphabetically}/>
        </div>
        <div>
        <div className={styles.dogs}>
        { currentDogs && currentDogs.map(d => 
          <Dog
            name={d.name}
            temperament={d.temperament}
            img={d.img}
            id={d.id}
          />
        )}
        </div>
        <div>
        <Pagination
          elementsPerPage={dogsPerPage}
          allElements={dogs.length} 
          pagination={pagination}
        />
        </div>
      </div>
      </div>
    )
}
