import React from "react";

import '../styles/ThemeToggle.scss';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>
  );
};

export default ThemeToggle;