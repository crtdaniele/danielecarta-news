import React from 'react';
import { FaHeartbeat } from "react-icons/fa";
import styles from './Footer.module.scss'
import { useTheme } from '../../../hooks/useTheme'

const Footer = () => {

  const { theme } = useTheme()!;

  return (
    <div className={theme === "light" ? styles.Footer : `${styles.Footer} ${styles["Footer--dark"]}`}>
        <p>Made in Switzerland with <FaHeartbeat></FaHeartbeat></p>
    </div>
  );
}

export default Footer;