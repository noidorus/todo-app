export const CREATE_NEW_LISTS = 'CREATE_NEW_LISTS';
export const ADD_CARD_TO_LIST = 'ADD_CARD_TO_LIST';
export const MOVE_CARD = 'MOVE_CARD';
export const DELETE_CARD_FROM_LIST = 'DELETE_CARD_FROM_LIST';

export const moveCard = (
  sourceListId: string,
  destListId: string,
  oldCardIndex: number,
  newCardIndex: number
) => ({
  type: MOVE_CARD,
  payload: { sourceListId, destListId, oldCardIndex, newCardIndex },
});

export const createNewLists = (listIds: string[]): CreateNewLists => ({
  type: CREATE_NEW_LISTS,
  payload: listIds,
});

export const addCardToList = (
  cardId: string,
  listId: string
): AddCardToList => ({
  type: ADD_CARD_TO_LIST,
  payload: { cardId, listId },
});

export const deleteCardFromList = (
  cardId: string,
  listId: string
): DeleteCardFromList => ({
  type: DELETE_CARD_FROM_LIST,
  payload: { cardId, listId },
});

interface CreateNewLists {
  type: typeof CREATE_NEW_LISTS;
  payload: string[];
}
interface AddCardToList {
  type: typeof ADD_CARD_TO_LIST;
  payload: { cardId: string; listId: string };
}
interface MoveCard {
  type: typeof MOVE_CARD;
  payload: {
    sourceListId: string;
    destListId: string;
    oldCardIndex: number;
    newCardIndex: number;
  };
}

interface DeleteCardFromList {
  type: typeof DELETE_CARD_FROM_LIST;
  payload: { listId: string; cardId: string };
}

export type ListByIdActions =
  | CreateNewLists
  | AddCardToList
  | MoveCard
  | DeleteCardFromList;
