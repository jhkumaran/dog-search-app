import React, { useCallback, useState } from 'react';
import * as styles from './styles';
import { testConstants } from '../../utils/constants';

function Dog({dog}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const onLoaded = () => {
    setIsLoaded(true);
  }
  return (
    <styles.DogContainer data-testid={testConstants.DogContainer}>
      <styles.DogImageContainer>
        { 
          !isLoaded && (
            <styles.SpinnerContainer>
              <styles.Spinner />
            </styles.SpinnerContainer>
          )
        }
        <styles.DogImage src={dog.image?.url} alt={dog.name} onLoad={onLoaded} loaded={isLoaded.toString()}/>
      </styles.DogImageContainer>
      <styles.DogDetails>
        <div>{dog.name}</div>
        <div>{`Height: ${dog.height?.metric}`}</div>
        <div>{`Lifespan: ${dog.life_span}`}</div>
      </styles.DogDetails>
    </styles.DogContainer>
  )
}

export default Dog;