import { useEffect, useState } from 'react';
import NewYork from '../../images/new-york.JPG';
import styles from './Card.module.css';

export default function Card() {
  return (
    <div className={styles.Container}>
      <img src={NewYork} />
      <h2>New York City</h2>
      <p>New Yorkers eat more hot dogs than any other group in he country</p>
      <button type="button">Edit</button>
    </div>
  );
}
