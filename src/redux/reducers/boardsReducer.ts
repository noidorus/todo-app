import { Reducer } from 'redux';
import { BoardType } from '../../types';

const ADD_BOARD = 'ADD_BOARD';

const initialState: BoardsState = {
  boards: [],
};

interface BoardsState {
  boards: BoardType[];
}

export const boardsReducer: Reducer<BoardsState, BoardsActions> = (
  state = initialState,
  { type, payload }
) => {
  // debugger;
  switch (type) {
    case ADD_BOARD:
      const newBoard = {
        id: payload.id,
        title: payload.title,
        lists: payload.lists,
      };

      return {
        ...state,
        boards: [newBoard, ...state.boards],
      };
    default:
      return state;
  }
};

export const addBoard = (newBoard: NewBoard): CreateNewBoard => ({
  type: ADD_BOARD,
  payload: newBoard,
});

interface CreateNewBoard {
  type: typeof ADD_BOARD;
  payload: NewBoard;
}
interface NewBoard {
  id: string;
  title: string;
  lists: string[];
}

type BoardsActions = CreateNewBoard;
