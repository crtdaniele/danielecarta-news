import React from 'react';
import Logo from '../../../assets/images/logo.png'
import LogoDark from '../../../assets/images/logo-dark.png'
import styles from './Header.module.scss'
import { useTheme } from '../../../hooks/useTheme'

const Header = () => {
  const { theme } = useTheme()!;

  return (
    <div className={styles.Header}>
      <img alt="Daniele Carta - Digital Library" src={theme === "light" ? Logo : LogoDark} />
    </div>
  );
}

export default Header;