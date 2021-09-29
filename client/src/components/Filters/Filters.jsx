import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getTemperaments, orderAlphabetically } from "../../actions";
import styles from './Filters.module.css'

export default function Filters({handleSortAlphabetically}){

    const dispatch = useDispatch()
    const temperaments = useSelector((state) => state.temperaments)

    const [orden, setOrden] = useState('')


    function handleSortWeight (e){
        e.preventDefault();
        //dispatch(orderByRating(e.target.value))
        // setCurrentPage(1);
        // setOrden(`Ordenado ${e.target.value}`)
    };

    function handleSelectTemperaments (e){
        e.preventDefault();
        //dispatch(filterByGenre(e.target.value))
        // setCurrentPage(1);
        // setOrden(`Ordenado ${e.target.value}`)
    };
    function handleSelectCreated (e){
        e.preventDefault();
        //dispatch(filterCreated(e.target.value))
        // setCurrentPage(1);
        // setOrden(`Ordenado ${e.target.value}`)
    };

    useEffect(() => 
        dispatch(getTemperaments())
    ,[])

    return(
        <div className={styles.filters}>
            <ul className={styles.ul}>
            <li>
                <select className={styles.select} onChange={e => handleSortAlphabetically(e)}>
                    <option value=''>Alphabetically</option>
                    <option value='az'>A-Z</option>
                    <option value='za'>Z-A</option>
                </select>
            </li>
            <li>
                <select className={styles.select} onChange={e => handleSelectTemperaments(e)}>
                    <option value=''>Temperaments</option>
                    {temperaments.map((t) => (
                    <option value={t.name}>{t.name}</option>
                    ))}
                </select>
            </li>
            <li>
                <select className={styles.select} onChange={e => handleSortWeight(e)}>
                    <option value=''>Weight</option>
                    <option value='des'>Highest Weight</option>
                    <option value='asc'>Lowest Weight</option>
                </select>
            </li>
            <li>
                <select className={styles.select} onChange={e => handleSelectCreated(e)}>
                <option value=''>From</option>
                <option value='created'>Created</option>
                <option value='api'>Api</option>
                </select>
            </li>
            </ul>
        </div>
    )
}