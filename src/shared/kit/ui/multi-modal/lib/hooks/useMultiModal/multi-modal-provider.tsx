import {createContext, useReducer, type PropsWithChildren} from 'react';

import {Icon} from '@mtsdengi/uikit-fintech';

import {SearchStrategy} from '~/features/multi-search';

import type {TAction, MultiModalContextProps} from './types';
import type {ScreenState, View, ViewState} from '../../types';

const initialState: ScreenState = {
  views: [
    {
      id: '1',
      icon: <Icon iconPath="granat/search/size-24-style-outline" />,
      content: <SearchStrategy />,
    },
  ],
  // snapshots: [],
  currentState: 'fallback',
  currentViewID: '1',
};

const reducer = (state: ScreenState, action: TAction): ScreenState => {
  switch (action.type) {
    case 'ADD_VIEW': {
      const views = [...state.views];

      views.splice(state.views.length - 2, 0, action.view);

      return {
        ...state,
        views,
        currentViewID: action.view.id,
      };
    }
    case 'SET_ACTIVE_VIEW': {
      return {
        ...state,
        currentViewID: action.viewID,
      };
    }
    case 'CLOSE_VIEW':
      return {
        ...state,
        views: state.views.filter((view) => view.id !== action.viewID),
        currentViewID: state.views.length > 1 ? state.views[1].id : null,
      };
    case 'SET_STATE':
      return {...state, currentState: action.state};
    default:
      return state;
  }
};

export const MultiModalContext = createContext<MultiModalContextProps | undefined>(undefined);

export const MultiModalProvider = ({children}: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addView = (view: View) => dispatch({type: 'ADD_VIEW', view});
  const setActiveView = (viewID: string) => dispatch({type: 'SET_ACTIVE_VIEW', viewID});
  const closeView = (viewID: string) => dispatch({type: 'CLOSE_VIEW', viewID});
  const setScreenState = (state: ViewState) => dispatch({type: 'SET_STATE', state});

  return (
    <MultiModalContext.Provider value={{addView, closeView, setScreenState, setActiveView, screenState: state}}>
      {children}
    </MultiModalContext.Provider>
  );
};
