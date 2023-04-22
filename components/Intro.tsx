import { ArrowDownward, ArrowForward, Email, GitHub, LinkedIn } from '@mui/icons-material';
import Image from 'next/image';
import { ReactNode, RefObject, useEffect, useState } from 'react';
import styles from '../styles/components/Intro.module.scss';
import Background from './Background';

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
  heightRef: RefObject<HTMLDivElement>;
};

export default function Intro(props: Props) {
  const { projectsScroll, heightRef } = props;

  const [playerHovered, setPlayerHovered] = useState(false);
  const [height, setHeight] = useState(0);

  // listen for height update
  useEffect(() => {
    function updateHeight() {
      if (!heightRef.current) return;
      setHeight(heightRef.current.getBoundingClientRect().height);
    }
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [heightRef]);

  return (
    <div
      className={styles.container}
      style={height ? { height: `calc(${height}px - var(--header))` } : undefined}
    >
      <Background />
      <div className={styles.hello}>
        <h1>
          <b>Hey there!</b><br />
          I&apos;m Cooper Saye.
        </h1>
        <hr />
        <p className={styles.bio}>
          I&apos;m a student at the{' '}
          <u>University of Michigan</u> pursuing a BSE in computer science.{' '}
          I&apos;m passionate about <u>full-stack web development</u>,{' '}
          <u>creative coding</u>, and <u>domain names</u>. Check out some of
          my work below!
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
