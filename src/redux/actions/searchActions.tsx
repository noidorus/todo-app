import { SearchResult } from '../../types';

export const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
export const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const changeSearchValue = (searchValue: string): ChangeSearchValue => ({
  type: CHANGE_SEARCH_VALUE,
  payload: { searchValue },
});

export const setSearchResult = (searchResult: SearchResult) => ({
  type: SET_SEARCH_RESULT,
  payload: { searchResult },
});

export const clearSearch = (): ClearSearch => ({
  type: CLEAR_SEARCH,
  payload: undefined,
});

interface ChangeSearchValue {
  type: typeof CHANGE_SEARCH_VALUE;
  payload: { searchValue: string };
}

interface SetSearchResult {
  type: typeof SET_SEARCH_RESULT;
  payload: { searchResult: SearchResult };
}

interface ClearSearch {
  type: typeof CLEAR_SEARCH;
  payload: undefined;
}

export type SearchActions = ClearSearch | ChangeSearchValue | SetSearchResult;
