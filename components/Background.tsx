import { useEffect, useState } from 'react';
import styles from '../styles/components/Background.module.scss';

export default function Background() {
  const [scroll, setScroll] = useState(0);

  // set up scroll event listener
  useEffect(() => {
    function onScroll() {
      const newScroll = Math.min(window.scrollY, window.innerHeight);
      setScroll(newScroll);
    }
    addEventListener('scroll', onScroll);
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div
        style={{ top: `-${scroll * 0.2 + 64}px` }}
        className={styles.content}
      />
    </div>
  );
}
