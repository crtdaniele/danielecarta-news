import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import styles from './SocialButtonLinkedin.module.scss'

function SocialButtonLinkedin() {
  return (
    <div className={styles.social}>
      <a title="About me" target="_blank" href="https://www.linkedin.com/in/daniele-carta-lugano/" rel="noopener noreferrer">
        <FaLinkedinIn></FaLinkedinIn>
      </a>
    </div>
  );
}

export default SocialButtonLinkedin;