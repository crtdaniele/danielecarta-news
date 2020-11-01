import React from "react";
import { ThemeContext } from '../context/Theme'

export const useTheme = () => React.useContext(ThemeContext);