import React from 'react';
import styles from '../styles/Links.module.css';

const Links = () => {
  let data = ['Services','Projects','About']
  return (
    <div className={styles.linkBox}>
        {
          data.map((el)=>{
            return <p className={styles.link}>{el}</p>
          })  
        }
    </div>
  )
}

export default Links