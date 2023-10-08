import { CommentType } from '../../types';

export const ADD_COMMENT = 'ADD_COMMENT';
export const CREATE_COMMENTS_LIST = 'CREATE_COMMENTS_LIST';

export const addComment = (id: string, comment: CommentType) => ({
  type: ADD_COMMENT,
  payload: { id, comment },
});

export const createCommentsList = (id: string) => ({
  type: CREATE_COMMENTS_LIST,
  payload: { id },
});

interface AddComment {
  type: typeof ADD_COMMENT;
  payload: { id: string; comment: CommentType };
}

interface CreateCommentsList {
  type: typeof CREATE_COMMENTS_LIST;
  payload: { id: string };
}

export type CommentsActions = AddComment | CreateCommentsList;
