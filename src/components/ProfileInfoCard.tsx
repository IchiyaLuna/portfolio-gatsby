// Styles
import styles from '../assets/style/profile_info_card.module.scss';
// Component
const ProfileInfoCard = (): JSX.Element => (
  <div className={styles.card}>
    <p>
      <i className="fa-solid fa-fw fa-location-dot" />
      Seoul, Korea
    </p>
  </div>
);

export default ProfileInfoCard;
