import { CommentType } from '../../types';
import {
  CommentsActions,
  ADD_COMMENT,
  CREATE_COMMENTS_LIST,
  DELETE_COMMENTS,
} from '../actions/commentsActions';

interface CommentsState {
  [key: string]: {
    [key: string]: CommentType;
  };
}

export const commentsReducer = (
  state: CommentsState = {},
  { type, payload }: CommentsActions
) => {
  switch (type) {
    case CREATE_COMMENTS_LIST:
      return { ...state, [payload.id]: {} };
    case ADD_COMMENT:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          [payload.comment.id]: payload.comment,
        },
      };
    case DELETE_COMMENTS:
      const comments = { ...state[payload.id] };

      payload.commentsIds.forEach((id) => {
        delete comments[id];
      });

      return { ...state, [payload.id]: comments };
    default:
      return state;
  }
};
