import Carousel from '../Carousel';
import styled from 'styled-components';

export const StyledCarousel = styled(Carousel)`
    width:100%;
    height:100%;
    font-family: 'Roboto';
    background: black;
    &>*:last-child{
        top:5%;
    }
`;