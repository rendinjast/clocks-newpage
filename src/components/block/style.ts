import styled from 'styled-components';

type props = {
  separator: 2 | 4;
};

export const Container = styled.div<props>`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(${({ separator }) => separator}, 46px);
  grid-template-rows: repeat(6, 46px);
  margin-bottom: 10rem;
  align-items: center;
  direction: rtl;
  @media only screen and (max-width: 1400px) {
    & {
      grid-template-columns: repeat(${({ separator }) => separator}, 36px);
      grid-template-rows: repeat(6, 36px);
    }
  }
  @media only screen and (max-width: 1150px) {
    & {
      grid-template-columns: repeat(${({ separator }) => separator}, 28px);
      grid-template-rows: repeat(6, 28px);
    }
  }
  @media only screen and (max-width: 900px) {
    & {
      grid-template-columns: repeat(${({ separator }) => separator}, 22px);
      grid-template-rows: repeat(6, 22px);
    }
  }
  @media only screen and (max-width: 700px) {
    & {
      grid-template-columns: repeat(${({ separator }) => separator}, 18px);
      grid-template-rows: repeat(6, 18px);
    }
  }
  /* @media only screen and (max-width: 500px) {
    & {

      grid-template-columns: repeat(${({ separator }) => separator}, 20px);
      grid-template-rows: repeat(6, 20px);
    }
  } */
`;

export const fuck = '';
