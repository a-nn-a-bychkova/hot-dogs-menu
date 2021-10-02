import { useState } from 'react';
import logo from '../../images/logo.JPG';
import styles from './AppBar.module.css';
import Modal from '../Modal';

export default function AppBar() {
  const [openModal, setOpenModal] = useState(false);
  function handleAddHotDogCLick() {
    setOpenModal(true);
  }
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="logo" width="32" className={styles.img} />
        <span className={styles.crudText}>CRUD</span>
      </div>
      <button type="button" onClick={handleAddHotDogCLick}>
        Add hot-dog
      </button>
      {openModal && <Modal />}
    </header>
  );
}
