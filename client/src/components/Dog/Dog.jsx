import React from 'react';
import styles from './Dog.module.css'
import {NavLink} from 'react-router-dom'

export default function Dog({name, img, temperament, id }){
    return (
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src={img}/>
          <div className={styles.title}>
          <NavLink className={styles.link} to={`/detail/${id}`}>{name}</NavLink>
          </div>
        </div>
        <div className={styles.temperaments}>
          <p>{temperament}</p>
        </div>
      </div>
    )
}
