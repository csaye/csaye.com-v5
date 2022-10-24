import { SkillsetSection } from '../data/skillset';
import styles from '../styles/components/Section.module.scss';
import Subsection from './Subsection';

type Props = {
  section: SkillsetSection;
};

export default function Section(props: Props) {
  const { section } = props;
  const { title, subsections } = section;

export default function Section() {
  return (
    <div className={styles.container}>
    </div>
  );
}
