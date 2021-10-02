import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/menu-actions';
import styles from './Modal.module.css';

export default function Modal() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const hotDogs = useSelector(state => state.menu.hotDogs);
  const dispatch = useDispatch();
  function handleChangeName(e) {
    console.log(e.currentTarget.value);
    setName(e.currentTarget.value);
  }
  function handleChangePrice(e) {
    console.log(e.currentTarget.value);
    setPrice(e.currentTarget.value);
  }
  function handleChangeDescription(e) {
    console.log(e.currentTarget.value);
    setDescription(e.currentTarget.value);
  }
  // function handleChangeImg(e) {
  //   setImg(e.currentTarget.value);
  // }

  function handleAddBtnClick() {
    if ((name !== '', price != '', description != '')) {
      dispatch(actions.addHotDog({ name, price, description }));
      reset();
    } else {
      alert('Fill the form please');
    }
  }
  function reset() {
    setName('');
    setPrice('');
    setDescription('');
    // setImg('');
  }

  function handleNoBtnClick() {
    reset();
  }
  return (
    <div className={styles.Overlay}>
      <div className={styles.Container}>
        <h2>Add new hot-dog</h2>
        <form className={styles.Form}>
          <input
            className={styles.Input}
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={handleChangeName}
            required
          />
          <input
            className={styles.Input}
            type="text"
            name="price"
            value={price}
            placeholder="Price"
            onChange={handleChangePrice}
            required
          />
          <textarea
            className={styles.Textarea}
            type="text"
            name="description"
            value={description}
            placeholder="Description"
            onChange={handleChangeDescription}
            required
          />
          {/* <input
            className={styles.Input}
            // type="image"
            name="image"
            value={img}
            placeholder="Image"
            onChange={handleChangeImg}
            required
          />  */}
        </form>
        <div>
          <button
            type="reset"
            className={styles.Btn}
            onClick={handleNoBtnClick}
          >
            No Thanks
          </button>
          <button
            type="submit"
            className={styles.Btn}
            onClick={handleAddBtnClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
//!!! label для input
//!!! img
