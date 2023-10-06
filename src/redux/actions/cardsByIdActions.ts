export const ADD_CARD_TO_CARDS = 'ADD_CARD_TO_CARDS';
export const CHANGE_CARD_TITLE = 'CHANGE_CARD_TITLE';
export const SET_CARD_DESC = 'SET_CARD_DESC';
export const SET_PRIORITY_SELECTOR = 'SET_PRIORITY_SELECTOR';
export const CHANGE_END_DATE = 'CHANGE_END_DATE';
export const ADD_TASK = 'ADD_TASK';
export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';
export const DELETE_TASK = 'DELETE_TASK';

export const addCardToCards = (id: string, title: string): AddCardToCards => ({
  type: ADD_CARD_TO_CARDS,
  payload: { id, title },
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

export const deleteTask = (id: string, taskId: string): DeleteTask => ({
  type: DELETE_TASK,
  payload: { id, taskId },
});

interface AddCardToCards {
  type: typeof ADD_CARD_TO_CARDS;
  payload: { id: string; title: string };
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

export type CardsByIdActions =
  | AddCardToCards
  | ChangeCardTitle
  | SetCardDesc
  | SetPrioritySelector
  | ChangeEndDate
  | AddTask
  | ChangeTaskStatus
  | DeleteTask;
