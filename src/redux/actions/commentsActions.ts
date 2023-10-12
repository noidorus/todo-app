import { CommentType } from '../../types';
export const ADD_COMMENT = 'ADD_COMMENT';
export const CREATE_COMMENTS_LIST = 'CREATE_COMMENTS_LIST';
export const DELETE_COMMENTS = 'DELETE_COMMENTS';

export const addComment = (comment: CommentType): AddComment => ({
  type: ADD_COMMENT,
  payload: { comment },
});

export const deleteComments = (commentsIds: string[]): DeleteComments => ({
  type: DELETE_COMMENTS,
  payload: { commentsIds },
});

interface AddComment {
  type: typeof ADD_COMMENT;
  payload: { comment: CommentType };
}
interface DeleteComments {
  type: typeof DELETE_COMMENTS;
  payload: { commentsIds: string[] };
}

export type CommentsActions = AddComment | DeleteComments;
