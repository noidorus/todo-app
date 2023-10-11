import { connect } from 'react-redux';
import { createRef } from 'react';
import { Link } from 'react-router-dom';
import { State } from '../../../redux/store';
import { clearSearch } from '../../../redux/actions/searchActions';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';

const SearchResult = ({ searchResult, clearSearch }: SearchResultProps) => {
  const searchResultRef = createRef<HTMLUListElement>();

  useOnClickOutside(searchResultRef, (e) => {
    const target = e.target as HTMLElement;
    if (!target.classList.contains('search__input')) clearSearch();
  });

  const elements = searchResult.map(({ card, list, board }) => {
    return (
      <li key={card.id}>
        <Link className="result__link" to={`/${board.id}?cardId=${card.id}`}>
          <span>{card.title}</span>
          <span>
            {board.title}: {list.title}
          </span>
        </Link>
      </li>
    );
  });

  return (
    <>
      {!!elements.length && (
        <ul ref={searchResultRef} className="search__result">
          {elements}
        </ul>
      )}
    </>
  );
};

interface SearchResultProps {
  searchResult: State['search']['searchResult'];
  clearSearch: () => void;
}

export default connect(
  ({ search }: State) => ({
    searchResult: search.searchResult,
  }),
  { clearSearch }
)(SearchResult);
