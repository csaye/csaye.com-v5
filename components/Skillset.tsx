import { skillset } from '../data/skillset'
import styles from '../styles/components/Skillset.module.scss'
import Section from './Section'

export default function Skillset() {
  return (
    <div className={styles.container}>
      <h1>Skillset</h1>
      <div className={styles.sections}>
        {skillset.map((section, i) => (
          <Section section={section} key={i} />
        ))}
      </div>
      <p>+ more</p>
    </div>
  )
}
