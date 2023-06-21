// Compoents
import ProfileCard from '../components/ProfileCard';
import ProgressBar from '../components/ProgressBar';
import TimelineItem from '../components/TimelineItem';
// Styles
import styles from '../assets/style/profile.module.scss';
// Component
const Profile = (): JSX.Element => (
  <div className={styles.page}>
    <ProfileCard />
    <div className={styles.section}>
      <h4>Timeline</h4>
      <TimelineItem />
    </div>
    <div className={styles.section_big}>
      <h4>Tech Stacks</h4>
      <ProgressBar
        title="HTML5"
        max={10}
        current={9}
        delay={0}
      />
      <ProgressBar
        title="CSS3"
        max={10}
        current={8}
        delay={1}
      />
      <ProgressBar
        title="SASS"
        max={10}
        current={5}
        delay={2}
      />
      <ProgressBar
        title="Node.js"
        max={10}
        current={7}
        delay={3}
      />
      <ProgressBar
        title="TypeScript"
        max={10}
        current={5}
        delay={2}
      />
    </div>
  </div>
);

export default Profile;
