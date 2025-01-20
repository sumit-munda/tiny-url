import React, { useState, useEffect } from 'react';
import {domain, logo} from "../../main"

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  // Function to change the theme
  const changeTheme = (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme); // Apply the theme
    setTheme(newTheme); // Update the state for display
    localStorage.setItem('theme', newTheme); // Optionally persist the theme choice
  };

  // Effect to load the theme on initial render from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Fallback to system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = systemPrefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.setAttribute('data-theme', initialTheme);
    }
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center p-5">
      <h1 className="text-4xl font-bold text-primary mb-6">Codecademy Inspired Theme Switcher</h1>

      <div className="mb-6">
        <p className="text-xl text-textLight">Current Theme: <strong>{theme}</strong></p>
      </div>
          <img src={domain} alt="domain" width={100}/>
          <img src={logo} alt="logo" width={100}/>

      {/* Theme buttons */}
      <div className="space-x-4">
        <button
          onClick={() => changeTheme('light')}
          className="btn btn-primary"
        >
          Light Theme
        </button>

        <button
          onClick={() => changeTheme('dark')}
          className="btn btn-dark"
        >
          Dark Theme
        </button>

        <button
          onClick={() => changeTheme('corporate')}
          className="btn btn-accent"
        >
          Corporate Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
