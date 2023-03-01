import styled from 'styled-components';

const StyledButton = styled.button`
  width: 250;
  /* height: 10px; */
  padding: 20px;
  background-color: ${({ theme }) => theme.light.palette.auxiliary.red};
  color: ${({ theme }) => theme.light.palette.auxiliary.white};
  font-size: 1rem;
  font-family: ${({ theme }) => theme.light.font.press};
  font-weight: bold;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.219);
  cursor: pointer;
  transition: all 1s ease;
  &:hover {
    background-color: ${({ theme }) => theme.light.palette.auxiliary.white};
    color: ${({ theme }) => theme.light.palette.primary.blue};
  }
`;

export default StyledButton;
