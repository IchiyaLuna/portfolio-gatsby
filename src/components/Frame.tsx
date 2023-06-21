// Styles
import styles from '../assets/style/frame.module.scss';
// Static Data
import MenuData from '../static/menuData.json';
// Props Type
type Props = {
  setIsForceSidebar: () => void;
};
// Component
const Frame = ({ setIsForceSidebar }: Props): JSX.Element => {
  const getLocationName = (pathname: string) => {
    const { name } = MenuData.map(({ links }) =>
      links.find((link) => link.to === pathname),
    ).filter(
      (element): element is { icon: string; name: string; to: string } =>
        !!element,
    )[0];

    return name;
  };

  return (
    <div className={styles.frame}>
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.control_exit}
          aria-label="terminate"
        >
          <i className="fa-solid fa-xmark" />
        </button>
        <button
          type="button"
          className={styles.control_contract}
          aria-label="terminate"
        >
          <i className="fa-solid fa-minus" />
        </button>
        <button
          type="button"
          className={styles.control_expand}
          aria-label="terminate"
        >
          <i className="fa-solid fa-plus" />
        </button>
        <div className={styles.side_toggle}>
          <button
            type="button"
            onClick={setIsForceSidebar}
          >
            <i className="fa-regular fa-bars" />
          </button>
        </div>
      </div>
      <div className={styles.title}>
        <h4>aa</h4>
      </div>
      <div className={styles.toolbar}>a</div>
    </div>
  );
};

export default Frame;
