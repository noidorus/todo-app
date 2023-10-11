import { Reducer } from 'redux';
import { BoardType } from '../../types';
import {
  ADD_BOARD,
  BoardsActions,
  INCREASE_CARD_NUM,
} from '../actions/boardsActions';

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
  switch (type) {
    case ADD_BOARD:
      return {
        ...state,
        boards: [{ ...payload }, ...state.boards],
      };
    case INCREASE_CARD_NUM:
      const boards = state.boards.map((board) => {
        if (board.lists.some((id) => id === payload.listId)) {
          return {
            ...board,
            cardNum: (board.cardNum += 1),
          };
        }
        return board;
      });

      return { ...state, boards: boards };
    default:
      return state;
  }
};
