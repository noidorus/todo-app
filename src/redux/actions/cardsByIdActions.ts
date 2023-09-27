export const ADD_CARD_TO_CARDS = 'ADD_CARD_TO_CARDS';

export const addCardToCards = (id: string, title: string): AddCardToCards => ({
  type: ADD_CARD_TO_CARDS,
  payload: { id, title },
});

interface AddCardToCards {
  type: typeof ADD_CARD_TO_CARDS;
  payload: { id: string; title: string };
}

export type CardsByIdActions = AddCardToCards;
