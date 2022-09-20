import { useRef } from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import styles from '../styles/pages/Index.module.scss';

export default function Index() {
  const scrollRef = useRef<HTMLSpanElement>(null);

  // scrolls user to first section
  function introScroll() {
    scrollRef.current?.scrollIntoView();
  }

  return (
    <div className={styles.container}>
      <Header />
      <Intro introScroll={introScroll} />
      <span ref={scrollRef} />
      <Projects />
    </div>
  );
}
