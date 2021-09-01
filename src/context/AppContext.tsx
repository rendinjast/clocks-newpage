import { createContext, useContext, Dispatch, FC, useReducer, useEffect } from 'react';
import AppReducer, { AppAction } from './reducer';

export type AppState = {
  theme: string;
  name: string;
};

const userColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const initialValue: AppState = {
  theme: localStorage.getItem('theme') || userColorScheme,
  name: localStorage.getItem('name') || '',
};
const Context = createContext<{ state: AppState; dispatch: Dispatch<AppAction> }>({
  state: initialValue,
  dispatch: () => undefined,
});
export const useAppContext = () => useContext(Context);

const AppContext: FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialValue);

  useEffect(() => {
    localStorage.setItem('theme', state.theme);
  }, [state.theme]);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export default AppContext;
