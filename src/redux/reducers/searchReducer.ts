import { SearchResult } from '../../types';
import {
  CHANGE_SEARCH_VALUE,
  CLEAR_SEARCH,
  SET_SEARCH_RESULT,
  SearchActions,
} from '../actions/searchActions';

const initialState = {
  searchValue: '',
  searchResult: [],
};

interface SeacrhState {
  searchValue: string;
  searchResult: SearchResult;
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
    case CLEAR_SEARCH:
      return { ...state, searchValue: '', searchResult: [] };
    default:
      return state;
  }
};
