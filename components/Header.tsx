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
    // set up scroll event listener
    addEventListener('scroll', onScroll);
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Cooper Saye</h1>
      <span style={{ flexGrow: 1 }} />
      <a href="#home">Home</a>
      <a href="#projects">Projects</a>
      <a href="#skillset">Skillset</a>
    </div>
  );
}
