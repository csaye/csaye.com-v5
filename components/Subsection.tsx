import { SkillsetSubsection } from '../data/skillset'
import styles from '../styles/components/Subsection.module.scss'

type Props = {
  subsection: SkillsetSubsection
}

export default function Subsection(props: Props) {
  const { subsection } = props
  const { title, icons } = subsection

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.icons}>
        {icons.map((icon, i) => (
          <div key={i}>{icon}</div>
        ))}
      </div>
    </div>
  )
}
