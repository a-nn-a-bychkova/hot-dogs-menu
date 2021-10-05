import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { menuSelectors, menuOperations } from '../../redux';
import NewYork from '../../images/new-york.JPG';
import styles from './Card.module.css';

export default function Card({ id, price, name, description }) {
  const [currName, setCurrName] = useState(name);
  const [currPrice, setCurrPrice] = useState(price);
  const [currDescription, setCurrDescription] = useState(description);
  const [img, setImg] = useState('');
  const [editId, setEditId] = useState('');
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  function handleClick(id, event) {
    event.preventDefault();
    console.log('id', id);
    setEditMode(true);
  }
  function handleChangeName(e) {
    e.preventDefault();
    setCurrName(e.currentTarget.value);
  }
  function handleChangePrice(e) {
    e.preventDefault();
    setCurrPrice(e.currentTarget.value);
  }
  function handleChangeDescription(e) {
    e.preventDefault();
    setCurrDescription(e.currentTarget.value);
  }
  function handleUpdateBtnClick(id, event) {
    dispatch(
      menuOperations.updateHotDog(id, currName, currPrice, currDescription),
    );
    setEditMode(false);
  }
  function handleDeleteBtnClick(id, event) {
    dispatch(menuOperations.deleteHotDog(id));
    // console.log('id in delete', id);
  }
  return (
    <div>
      {!editMode && (
        <div className={styles.Card}>
          {/* <img src={img} /> */}
          <h2 className={styles.Name}>{name}</h2>
          <p className={styles.Price}>{price}$</p>
          <p className={styles.Description}>{description}</p>

          <button
            type="button"
            className={styles.EditBtn}
            onClick={handleClick.bind(this, id)}
          >
            Edit
          </button>
        </div>
      )}
      {editMode && (
        <div>
         
          <form className={styles.Form}>
            {/* <input
              className={styles.Input}
              // type="image"
              name="image"
              value={img}
              placeholder="Image"
              onChange={handleChangeName}
              required
            /> */}
            <input
              className={styles.Input}
              type="text"
              name="name"
              value={currName}
              placeholder="Name"
              onChange={handleChangeName}
              required
            />
            <input
              className={styles.Input}
              type="text"
              name="price"
              value={currPrice}
              placeholder="Title"
              onChange={handleChangePrice}
              required
            />
            <textarea
              className={styles.Textarea}
              type="text"
              name="description"
              value={currDescription}
              placeholder="Description"
              onChange={handleChangeDescription}
              required
            />
          </form>

          <div className={styles.BtnContainer}>
            <button
              type="submit"
              className={styles.Btn}
              onClick={handleUpdateBtnClick.bind(this, id)}
            >
              Upgrade
            </button>

            <button
              type="submit"
              className={styles.Btn}
              onClick={handleDeleteBtnClick.bind(this, id)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

//img
