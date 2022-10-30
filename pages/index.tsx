import { useRef } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Skillset from '../components/Skillset';
import styles from '../styles/pages/Index.module.scss';

export default function Index() {
  const projectsScrollRef = useRef<HTMLSpanElement>(null);
  const skillsetScrollRef = useRef<HTMLSpanElement>(null);

  // section scroll functions
  const introScroll = () => window.scrollTo(0, 0);
  const projectsScroll = () => projectsScrollRef.current?.scrollIntoView();
  const skillsetScroll = () => skillsetScrollRef.current?.scrollIntoView();

  return (
    <div className={styles.container}>
      <Header
        introScroll={introScroll}
        projectsScroll={projectsScroll}
        skillsetScroll={skillsetScroll}
      />
      <Intro projectsScroll={projectsScroll} />
      <span className={styles.scrollRef} ref={skillsetScrollRef} />
      <Skillset />
      <span className={styles.scrollRef} ref={projectsScrollRef} />
      <Projects />
      <Footer />
    </div>
  );
}
