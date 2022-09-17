import Image from 'next/image';

import styles from '../styles/components/Header.module.scss';

export default function Header() {
  return (
    <div className={styles.container}>
      <a className={styles.logo} href="#home">
        <Image
          src="/img/logo.svg"
          width="64"
          height="64"
          alt="logo"
        />
      </a>
      <h1>Cooper Saye</h1>
      <span style={{ flexGrow: 1 }} />
      <a className={styles.link} href="#home">Home</a>
      <a className={styles.link} href="#skillset">Skillset</a>
      <a className={styles.link} href="#projects">Projects</a>
    </div>
  );
}
