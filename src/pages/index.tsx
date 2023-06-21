// React Core
import React, { useState } from 'react';
// Components
import Frame from '../components/Frame';
import Sidebar from '../components/Sidebar';
import ThemeToggleButton from '../components/ThemeToggleButton';
// Styles
import '../assets/style/fa-all.css';
import styles from '../assets/style/app.module.scss';

const IndexPage = (): React.FC<PageProps> => {
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

export default IndexPage;
