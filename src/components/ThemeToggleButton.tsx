// React Core
import { useEffect, useState } from 'react';
// Styles
import styles from '../assets/style/theme_button.module.scss';
// Component
const ThemeToggleButton = (): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <button
      type="button"
      className={styles.theme_toggle}
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      <i
        className={['fa-solid', isDarkMode ? 'fa-moon' : 'fa-sun-bright'].join(
          ' ',
        )}
      />
    </button>
  );
};

export default ThemeToggleButton;
