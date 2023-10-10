import { BoardType, CardType, ListType } from '../../types';

const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT';

const initialState = {
  searchValue: '',
  searchResult: [],
};

interface SeacrhState {
  searchValue: string;
  searchResult: { card: CardType; list: ListType; board: BoardType }[];
}

export const searchReducer = (
  state: SeacrhState = initialState,
  { type, payload }: SearchActions
) => {
  switch (type) {
    case CHANGE_SEARCH_VALUE:
      return { ...state, searchValue: payload.searchValue };
    case SET_SEARCH_RESULT:
      return { ...state, searchResult: payload.searchResult };
    default:
      return state;
  }
};

export const changeSearchValue = (searchValue: string): ChangeSearchValue => ({
  type: CHANGE_SEARCH_VALUE,
  payload: { searchValue },
});

export const setSearchResult = (searchResult: SeacrhState['searchResult']) => ({
  type: SET_SEARCH_RESULT,
  payload: { searchResult },
});

interface ChangeSearchValue {
  type: typeof CHANGE_SEARCH_VALUE;
  payload: { searchValue: string };
}

interface SetSearchResult {
  type: typeof SET_SEARCH_RESULT;
  payload: { searchResult: SeacrhState['searchResult'] };
}

type SearchActions = ChangeSearchValue | SetSearchResult;
