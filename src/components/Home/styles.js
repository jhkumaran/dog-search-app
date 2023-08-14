import styled from 'styled-components';
import { FROM_MEDIUM } from '../../utils/breakpoints'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    @media ${FROM_MEDIUM} {
        padding: 40px;
    }
`;

export const Title = styled.div`
    font-weight: bold;
    padding: 0px 10px;
    display: flex;
    justify-content: center;
`;