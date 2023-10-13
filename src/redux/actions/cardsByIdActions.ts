export const ADD_CARD_TO_CARDS = 'ADD_CARD_TO_CARDS';
export const CHANGE_CARD_TITLE = 'CHANGE_CARD_TITLE';
export const SET_CARD_DESC = 'SET_CARD_DESC';
export const SET_PRIORITY_SELECTOR = 'SET_PRIORITY_SELECTOR';
export const CHANGE_END_DATE = 'CHANGE_END_DATE';
export const ADD_TASK = 'ADD_TASK';
export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_TIMER = 'SET_TIMER';
export const PAUSE_TIMER = 'PAUSE_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const ADD_FILE_TO_CARD = 'ADD_IMAGE';
export const DELETE_FILE_FROM_CARD = 'DELETE_FILE_FROM_CARD';
export const ADD_COMMENT_TO_CARD = 'ADD_COMMENT_TO_CARD';
export const DELETE_COMMENTS_FROM_CARD = 'DELETE_COMMENTS_FROM_CARD';
export const DELETE_CARD = 'DELETE_CARD';

export const addCardToCards = (card: {
  id: string;
  title: string;
  cardNum: number;
}): AddCardToCards => ({
  type: ADD_CARD_TO_CARDS,
  payload: card,
});

export const changeCardTitle = (
  id: string,
  title: string
): ChangeCardTitle => ({
  type: CHANGE_CARD_TITLE,
  payload: { id, title },
});

export const setCardDesc = (id: string, desc: string) => ({
  type: SET_CARD_DESC,
  payload: { id, desc },
});

export const setPrioritySelector = (
  id: string,
  priority: string
): SetPrioritySelector => ({
  type: SET_PRIORITY_SELECTOR,
  payload: { id, priority },
});

export const changeEndDate = (
  id: string,
  endDate: number | null
): ChangeEndDate => ({
  type: CHANGE_END_DATE,
  payload: { id, endDate },
});

export const addTask = (
  id: string,
  taskId: string,
  title: string
): AddTask => ({
  type: ADD_TASK,
  payload: { id, taskId, title },
});

export const changeTaskStatus = (
  id: string,
  taskId: string,
  checked: boolean
): ChangeTaskStatus => ({
  type: CHANGE_TASK_STATUS,
  payload: { id, taskId, checked },
});

export const setTimer = (id: string, startedTime: number): SetTimer => ({
  type: SET_TIMER,
  payload: { id, startedTime },
});

export const pauseTimer = (id: string, duration: number): PauseTimer => ({
  type: PAUSE_TIMER,
  payload: { id, duration },
});

export const deleteTask = (id: string, taskId: string): DeleteTask => ({
  type: DELETE_TASK,
  payload: { id, taskId },
});

export const resetTimer = (id: string): ResetTimer => ({
  type: RESET_TIMER,
  payload: { id },
});

export const addFileToCard = (id: string, fileId: string): AddFileToCard => ({
  type: ADD_FILE_TO_CARD,
  payload: { id, fileId },
});

export const deleteFileFromCard = (
  id: string,
  fileId: string
): DeleteFileFromCard => ({
  type: DELETE_FILE_FROM_CARD,
  payload: { id, fileId },
});

export const addCommentToCard = (
  id: string,
  commentId: string
): AddCommentToCard => ({
  type: ADD_COMMENT_TO_CARD,
  payload: { id, commentId },
});

export const deleteCommentsFromCard = (
  id: string,
  commentsIds: string[]
): DeleteCommentsFromCard => ({
  type: DELETE_COMMENTS_FROM_CARD,
  payload: { id, commentsIds },
});

export const deleteCard = (id: string) => ({
  type: DELETE_CARD,
  payload: { id },
});

interface AddCardToCards {
  type: typeof ADD_CARD_TO_CARDS;
  payload: { id: string; title: string; cardNum: number };
}
interface ChangeCardTitle {
  type: typeof CHANGE_CARD_TITLE;
  payload: { id: string; title: string };
}
interface SetCardDesc {
  type: typeof SET_CARD_DESC;
  payload: { id: string; desc: string };
}
interface SetPrioritySelector {
  type: typeof SET_PRIORITY_SELECTOR;
  payload: { id: string; priority: string };
}
interface ChangeEndDate {
  type: typeof CHANGE_END_DATE;
  payload: { id: string; endDate: number | null };
}
interface AddTask {
  type: typeof ADD_TASK;
  payload: { id: string; taskId: string; title: string };
}
interface ChangeTaskStatus {
  type: typeof CHANGE_TASK_STATUS;
  payload: { id: string; taskId: string; checked: boolean };
}
interface DeleteTask {
  type: typeof DELETE_TASK;
  payload: { id: string; taskId: string };
}
interface SetTimer {
  type: typeof SET_TIMER;
  payload: { id: string; startedTime: number };
}
interface PauseTimer {
  type: typeof PAUSE_TIMER;
  payload: { id: string; duration: number };
}
interface ResetTimer {
  type: typeof RESET_TIMER;
  payload: { id: string };
}
interface AddFileToCard {
  type: typeof ADD_FILE_TO_CARD;
  payload: { id: string; fileId: string };
}
interface DeleteFileFromCard {
  type: typeof DELETE_FILE_FROM_CARD;
  payload: { id: string; fileId: string };
}
interface AddCommentToCard {
  type: typeof ADD_COMMENT_TO_CARD;
  payload: { id: string; commentId: string };
}
interface DeleteCommentsFromCard {
  type: typeof DELETE_COMMENTS_FROM_CARD;
  payload: { id: string; commentsIds: string[] };
}
interface DeleteCard {
  type: typeof DELETE_CARD;
  payload: { id: string };
}

export type CardsByIdActions =
  | AddCardToCards
  | ChangeCardTitle
  | SetCardDesc
  | SetPrioritySelector
  | ChangeEndDate
  | AddTask
  | ChangeTaskStatus
  | DeleteTask
  | SetTimer
  | PauseTimer
  | ResetTimer
  | AddFileToCard
  | DeleteFileFromCard
  | AddCommentToCard
  | DeleteCommentsFromCard
  | DeleteCard;
