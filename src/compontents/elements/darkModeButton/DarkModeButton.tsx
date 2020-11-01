import React from 'react';
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa";
import styles from './DarkModeButton.module.scss'
import { useTheme } from '../../../hooks/useTheme'

function DarkModeButton() {
    const {theme, setTheme} = useTheme()!;

    const handleChange = (theme: string) => {
        setTheme(theme);
        localStorage.setItem("theme", theme);
    }

    return (
        <div className={theme === "light" ? styles.styleMode : `${styles.styleMode} ${styles["styleMode--dark"]}`}>
            {theme === "light" ? (<FaRegLightbulb onClick={() => handleChange("dark")}></FaRegLightbulb>) : (<FaLightbulb onClick={() => handleChange("light")}></FaLightbulb>)}
        </div>
    );
}

export default DarkModeButton;