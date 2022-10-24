import { SkillsetSubsection } from '../data/skillset';
import styles from '../styles/components/Subsection.module.scss';

type Props = {
  subsection: SkillsetSubsection
}

export default function Subsection(props: Props) {
  const { subsection } = props;
  const { title, icons } = subsection;

  return (
    <div className={styles.container}>
    </div>
  );
}
