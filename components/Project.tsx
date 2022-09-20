import Image from 'next/image';
import { Project as ProjectType } from '../data/projects';
import styles from '../styles/components/Project.module.scss';

type Props = {
  project: ProjectType;
};

export default function Project(props: Props) {
  const { project } = props;
  const { title, about, image } = project;

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div className={styles.image}>
        <Image
          src={`/img/projects/${image}`}
          layout="fill"
          objectFit="contain"
          alt={image}
        />
      </div>
      <p>{about}</p>
    </div>
  );
}
