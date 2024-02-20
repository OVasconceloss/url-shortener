import { useState } from "react";
import { useDarkSide } from "../../hooks/userDarkSide";

export const DarkModeButton = () => {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === 'dark');

    const toggleDarkMode = () => {
        const newTheme = darkSide ? 'light' : 'dark';
        setTheme(newTheme);
        setDarkSide(!darkSide);
    }

    return (
        <button className="w-20 rounded-lg p-1 ml-2 border-2 bg-transparent text-blue-500 text-lg transition ease-linear 
        hover:bg-blue-500 hover:text-white hover:border-blue-500" onClick={toggleDarkMode}>
            <i className={`fa-solid fa-${darkSide ? 'sun' : 'moon'}`}></i>
        </button>
    );
};