import React from 'react';
import styles from '../../styles/notice.module.css';

function Notice() {
   return (
      <div className={styles.main}>
         <h2 className={styles.h2}>
            This guide created by
            <span className={styles.name}> Ramazan </span>
            for education
         </h2>
      </div>
   );
}

export default Notice;
