import { useEffect, useState } from 'react';
import Card from '../components/Card';
import initialHotDogs from '../initialHotDogs.json';
import styles from './AllHotDogsView.module.css';

export default function AllHotDogsView() {
  const [hotDogs, setHotDogs] = useState(initialHotDogs);
  const [editId, setEditId] = useState('');
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    console.log('initial HotDogs', initialHotDogs);
    console.log('hotDogs', hotDogs);
  }, []);
  function handleClick(id, event) {
    event.preventDefault();
    console.log('id', id);
    setEditMode(true);
  }

  return (
    <div>
      <h1>All hot-dogs</h1>
      <ul className={styles.List}>
        {hotDogs.map(({ id, img, price, name, description }) => (
          <li key={id} className={styles.Item}>
            {/* <img src={img} /> */}
            <h2 className={styles.Name}>{name}</h2>
            <p>{price}$</p>
            <p className={styles.Description}>{description}</p>
            {!editMode && (
              <button
                type="button"
                className={styles.Btn}
                onClick={handleClick.bind(this, id)}
              >
                Edit
              </button>
            )}
            <div className={styles.BtnContainer}>
              {editMode && (
                <button type="submit" className={styles.Btn}>
                  Upgrade
                </button>
              )}
              {editMode && (
                <button type="submit" className={styles.Btn}>
                  Delete
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
