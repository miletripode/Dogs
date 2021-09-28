import React from 'react';
import styles from './Dog.module.css'

export default function Dog({name, img, temperament }){
    return (
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src={img}/>
          <div className={styles.title}>
          <span>{name}</span>
          </div>
        </div>
        <div className={styles.temperaments}>
          <p>{temperament}</p>
        </div>
      </div>
    )
}
