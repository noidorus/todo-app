import { Reducer } from 'redux';
import { CardType } from '../../types';
import {
  CardsByIdActions,
  ADD_CARD_TO_CARDS,
  CHANGE_CARD_TITLE,
  SET_CARD_DESC,
  SET_PRIORITY_SELECTOR,
  CHANGE_END_DATE,
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
      const newCard: CardType = {
        ...payload,
        description: '',
        priority: '±0',
        comments: [],
        date: { createdDate: Date.now(), endDate: null },
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
    case CHANGE_END_DATE:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          date: {
            ...state[payload.id].date,
            endDate: payload.endDate,
          },
        },
      };
    default:
      return state;
  }
};
