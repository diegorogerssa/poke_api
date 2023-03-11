import styled, { css } from 'styled-components';

const StyledWapper = styled.section`
  ${({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80%;
  background-color: ${theme.light.palette.secondary.yellow};
  border-radius: 20px 20px 0 0;
  `}
  @media (min-width: 321px) and (max-width: 480px) {
    height: 50%
}

@media (min-width: 481px) and (max-width: 768px) {

}

@media (min-width: 769px) and (max-width: 1024px) {
  height: 50%;
}

@media (min-width: 1025px) and (max-width: 1280px) {
  height: 50%;
}

@media (min-width: 1281px) {
  width: 50%;
  border-radius: 0 20px 20px 0;
}
`;

export default StyledWapper;