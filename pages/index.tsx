import { useRef } from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import styles from '../styles/pages/Index.module.scss';

export default function Index() {
  const introScrollRef = useRef<HTMLSpanElement>(null);
  const projectsScrollRef = useRef<HTMLSpanElement>(null);
  const skillsetScrollRef = useRef<HTMLSpanElement>(null);

  // section scroll functions
  const introScroll = () => introScrollRef.current?.scrollIntoView();
  const projectsScroll = () => projectsScrollRef.current?.scrollIntoView();
  const skillsetScroll = () => skillsetScrollRef.current?.scrollIntoView();

  return (
    <div className={styles.container}>
      <Header />
      <Intro introScroll={introScroll} />
      <span
        className={styles.scrollRef}
        ref={scrollRef}
      />
      <span className={styles.scrollRef} ref={introScrollRef} />
      <span className={styles.scrollRef} ref={projectsScrollRef} />
      <Projects />
      <span className={styles.scrollRef} ref={skillsetScrollRef} />
    </div>
  );
}
