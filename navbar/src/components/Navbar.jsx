import Logo from './Logo';
import Links from './Links';
import Contacts from './Contacts';
import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Logo />
        <Links />
        <Contacts />
    </div>
  )
}

export default Navbar