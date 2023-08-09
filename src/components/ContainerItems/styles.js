import styled from 'styled-components';

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 61px 61px 0px 0px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0.6) 0.01%,
    rgba(255, 255, 255, 0.15) 100%
  );
  padding: 50px 36px;
  height: 100%;

  ${props => props.isBlur && `
     backdrop-filter: blur(22.5px);
     min-height: calc(100vh - 170px);
  `}
`;