export const ADD_CARD_TO_CARDS = 'ADD_CARD_TO_CARDS';
export const CHANGE_CARD_TITLE = 'CHANGE_CARD_TITLE';
export const SET_CARD_DESC = 'SET_CARD_DESC';
export const SET_PRIORITY_SELECTOR = 'SET_PRIORITY_SELECTOR';
export const CHANGE_END_DATE = 'CHANGE_END_DATE';

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

export type CardsByIdActions =
  | AddCardToCards
  | ChangeCardTitle
  | SetCardDesc
  | SetPrioritySelector
  | ChangeEndDate;
