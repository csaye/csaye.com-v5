import { Fade } from 'react-awesome-reveal';
import { projects } from '../data/projects';
import styles from '../styles/components/Projects.module.scss';
import Project from './Project';

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <div className={styles.projectsWrapper}>
        <div className={styles.projects}>
          <Fade triggerOnce fraction={0.25}>
            {
              projects.map((project, i) =>
                <Project
                  project={project}
                  key={i}
                />
              )
            }
          </Fade>
        </div>
      </div>
    </div>
  );
}
