import { connect } from 'react-redux';
import { State } from '../../redux/store';

import './SearchResult.scss';

const SearchResult = ({ searchResult }: SearchResultProps) => {
  const elements = searchResult.map(({ card, list, board }) => {
    return (
      <li key={card.id}>
        <a href="">
          <span>{card.title}</span>
          <span>
            {board.title}:{list.title}
          </span>
        </a>
      </li>
    );
  });

  return (
    <>
      <ul className="search__result">{elements}</ul>
    </>
  );
};

interface SearchResultProps {
  searchResult: State['search']['searchResult'];
}

export default connect(({ search }: State) => ({
  searchResult: search.searchResult,
}))(SearchResult);
