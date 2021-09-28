import React from "react";
import styles from './Search.module.css';
import {BsSearch} from 'react-icons/bs'

export default function Search(){
    return (
        <div >
            <form className={styles.box}>
            <input 
                className={styles.input} 
                type="search" 
                placeholder="Search a breed" 
            />
            <button className={styles.submit} type="submit"><BsSearch/></button>    
        </form>
        </div>
    )
}