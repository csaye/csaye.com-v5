import { ArrowDownward, ArrowForward, Email, GitHub, LinkedIn } from '@mui/icons-material';
import Image from 'next/image';
import { ReactNode, useState } from 'react';
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

type Props = {
  projectsScroll: () => void;
};

export default function Intro(props: Props) {
  const { projectsScroll } = props;

  const [playerHovered, setPlayerHovered] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.hello}>
        <h1>
          <b>Hey there!</b><br />
          I&apos;m Cooper Saye.
        </h1>
        <hr />
        <p className={styles.bio}>
          I&apos;m a <u>Congressional App Challenge Winner</u> and{' '}
          <u>computer science student</u> at the{' '}
          <u>University of Michigan College of Engineering</u>.{' '}
          I&apos;m a big fan of <u>creative coding</u>{' '}
          and most of my projects have a focus on the web.
        </p>
        <hr />
        <div className={styles.links}>
          <Link href="https://github.com/csaye">
            <GitHub />csaye
          </Link>
          <Link href="https://linkedin.com/in/coopersaye">
            <LinkedIn />coopersaye
          </Link>
          <p className={styles.link}>
            <a href="mailto:cooper@saye.co">
              <ArrowForward className={styles.arrow} />
              <span className={styles.content}>
                <Email />cooper@saye.co
              </span>
            </a>
          </p>
        </div>
      </div>
      <div className={styles.latest}>
        <p>Check out my latest work!</p>
        <ArrowDownward />
        <div
          className={styles.player}
          onClick={projectsScroll}
          onMouseOver={() => setPlayerHovered(true)}
          onMouseLeave={() => setPlayerHovered(false)}
        >
          {
            !playerHovered ?
              <Image
                src="/img/player.png"
                width="384"
                height="384"
                alt="player.png"
                priority
              /> :
              <Image
                src="/img/player2.png"
                width="384"
                height="384"
                alt="player2.png"
                priority
              />
          }
        </div>
      </div>
      <button
        className={styles.scrollButton}
        onClick={projectsScroll}
      >
        <ArrowDownward />
      </button>
    </div>
  );
}
