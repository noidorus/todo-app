import { Reducer } from 'redux';
import { CardType } from '../../types';
import {
  ADD_CARD_TO_CARDS,
  CardsByIdActions,
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
      const { id, title } = payload;
      const newCard = {
        id,
        title,
        description: '',
        comments: [],
      };
      return { ...state, [id]: newCard };
    default:
      return state;
  }
};
