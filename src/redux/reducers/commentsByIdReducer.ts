import { Reducer } from 'redux';
import { CommentType } from '../../types';
import {
  CommentsActions,
  ADD_COMMENT,
  DELETE_COMMENTS,
} from '../actions/commentsActions';

interface CommentsState {
  [key: string]: CommentType;
}

export const commentsByIdReducer: Reducer<CommentsState, CommentsActions> = (
  state = {},
  { type, payload }
) => {
  switch (type) {
    case ADD_COMMENT:
      return {
        ...state,
        [payload.comment.id]: payload.comment,
      };
    case DELETE_COMMENTS:
      const comments = { ...state };

      payload.commentsIds.forEach((id) => {
        delete comments[id];
      });

      return { ...comments };
    default:
      return state;
  }
};
