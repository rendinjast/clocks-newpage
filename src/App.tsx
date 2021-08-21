import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Block, Header, Separator } from './components';
import SwitchNumber from './constants/numbers';
import { useAppContext } from './context/AppContext';

const MainContainer = styled.div<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 1s ease-out;
`;

type ClockType = [string, string?];
interface IClock {
  hour: ClockType;
  minute: ClockType;
  second: ClockType;
}
function App() {
  const [clock, setClock] = useState<IClock>();
  const { state } = useAppContext();
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      let hour = date.getHours().toString().split('');
      let minute = date.getMinutes().toString().split('');
      let second = date.getSeconds().toString().split('');
      if (hour.length === 1) {
        hour = ['0', hour[0]];
      }
      if (minute.length === 1) {
        minute = ['0', minute[0]];
      }
      if (second.length === 1) {
        second = ['0', second[0]];
      }

      setClock({
        hour: [hour[0], hour[1]],
        minute: [minute[0], minute[1]],
        second: [second[0], second[1]],
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Header />
      <MainContainer backgroundColor={state.theme === 'light' ? '#f7f7f7' : '#0e0e0e'}>
        <Block number={SwitchNumber(clock?.hour[0] || '0')} />
        <Block number={SwitchNumber(clock?.hour[1] || '0')} />
        <Separator />
        <Block number={SwitchNumber(clock?.minute[0] || '0')} />
        <Block number={SwitchNumber(clock?.minute[1] || '0')} />
        <Separator />
        <Block number={SwitchNumber(clock?.second[0] || '0')} />
        <Block number={SwitchNumber(clock?.second[1] || '0')} />
      </MainContainer>
    </>
  );
}

export default App;
