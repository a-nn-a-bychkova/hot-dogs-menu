import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { menuSelectors, menuOperations } from '../../redux';
import styles from './Modal.module.css';

export default function Modal({ onToggleModal }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const hotDogs = useSelector(state => state.menu.hotDogs);
  const dispatch = useDispatch();
  const elRef = useRef();

  useEffect(() => {
    function handleMouseUp(event) {
      console.log(elRef.current);
      const isElementChild = elRef.current.contains(event.target);
      if (!isElementChild) {
        onToggleModal();
      }
    }
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  function handleChangeName(e) {
    e.preventDefault();
    setName(e.currentTarget.value);
  }
  function handleChangePrice(e) {
    e.preventDefault();
    setPrice(e.currentTarget.value);
  }
  function handleChangeDescription(e) {
    e.preventDefault();
    setDescription(e.currentTarget.value);
  }
  function handleChangeImg(e) {
    e.preventDefault();
    setImg(e.currentTarget.value);
  }

  function handleAddBtnClick(e) {
    e.preventDefault();

    const hotDogsNames = hotDogs.map(function (hotdog) {
      return hotdog.name;
    });
    const isDuplicate = hotDogsNames.includes(name);

    if ((name !== '', price != '', description != '', img !== '')) {
      if (!isDuplicate) {
        dispatch(menuOperations.addHotDog({ name, price, description, img }));
        reset();
        onToggleModal();
      } else {
        alert('This hotdog exists');
      }
    } else {
      alert('Fill the form please');
    }
  }
  function reset() {
    setName('');
    setPrice('');
    setDescription('');
    setImg('');
  }

  function handleNoBtnClick(e) {
    e.preventDefault();
    reset();
    onToggleModal(true);
  }
  return (
    <div className={styles.Overlay}>
      <div className={styles.Container} ref={elRef}>
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
          <input
            className={styles.Input}
            // type="image"
            name="image"
            value={img}
            placeholder="Image"
            onChange={handleChangeImg}
            required
          />
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
//when   e.preventDefault() is needed
