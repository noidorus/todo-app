import { Reducer } from 'redux';
import {
  SET_ERROR,
  SET_FILE,
  UploadFileActions,
} from '../actions/uploadFileActions';

const initialState = {
  file: null,
  error: '',
};

interface UploadFileState {
  file: (File & { preview: string }) | null;
  error: string;
}

export const uploadFileReducer: Reducer<UploadFileState, UploadFileActions> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_FILE:
      return { ...state, file: payload.file, error: '' };
    case SET_ERROR:
      if (!!payload.error.length) {
        return { ...state, error: payload.error, file: null };
      }
      return { ...state, error: payload.error };
    default:
      return { ...state };
  }
};
