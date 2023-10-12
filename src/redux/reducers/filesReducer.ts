import { Reducer } from 'redux';
import { FileType } from '../../types';
import { ADD_FILE, DELETE_FILE, FilesActions } from '../actions/filesActions';

interface FilesState {
  [key: string]: FileType;
}

export const filesReducer: Reducer<FilesState, FilesActions> = (
  state = {},
  { type, payload }
) => {
  switch (type) {
    case ADD_FILE:
      return { ...state, [payload.file.id]: payload.file };
    case DELETE_FILE:
      const newState = { ...state };
      delete newState[payload.id];

      return { ...newState };
    default:
      return { ...state };
  }
};
