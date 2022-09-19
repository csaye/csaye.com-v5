import { ArrowDownward, ArrowForward, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
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
  introScroll: () => void;
};

export default function Intro(props: Props) {
  const { introScroll } = props;

  return (
    <div className={styles.container}>
      <div className={styles.hello}>
        <h1>
          <b>Hey there!</b><br />
          I&apos;m Cooper Saye.
        </h1>
        <hr />
        <p className={styles.bio}>
          I&apos;m a{' '}
          <Tooltip
            title={
              <p style={{ fontSize: '16px', margin: '8px' }}>
                Read about the contest here:<br />
                <a
                  className="url"
                  href="https://congressionalappchallenge.us"
                  target="_blank"
                  rel="noopener noreferrer"
                >CongressionalAppChallenge.us</a>
              </p>
            }
            {...tooltipProps}
          >
            <u>Congressional App Challenge Winner</u>
          </Tooltip>
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
        <div className={styles.player}>
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
        onClick={introScroll}
      >
        <ArrowDownward />
      </button>
    </div>
  );
}
