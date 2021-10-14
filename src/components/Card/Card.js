import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { menuOperations } from '../../redux';

import styles from './Card.module.css';

export default function Card({ id, price, name, description, img }) {
  const hotDogs = useSelector(state => state.menu.hotDogs);
  const [currName, setCurrName] = useState(name);
  const [currImg, setCurrImg] = useState(img);
  const [currPrice, setCurrPrice] = useState(price);
  const [currDescription, setCurrDescription] = useState(description);
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(menuOperations.updateHotDog);
  }, [dispatch]);
  function handleClick(id, event) {
    event.preventDefault();
    setEditMode(true);
  }

  function handleChangeInput(e) {
    e.preventDefault();
    switch (e.currentTarget.name) {
      case 'name':
        setCurrName(e.currentTarget.value);
        break;
      case 'price':
        setCurrPrice(e.currentTarget.value);
        break;
      case 'description':
        setCurrDescription(e.currentTarget.value);
        break;
      case 'image':
        setCurrImg(e.currentTarget.value);
        break;
      default:
        alert('undefiened input');
    }
  }

  function handleUpdateBtnClick(id, event) {
    const otherHotDogs = hotDogs.filter(hotdog => hotdog.id !== id);
    const existingNames = otherHotDogs.map(hotdog => hotdog.name);
    const isDuplicate = existingNames.includes(currName);
    if (
      (currName !== '',
      currImg !== '',
      currPrice !== '',
      currDescription !== '')
    ) {
      if (!isDuplicate) {
        dispatch(
          menuOperations.updateHotDog({
            id,
            currName,
            currImg,
            currPrice,
            currDescription,
          }),
        );
        setEditMode(false);
      } else {
        alert('This hot-dog exists');
      }
    } else {
      alert('Fill the form please');
    }
  }

  function handleDeleteBtnClick(id, event) {
    dispatch(menuOperations.deleteHotDog(id));
  }
  return (
    <div>
      {!editMode && (
        <div className={styles.Card}>
          <div>
            <img src={currImg} className={styles.Image} alt={currName} />
            <h2 className={styles.Name}>{name}</h2>
            <p className={styles.Price}>{price}$</p>
            <p className={styles.Description}>{description}</p>
          </div>
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
            <input
              className={styles.Input}
              type="url"
              name="image"
              value={currImg}
              placeholder="Image"
              onChange={handleChangeInput}
              required
            />
            <input
              className={styles.Input}
              type="text"
              name="name"
              value={currName}
              placeholder="Name"
              onChange={handleChangeInput}
              required
            />
            <input
              className={styles.Input}
              type="text"
              name="price"
              value={currPrice}
              placeholder="Price"
              onChange={handleChangeInput}
              required
            />
            <textarea
              className={styles.Textarea}
              type="text"
              name="description"
              value={currDescription}
              placeholder="Description"
              onChange={handleChangeInput}
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
