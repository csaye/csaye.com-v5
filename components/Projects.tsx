import { projects } from '../data/projects';
import styles from '../styles/components/Projects.module.scss';
import Project from './Project';

export default function Projects() {
  return (
    <div className={styles.container}>
      {
        projects.map((project, i) =>
          <Project
            project={project}
            key={i}
          />
        )
      }
    </div>
  );
}
