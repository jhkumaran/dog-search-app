import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBreeds } from '../../data/slices/breedsSlice';
import * as styles from './styles';
import SearchComponent from '../Search';
import { testConstants } from '../../utils/constants';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchBreeds();
  }, []);

  const fetchBreeds = () => {
    dispatch(getBreeds());
  }
  return (
    <styles.Container data-testid={testConstants.HomeContainer}>
      <styles.Title>Dog Search App</styles.Title>
      <SearchComponent />
    </styles.Container>
  )
}

export default Home;