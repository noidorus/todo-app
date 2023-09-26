import { Reducer } from 'redux';
import { ListType } from '../../types';
const CREATE_NEW_LISTS = 'CREATE_NEW_LISTS';

interface ListbyIdState {
  [key: string]: ListType;
}

export const listsByIdReducer: Reducer<ListbyIdState, ListByIdActions> = (
  state = {},
  { type, payload }
) => {
  switch (type) {
    case CREATE_NEW_LISTS:
      const newLists = {
        [payload[0]]: {
          id: payload[0],
          title: 'Queue',
          todos: [],
        },
        [payload[1]]: {
          id: payload[1],
          title: 'Development',
          todos: [],
        },
        [payload[2]]: {
          id: payload[2],
          title: 'Done',
          todos: [],
        },
      };
      return { ...state, ...newLists };
    default:
      return state;
  }
};

export const createNewLists = (listIds: string[]) => ({
  type: CREATE_NEW_LISTS,
  payload: listIds,
});

interface CreateNewLists {
  type: typeof CREATE_NEW_LISTS;
  payload: string[];
}

type ListByIdActions = CreateNewLists;
