import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/Card';
import initialHotDogs from '../initialHotDogs.json';
import styles from './AllHotDogsView.module.css';

export default function AllHotDogsView() {
  const [hotDogs, setHotDogs] = useState(initialHotDogs);

  useEffect(() => {
    console.log('initial HotDogs', initialHotDogs);
    console.log('hotDogs', hotDogs);
  }, []);

  return (
    <div>
      <h1>All hot-dogs</h1>
      <ul className={styles.List}>
        {hotDogs.map(({ id, img, price, name, description }) => (
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
