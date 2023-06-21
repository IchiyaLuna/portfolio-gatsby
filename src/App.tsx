// React Core
import { useState } from 'react';
// React Router
// import { Route, Routes } from 'react-router-dom';
// Pages
import Profile from './pages/profile';
import Study from './pages/Study';
// Components
import Frame from './components/Frame';
import Sidebar from './components/Sidebar';
import ThemeToggleButton from './components/ThemeToggleButton';
// Styles
import './assets/style/fa-all.css';
import styles from './assets/style/app.module.scss';

const App = (): JSX.Element => {
  const [isForceSidebar, setIsForceSidebar] = useState(false);

  return (
    <div className={styles.app}>
      <div className={styles.background} />
      <div className={styles.window}>
        <Frame setIsForceSidebar={() => setIsForceSidebar(!isForceSidebar)} />
        <div className={styles.body}>
          <Sidebar
            isForceSidebar={isForceSidebar}
            setIsForceSidebar={setIsForceSidebar}
          />
          <div className={styles.content}>a</div>
        </div>
      </div>
      <ThemeToggleButton />
    </div>
  );
};

export default App;
