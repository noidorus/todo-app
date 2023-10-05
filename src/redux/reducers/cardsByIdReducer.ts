import { Reducer } from 'redux';
import { CardType } from '../../types';
import {
  CardsByIdActions,
  ADD_CARD_TO_CARDS,
  CHANGE_CARD_TITLE,
  SET_CARD_DESC,
  SET_PRIORITY_SELECTOR,
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
        ...payload,
        description: '',
        priority: '±0',
        comments: [],
      };
      return { ...state, [payload.id]: newCard };
    case CHANGE_CARD_TITLE:
      return {
        ...state,
        [payload.id]: { ...state[payload.id], title: payload.title },
      };
    case SET_CARD_DESC:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          description: payload.desc,
        },
      };
    case SET_PRIORITY_SELECTOR:
      return {
        ...state,
        [payload.id]: { ...state[payload.id], priority: payload.priority },
      };
    default:
      return state;
  }
};
