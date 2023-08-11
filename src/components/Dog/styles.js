import styled from 'styled-components';

export const DogContainer = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
`;

export const DogImageContainer = styled.div`
    padding: 5px;
`;

export const DogImage = styled.img`
    width: 75px;
    height: 75px;
`;

export const DogDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    padding: 5px 0px;
`;