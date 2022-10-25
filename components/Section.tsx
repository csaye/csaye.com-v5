import { SkillsetSection } from '../data/skillset';
import styles from '../styles/components/Section.module.scss';
import Subsection from './Subsection';

type Props = {
  section: SkillsetSection;
};

export default function Section(props: Props) {
  const { section } = props;
  const { title, subsections } = section;

  return (
    <div className={`${styles.container} wipe`}>
      <h2>{title}</h2>
      <div className={styles.subsections}>
        {
          subsections.map((subsection, i) =>
            <Subsection subsection={subsection} key={i} />
          )
        }
      </div>
    </div>
  );
}
