import { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { Container, ToggleTheme } from './style';

const Header = () => {
  const { state, dispatch } = useAppContext();
  const handleTheme = () => {
    dispatch({ type: 'CHANGE_THEME', payload: state.theme === 'light' ? 'dark' : 'light' });
  };
  return (
    <Container>
      <ToggleTheme onClick={() => handleTheme()}>
        {state.theme === 'light' ? '🌝' : '🌚'}
      </ToggleTheme>
    </Container>
  );
};

export default Header;
