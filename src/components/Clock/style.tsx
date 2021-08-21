import styled from 'styled-components';

export const Container = styled.div<{ borderColor: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 45px;
  border: 1px solid ${({ borderColor }) => borderColor};
`;
export const Line = styled.div<{ color: string; rotate: number }>`
  position: absolute;
  z-index: 5;
  width: 3px;
  height: 23px;
  background: ${({ color }) => color};
  right: 50%;
  top: -2%;
  transform-origin: bottom;
  transform: rotate(${({ rotate }) => rotate}deg);
  margin-left: -2px;
  transition: all 1s;
  @media only screen and (max-width: 1400px) {
    & {
      height: 18px;
    }
  }
  @media only screen and (max-width: 1150px) {
    & {
      width: 2px;
      height: 14px;
    }
  }
  @media only screen and (max-width: 900px) {
    & {
      height: 11px;
    }
  }
  @media only screen and (max-width: 700px) {
    & {
      height: 9px;
    }
  }
`;
