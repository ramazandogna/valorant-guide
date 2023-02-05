import React from 'react';
import styles from '../../styles/header.module.css';

function Header() {
   return (
      <header className={styles.header}>
         <div className={styles.navbar}>
            <div className={styles.logo}>LOGO</div>
            <ul>
               <li className={styles.listItem}>Agents</li>
               <li className={styles.listItem}>Maps</li>
               <li className={styles.listItem}>Items</li>
               <li className={styles.listItem}>Roles</li>
            </ul>
         </div>
      </header>
   );
}

export default Header;
