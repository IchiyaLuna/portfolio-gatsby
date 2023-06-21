// Styles
import styles from '../assets/style/profile_card.module.scss';
// Component
const ProfileCard = (): JSX.Element => (
  <div className={styles.card}>
    <div className={styles.background} />
    <div className={styles.body}>
      <div className={styles.header}>
        <div className={styles.image}>
          <img
            alt="profile"
            src="./image/profile.jpg"
          />
        </div>
        <div className={styles.socials}>
          <a
            href="https://github.com/IchiyaLuna"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-fw fa-github" />
          </a>
        </div>
      </div>
      <div className={styles.profile}>
        <p>
          <i className="fa-solid fa-fw fa-id-badge" />
          Sungha Choi
        </p>
        <p>
          <i className="fa-solid fa-fw fa-briefcase" />
          Web Full-Stack Dev.
        </p>
        <p>
          <i className="fa-solid fa-fw fa-envelope" />
          sungha.choi@mail.lunabi.co.kr
        </p>
      </div>
    </div>
  </div>
);

export default ProfileCard;
