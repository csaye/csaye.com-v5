import Image from 'next/image';
import { Project as ProjectType } from '../data/projects';
import styles from '../styles/components/Project.module.scss';

type Props = {
  project: ProjectType;
};

export default function Project(props: Props) {
  const { project } = props;
  const { title, about, image, buttons } = project;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={`/img/projects/${image}`}
          layout="fill"
          objectFit="contain"
          placeholder="blur"
          blurDataURL={`/img/projects/${image}`}
          alt={image}
        />
      </div>
      <h1>{title}</h1>
      <p>{about}</p>
      <div className={styles.buttons}>
        {
          buttons.map((button, i) =>
            <div className={styles.button} key={i}>
              <a href={button.link} target="_blank" rel="noreferrer">
                {button.label}
              </a>
            </div>
          )
        }
      </div>
    </div>
  );
}
