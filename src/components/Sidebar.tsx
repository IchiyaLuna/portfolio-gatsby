// React Core
import { useEffect, useState } from 'react';
// Components
import SidebarItem from './SidebarItem';
// Styles
import styles from '../assets/style/sidebar.module.scss';
// Static Data
import MenuData from '../static/menuData.json';
// Props Type
type Props = {
  isForceSidebar: boolean;
  setIsForceSidebar: (value: boolean) => void;
};
// Component
const Sidebar = ({ isForceSidebar, setIsForceSidebar }: Props): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isActive, setIsActive] = useState(windowWidth > 946);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener('resize', () =>
        setWindowWidth(window.innerWidth),
      );
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 768) {
      setIsForceSidebar(false);
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [windowWidth, setIsForceSidebar]);

  return (
    <div
      className={[
        isForceSidebar || isActive ? styles.active : styles.inactive,
        styles.sidebar,
      ].join(' ')}
    >
      {MenuData.map(({ title, links }) => (
        <SidebarItem
          key={title}
          title={title}
          links={links}
        />
      ))}
    </div>
  );
};

export default Sidebar;
