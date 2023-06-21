// React Core
import { useEffect, useState } from 'react';
// Styles
import styles from '../assets/style/progress_bar.module.scss';
// Types
type Props = {
  title: string;
  max: number;
  current: number;
  delay: number;
};
// Component
const ProgressBar = ({ title, max, current, delay }: Props): JSX.Element => {
  const percent = (current / max) * 100;
  const [barPercent, setBarPercent] = useState(0);

  useEffect(() => {
    setTimeout(() => setBarPercent(percent), delay * 250);
  }, [percent, delay]);

  return (
    <div className={styles.wrapper}>
      <p>{title}</p>
      <div className={styles.background}>
        <div
          className={styles.bar}
          style={{ width: `${barPercent}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
