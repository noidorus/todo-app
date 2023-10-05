import { Reducer } from 'redux';
import { BoardType } from '../../types';
import { ADD_BOARD, BoardsActions } from '../actions/boardsActions';

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
      return { ...state, boards: [{ ...payload }, ...state.boards] };
    default:
      return state;
  }
};
