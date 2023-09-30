import { Reducer } from 'redux';
import { CardType } from '../../types';
import {
  ADD_CARD_TO_CARDS,
  CardsByIdActions,
  CHANGE_CARD_TITLE,
} from '../actions/cardsByIdActions';

interface CardsByIdState {
  [key: string]: CardType;
}

export const cardsByIdReducer: Reducer<CardsByIdState, CardsByIdActions> = (
  state = {},
  { type, payload }
) => {
  switch (type) {
    case ADD_CARD_TO_CARDS:
      const newCard = {
        id: payload.id,
        title: payload.title,
        description: '',
        comments: [],
      };
      return { ...state, [payload.id]: newCard };

    case CHANGE_CARD_TITLE:
      return {
        ...state,
        [payload.id]: { ...state[payload.id], title: payload.title },
      };
    default:
      return state;
  }
};
