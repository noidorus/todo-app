import { BoardType } from '../../types';

export const ADD_BOARD = 'ADD_BOARD';

export const addBoard = (newBoard: BoardType): CreateNewBoard => ({
  type: ADD_BOARD,
  payload: newBoard,
});

interface CreateNewBoard {
  type: typeof ADD_BOARD;
  payload: BoardType;
}

export type BoardsActions = CreateNewBoard;
