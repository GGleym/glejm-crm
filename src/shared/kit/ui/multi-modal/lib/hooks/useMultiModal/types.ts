import type {ScreenState, View, ViewState} from '../../types';

export type TAction =
  | {type: 'ADD_VIEW'; view: View}
  | {type: 'CLOSE_VIEW'; viewID: string}
  | {type: 'SET_ACTIVE_VIEW'; viewID: string}
  | {type: 'SET_STATE'; state: ViewState};

export type MultiModalContextProps = {
  addView: (view: View) => void;
  closeView: (viewID: string) => void;
  setScreenState: (state: ViewState) => void;
  setActiveView: (viewId: string) => void;
  screenState: ScreenState;
};
