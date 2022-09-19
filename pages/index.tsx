import Header from '../components/Header';
import Intro from '../components/Intro';
import styles from '../styles/pages/Index.module.scss';

export default function Index() {

  function introScroll() {
  }

  return (
    <div className={styles.container}>
      <Header />
      <Intro introScroll={introScroll} />
    </div>
  );
}
