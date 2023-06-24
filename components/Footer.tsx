import styles from '../styles/components/Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.container}>
      <p>&copy; Cooper Saye {new Date().getFullYear()}</p>
    </div>
  )
}
