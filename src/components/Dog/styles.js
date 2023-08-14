import styled from 'styled-components';

export const DogContainer = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
`;

export const DogImageContainer = styled.div`
    padding: 5px;
    display:flex;
`;

export const DogImage = styled.img`
    width: 0px;
    height: 0px;
    ${({ loaded }) => loaded && `
        width: 75px;
        height: 75px;
    `}
`;

export const DogDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 0px;
    margin-left: 20px;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  border: 5px solid grey;
  border-top: 5px solid black;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  animation: spin 2s linear infinite;
  position: absolute;
  margin-left: 75px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;