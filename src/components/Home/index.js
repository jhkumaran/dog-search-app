import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBreeds } from '../../data/slices/breedsSlice';
import * as styles from './styles';
import SearchComponent from '../Search';

function Home() {
  const { breeds } = useSelector(state => state.breedsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchBreeds();
  }, []);

  const fetchBreeds = () => {
    dispatch(getBreeds());
  }
  return (
    <styles.Container>
      <styles.Title>Dog Search App</styles.Title>
      <SearchComponent />
    </styles.Container>
  )
}

export default Home;