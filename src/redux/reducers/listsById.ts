import { Reducer } from 'redux';
import { ListType } from '../../types';
import {
  ADD_CARD_TO_LIST,
  CREATE_NEW_LISTS,
  DELETE_CARD_FROM_LIST,
  ListByIdActions,
  MOVE_CARD,
} from '../actions/listByIdActions';

interface ListbyIdState {
  [key: string]: ListType;
}

export const listsByIdReducer: Reducer<ListbyIdState, ListByIdActions> = (
  state = {},
  { type, payload }
) => {
  switch (type) {
    case CREATE_NEW_LISTS:
      const newLists = ['queue', 'development', 'done'].reduce(
        (acc, title, i) => {
          return {
            ...acc,
            [payload[i]]: {
              id: payload[i],
              title,
              cards: [],
            },
          };
        },
        {} as ListbyIdState
      );
      return { ...state, ...newLists };
    case ADD_CARD_TO_LIST:
      const { cardId, listId } = payload;
      return {
        ...state,
        [listId]: {
          ...state[listId],
          cards: [...state[listId].cards, cardId],
        },
      };
    case MOVE_CARD:
      const { oldCardIndex, newCardIndex, sourceListId, destListId } = payload;
      if (sourceListId === destListId) {
        const newCards = Array.from(state[sourceListId].cards);
        const [removedCard] = newCards.splice(oldCardIndex, 1);
        newCards.splice(newCardIndex, 0, removedCard);
        return {
          ...state,
          [sourceListId]: { ...state[sourceListId], cards: newCards },
        };
      }

      const sourceCards = Array.from(state[sourceListId].cards);
      const [removedCard] = sourceCards.splice(oldCardIndex, 1);
      const destinationCards = Array.from(state[destListId].cards);
      destinationCards.splice(newCardIndex, 0, removedCard);
      return {
        ...state,
        [sourceListId]: { ...state[sourceListId], cards: sourceCards },
        [destListId]: { ...state[destListId], cards: destinationCards },
      };
    case DELETE_CARD_FROM_LIST:
      const cards = state[payload.listId].cards.filter((id) => {
        return id !== payload.cardId;
      });

      return {
        ...state,
        [payload.listId]: {
          ...state[payload.listId],
          cards,
        },
      };
    default:
      return state;
  }
};
