// React Router
import { Link } from 'gatsby';
// Styles
import styles from '../assets/style/sidebar.module.scss';
// Types
type Props = {
  title: string;
  links: {
    icon: string;
    name: string;
    to: string;
  }[];
};
// Component
const SidebarItem = ({ title, links }: Props): JSX.Element => (
  <div className={styles.side_item}>
    <div>{title}</div>
    {links.map(({ icon, name, to }) => {
      if (to.startsWith('http')) {
        return (
          <a
            key={name}
            href={to}
            target="_blank"
            rel="noreferrer"
          >
            <i className={icon} />
            {name}
          </a>
        );
      }
      return (
        <Link
          key={name}
          to={to}
        >
          <i className={icon} />
          {name}
        </Link>
      );
    })}
  </div>
);

export default SidebarItem;
