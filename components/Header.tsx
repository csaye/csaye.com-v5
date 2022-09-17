import Image from 'next/image';

import styles from '../styles/components/Header.module.scss';

export default function Header() {
  return (
    <div className={styles.container}>
      <a href="#home">
        <Image
          src="/img/logo.svg"
          width="64"
          height="64"
          alt="logo"
        />
      </a>
      <h1>Cooper Saye</h1>
      <span style={{ flexGrow: 1 }} />
      <a href="#home">Home</a>
      <a href="#skillset">Skillset</a>
      <a href="#projects">Projects</a>
    </div>
  );
}
