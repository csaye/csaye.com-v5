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
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={`/img/projects/${image}`}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={`/img/projects/${image}`}
            alt={image}
          />
        </a>
      </div>
      <h1>{title}</h1>
      <p>{about}</p>
        <div className={styles.buttons}>
          {
            buttons.map((button, i) =>
              <div className={styles.button} key={i}>
                <a
                  className="wipe button"
                  href={button.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{button.label}</span>
                </a>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
