import SearchInput from './SearchInput';
import SearchResult from './SearchResult';

import './Search.scss';

export const Search = () => {
  return (
    <div className="search">
      <SearchInput />
      <SearchResult />
    </div>
  );
};
