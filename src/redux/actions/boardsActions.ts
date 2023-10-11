import { BoardType } from '../../types';

export const ADD_BOARD = 'ADD_BOARD';
export const INCREASE_CARD_NUM = 'INCREASE_CARD_NUM';

export const addBoard = (newBoard: BoardType): CreateNewBoard => ({
  type: ADD_BOARD,
  payload: newBoard,
});

export const increaseCardNum = (listId: string): IncreaseCardNum => ({
  type: INCREASE_CARD_NUM,
  payload: { listId },
});

interface CreateNewBoard {
  type: typeof ADD_BOARD;
  payload: BoardType;
}

interface IncreaseCardNum {
  type: typeof INCREASE_CARD_NUM;
  payload: { listId: string };
}

export type BoardsActions = CreateNewBoard | IncreaseCardNum;
