import { useState } from 'react';
import NewYork from '../../images/new-york.JPG';
import styles from './Card.module.css';

export default function Card({ id, img, price, name, description }) {
  const [editId, setEditId] = useState('');
  const [editMode, setEditMode] = useState(false);
  function handleClick(id, event) {
    event.preventDefault();
    console.log('id', id);
    setEditMode(true);
  }
  return (
    <div>
      {!editMode && (
        <div>
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
        </div>
      )}
      {editMode && (
        <div>
          {/* <img src={img} /> */}
          {/* <table className={styles.Table}>
            <tr className={styles.Tr}>{img}</tr>
            <tr className={styles.Tr}>{name}</tr>
            <tr className={styles.Tr}>{price}</tr>
            <tr className={styles.Tr}>{description}</tr>
          </table> */}
          <form className={styles.Form}>
            <input
              className={styles.Input}
              // type="image"
              name="image"
              value={img}
              placeholder="Image"
              // onChange={handleChangeName}
              required
            />
            <input
              className={styles.Input}
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              // onChange={handleChangeName}
              required
            />
            <input
              className={styles.Input}
              type="text"
              name="title"
              value={price}
              placeholder="Title"
              // onChange={handleChangeName}
              required
            />
            <textarea
              className={styles.Textarea}
              type="text"
              name="description"
              value={description}
              placeholder="Description"
              // onChange={handleChangeName}
              required
            />
          </form>

          <div className={styles.BtnContainer}>
            <button type="submit" className={styles.Btn}>
              Upgrade
            </button>

            <button type="submit" className={styles.Btn}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
//?textarea
//img
