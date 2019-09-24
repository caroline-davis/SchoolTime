import React from 'react';
import styles from './Input.module.css';

export default ({ placeholder, value, onChange }) => {
    return (
        <input type="text"
               placeholder={placeholder}
               className={styles.input}
               value={value}
               onChange={(e) => onChange(e.target.value)}> 
        </input>
    )
}