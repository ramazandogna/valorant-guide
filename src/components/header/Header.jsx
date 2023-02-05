import React from 'react';
import styles from '../../styles/header.module.css';

function Header() {
   return (
      <header className={styles.header}>
         <div className={styles.navbar}>
            <div className={styles.logo}>LOGO</div>
            <ul>
               <li className={styles.listItem}>Item 1</li>
               <li className={styles.listItem}>Item 2</li>
               <li className={styles.listItem}>Item 3</li>
               <li className={styles.listItem}>Item 4</li>
               <li className={styles.listItem}>Item 5</li>
            </ul>
         </div>
      </header>
   );
}

export default Header;
