import { Code, EmojiEvents, School } from '@mui/icons-material';
import styles from '../styles/components/Intro.module.scss';

type LinkProps = {
  href: string;
  children: ReactNode;
};

function Link(props: LinkProps) {
  const { href, children } = props;

  return (
    <p className={styles.link}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ArrowForward className={styles.arrow} />
        <span className={styles.content}>{children}</span>
      </a>
    </p>
  );
}

export default function Intro() {
  return (
    <div className={styles.container}>
      <div className={styles.hello}>
        <h1>Hi!<br />I&apos;m Cooper Saye.</h1>
        <p><Code />Computer Science Student</p>
        <p><School />University of Michigan</p>
        <p><EmojiEvents />Congressional App Challenge Winner</p>
      </div>
      <div className={styles.latest}>
      </div>
    </div>
  );
}
