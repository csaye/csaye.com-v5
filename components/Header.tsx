import styles from '../styles/components/Header.module.scss';

export default function Header() {
  return (
    <div className={styles.container}>
      <h1>Cooper Saye</h1>
      <span style={{ flexGrow: 1 }} />
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skillset">Skillset</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  );
}
