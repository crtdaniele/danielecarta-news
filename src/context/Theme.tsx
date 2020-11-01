import React, { useEffect } from "react";
import IThemeContextType from '../model/ITheme'

export const ThemeContext = React.createContext<IThemeContextType | undefined>(undefined);

type Props = {
    children: React.ReactNode;
};

const defaultTheme = localStorage.getItem("theme");

export const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = React.useState<any>(defaultTheme);

    useEffect(() => {
        if(defaultTheme === null){
            setTheme("light")
            localStorage.setItem("theme", "light")
        }
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};