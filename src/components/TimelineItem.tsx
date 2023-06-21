// Styles
import styles from '../assets/style/timeline_item.module.scss';
// Component
const TimelineItem = (): JSX.Element => (
  <div className={styles.wrapper}>
    <div className={styles.marker} />
    <div className={styles.content}>
      <p>Joongdong High</p>
      <p>Joongdong High</p>

      <p>Joongdong High</p>

      <p>Joongdong High</p>
    </div>
  </div>
);

export default TimelineItem;
