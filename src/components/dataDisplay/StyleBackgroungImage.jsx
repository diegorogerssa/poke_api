import styled from 'styled-components';

const StyleBackgroungImage = styled.div`
    display: flex;
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    background-color: transparent;
    height: 100px;
    width: 100px;
    font-size: ${props => props.fontSize};
    color: ${props => props.color? props.color : '#3c3d3c'};

@media (min-width: 321px) and (max-width: 480px) {

}

@media (min-width: 481px) and (max-width: 768px) {
    
}

@media (min-width: 769px) and (max-width: 1024px) {

}

@media (min-width: 1025px) and (max-width: 1280px) {

}

@media (min-width: 1281px) {
}
`;

export default StyleBackgroungImage;