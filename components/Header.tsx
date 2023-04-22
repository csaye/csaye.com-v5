import { useEffect, useState } from 'react';
import styles from '../styles/components/Header.module.scss';

type Props = {
  introScroll: () => void;
  projectsScroll: () => void;
  skillsetScroll: () => void;
};

export default function Header(props: Props) {
  const { introScroll, projectsScroll, skillsetScroll } = props;

  const [isTop, setIsTop] = useState(true);

  // on start
  useEffect(() => {
    // called on page scroll
    function onScroll() {
      setIsTop(!window.scrollY);
    }
    // set up scroll event listener
    addEventListener('scroll', onScroll);
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={
      isTop ? styles.container : `${styles.container} ${styles.top}`
    }>
      <h1 onClick={introScroll} className={styles.big}>Cooper Saye</h1>
      <h1 onClick={introScroll} className={styles.small}>CS</h1>
      <span style={{ flexGrow: 1 }} />
      <button onClick={introScroll}>Home</button>
      <button onClick={skillsetScroll}>Skillset</button>
      <button onClick={projectsScroll}>Projects</button>
    </div>
  );
}
