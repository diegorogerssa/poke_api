import styled, { css } from 'styled-components';

const StyledWapper = styled.section`
  ${({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 60vw;
  height: 80vh;
  background-color: ${theme.light.palette.secondary.yellow};
  border-radius: 0px 10px 10px 0px;
  `}
`;

export default StyledWapper;