import styled from 'styled-components';

const StyledButton = styled.button`
display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.width? props.width : '80%'};
    height: ${props => props.height? props.height : '9%'};
    border: none;
    font-size: ${props => props.fontSize? props.fontSize : '1.5rem'};
    text-align: center;
    font-weight: bold;
    color: #ffffff;
    margin: 1px;
    background-color: #CD3529;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
    cursor: pointer;
    
    &:hover {
        background-color: #E74C3C;
    }
`;

export default StyledButton;