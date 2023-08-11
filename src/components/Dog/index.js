import React from 'react';
import * as styles from './styles';

function Dog({dog}) {
  return (
    <styles.DogContainer>
      <styles.DogImageContainer>
        <styles.DogImage src={dog.image?.url} alt={dog.name}/>
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