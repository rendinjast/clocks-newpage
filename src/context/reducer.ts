import { AppState } from './AppContext';

export type AppAction =
  | { type: 'CHANGE_NAME'; payload: string }
  | { type: 'CHANGE_THEME'; payload: 'light' | 'dark' };

const AppReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return { ...state, theme: action.payload };
    case 'CHANGE_NAME':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default AppReducer;
