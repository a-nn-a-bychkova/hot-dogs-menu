import logo from '../../images/logo.JPG';
import styles from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="logo" width="32" className={styles.img} />
        <span className={styles.crudText}>CRUD</span>
      </div>
      <button type="button">Add hot-dog</button>
    </header>
  );
}
