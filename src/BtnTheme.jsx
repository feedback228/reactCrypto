import React, { useState, useEffect } from 'react';

import light from './assets/icon/light.svg'
import dark from './assets/icon/dark.svg'

const BtnTheme = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark'; 
    });

    useEffect(() => {
        const root = document.documentElement; 
        root.classList.toggle('dark', theme === 'dark'); 
        localStorage.setItem('theme', theme); 
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <button
            onClick={toggleTheme}
            className="backdrop-blur-lg dark:bg-opacity-30 bg-opacity-30 p-2 rounded-md dark:bg-black bg-white dark:text-white text-black transition ease-in-out duration-300 
                  dark:hover:bg-opacity-60 hover:bg-opacity-60"
        >
            {theme === 'dark' ?  <img src={dark} alt="" /> :  <img src={light} alt="" />}
        </button>
    );
};

export default BtnTheme;
