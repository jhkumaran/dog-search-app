import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    display: flex;
    box-sizing: border-box;
`;

export const SearchbarContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
`;

export const SearchInput = styled.input`
    margin: 0px 5px;
`;

export const ResultContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    padding: 5px;
`;

export const NoResultsText = styled.div`
    color: red;
    font-weight: bold;
`;

export const SortByContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px 5px;
    gap: 10px;
`;