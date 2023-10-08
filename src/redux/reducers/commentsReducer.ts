import { CommentType } from '../../types';
import {
  CommentsActions,
  ADD_COMMENT,
  CREATE_COMMENTS_LIST,
} from '../actions/commentsActions';

interface CommentsState {
  [key: string]: CommentType[];
}

export const commentsReducer = (
  state: CommentsState = {},
  { type, payload }: CommentsActions
) => {
  switch (type) {
    case CREATE_COMMENTS_LIST:
      return { ...state, [payload.id]: [] };
    case ADD_COMMENT:
      return {
        ...state,
        [payload.id]: [...state[payload.id], payload.comment],
      };
    default:
      return state;
  }
};
