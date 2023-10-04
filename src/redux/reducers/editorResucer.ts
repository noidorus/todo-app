import { Reducer } from 'redux';
import {
  EditorActions,
  SET_EDITOR_CONTENT,
  SET_EDITOR_VISIBLE,
} from '../actions/editorActions';

const initialState = {
  editorVisible: false,
  content: '',
};

type EditorState = typeof initialState;

export const editorReducer: Reducer<EditorState, EditorActions> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_EDITOR_VISIBLE:
      return { ...state, editorVisible: payload };
    case SET_EDITOR_CONTENT:
      return { ...state, content: payload };
    default:
      return state;
  }
};
