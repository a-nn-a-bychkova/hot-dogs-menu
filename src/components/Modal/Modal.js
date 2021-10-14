import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { menuOperations } from '../../redux';
import styles from './Modal.module.css';

export default function Modal({ onToggleModal }) {
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const hotDogs = useSelector(state => state.menu.hotDogs);
  const dispatch = useDispatch();
  const elRef = useRef();

  useEffect(() => {
    function handleMouseUp(event) {
      const isElementChild = elRef.current.contains(event.target);
      if (!isElementChild) {
        onToggleModal();
      }
    }
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [onToggleModal]);

  function handleChangeInput(e) {
    e.preventDefault();
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'price':
        setPrice(e.currentTarget.value);
        break;
      case 'description':
        setDescription(e.currentTarget.value);
        break;
      case 'image':
        setImg(e.currentTarget.value);
        break;
      default:
        alert('input does not exist');
    }
  }

  function handleAddBtnClick(e) {
    e.preventDefault();

    const hotDogsNames = hotDogs.map(function (hotdog) {
      return hotdog.name;
    });
    const isDuplicate = hotDogsNames.includes(name);

    if ((name !== '', img !== '', price !== '', description !== '')) {
      if (!isDuplicate) {
        dispatch(menuOperations.addHotDog({ name, img, price, description }));
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
            onChange={handleChangeInput}
            required
          />
          <input
            className={styles.Input}
            type="text"
            name="price"
            value={price}
            placeholder="Price"
            onChange={handleChangeInput}
            required
          />
          <textarea
            className={styles.Textarea}
            type="text"
            name="description"
            value={description}
            placeholder="Description"
            onChange={handleChangeInput}
            required
          />
          <input
            className={styles.Input}
            type="url"
            name="image"
            value={img}
            placeholder="Image"
            onChange={handleChangeInput}
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
