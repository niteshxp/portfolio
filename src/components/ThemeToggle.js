// ThemeToggle.js
import React from 'react';
import { useTheme } from './utils/themeContext';

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
                } px-4 py-2 rounded-md shadow-md`}
            onClick={toggleTheme}
        >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default ThemeToggle;
