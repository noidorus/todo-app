export const ADD_CARD_TO_CARDS = 'ADD_CARD_TO_CARDS';
export const CHANGE_CARD_TITLE = 'CHANGE_CARD_TITLE';

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

interface AddCardToCards {
  type: typeof ADD_CARD_TO_CARDS;
  payload: { id: string; title: string };
}
interface ChangeCardTitle {
  type: typeof CHANGE_CARD_TITLE;
  payload: { id: string; title: string };
}

export type CardsByIdActions = AddCardToCards | ChangeCardTitle;
