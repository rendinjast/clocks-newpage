/* eslint-disable react/no-array-index-key */
import { FC, useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { Container, Line } from './style';

interface iCircle {
  rotate: [number, number];
}
const Clock: FC<iCircle> = ({ rotate }) => {
  const [isDark, setIsDark] = useState<boolean>();
  const { state } = useAppContext();

  useEffect(() => {
    setIsDark(state.theme !== 'light');
  }, [state.theme]);
  return (
    <Container borderColor={isDark ? '#eeeeee47' : 'rgba(0,0,0,.2)'}>
      {rotate.map((number, index) => (
        <Line key={index} color={isDark ? '#eee' : 'rgb(66, 66, 66)'} rotate={number} />
      ))}
    </Container>
  );
};

export default Clock;
