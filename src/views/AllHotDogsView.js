import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/Card';
import { menuSelectors, menuOperations } from '../redux';
import styles from './AllHotDogsView.module.css';

export default function AllHotDogsView() {
  const hotDogs = useSelector(menuSelectors.getHotDogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(menuOperations.fetchHotDogs);
  }, [dispatch]);

  return (
    <div>
      <h1>All hot-dogs</h1>
      <ul className={styles.List}>
        {hotDogs &&
          hotDogs.map(({ id, img, price, name, description }) => (
            <li key={id} className={styles.Item}>
              <Card
                id={id}
                img={img}
                price={price}
                name={name}
                description={description}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
