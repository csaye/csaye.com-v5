import { ArrowDownward, ArrowForward, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import Image from 'next/image';
import { ReactNode } from 'react';
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

const tooltipProps = {
  arrow: true,
  componentsProps: {
    tooltip: { sx: { background: '#444' } },
    arrow: { sx: { color: '#444' } }
  }
};

type Props = {
  projectsScroll: () => void;
};

export default function Intro(props: Props) {
  const { projectsScroll } = props;

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
        <Link href="https://github.com/csaye">
          <GitHub />csaye
        </Link>
        <Link href="https://linkedin.com/in/coopersaye">
          <LinkedIn />coopersaye
        </Link>
        <Link href="https://twitter.com/coopercomputer">
          <Twitter />CooperComputer
        </Link>
      </div>
      <div className={styles.latest}>
        <p>Check out my latest work!</p>
        <ArrowDownward />
        <div
          className={styles.player}
          onClick={projectsScroll}
        >
          <Image
            src="/img/player.png"
            width="384"
            height="384"
            alt="player.png"
            unoptimized
            priority
          />
          <Image
            src="/img/player2.png"
            width="384"
            height="384"
            alt="player.png"
            unoptimized
          />
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
