import { CommentType } from '../../types';
export const ADD_COMMENT = 'ADD_COMMENT';
export const CREATE_COMMENTS_LIST = 'CREATE_COMMENTS_LIST';
export const DELETE_COMMENTS = 'DELETE_COMMENTS';

export const addComment = (id: string, comment: CommentType) => ({
  type: ADD_COMMENT,
  payload: { id, comment },
});

export const createCommentsList = (id: string) => ({
  type: CREATE_COMMENTS_LIST,
  payload: { id },
});

export const deleteComments = (
  id: string,
  commentsIds: string[]
): DeleteComments => ({
  type: DELETE_COMMENTS,
  payload: { id, commentsIds },
});

interface AddComment {
  type: typeof ADD_COMMENT;
  payload: { id: string; comment: CommentType };
}
interface CreateCommentsList {
  type: typeof CREATE_COMMENTS_LIST;
  payload: { id: string };
}
interface DeleteComments {
  type: typeof DELETE_COMMENTS;
  payload: { id: string; commentsIds: string[] };
}

export type CommentsActions = AddComment | CreateCommentsList | DeleteComments;
