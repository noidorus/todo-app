import { ChangeEvent, createRef, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { State } from '../../redux/store';
import {
  changeSearchValue,
  setSearchResult,
} from '../../redux/actions/searchActions';
import { useDebounce } from '../../hooks/useDebounce';
import './Search.scss';

const Search = ({
  searchValue,
  listsObj,
  cardsObj,
  boards,
  changeSearchValue,
  setSearchResult,
}: SearchResultProps) => {
  const query = useDebounce(searchValue.toLowerCase(), 700);
  const cards = useMemo(() => Object.values(cardsObj), [cardsObj]);
  const lists = useMemo(() => Object.values(listsObj), [listsObj]);
  const searchRef = createRef<HTMLInputElement>();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    changeSearchValue(target.value);
  };

  useEffect(() => {
    if (query.length > 0) {
      const queryArr = query.split(' ');
      const result = cards.reduce<State['search']['searchResult']>(
        (acc, card) => {
          const tags = [
            card.cardNum.toString(),
            ...card.title.toLowerCase().split(' '),
          ];
          const includes = queryArr.every((el) =>
            tags.some((val) => val.match(el))
          );

          if (includes) {
            const list = lists.find((list) =>
              list.cards.some((id) => id === card.id)
            )!;
            const board = boards.find((board) =>
              board.lists.some((el) => el === list.id)
            )!;

            return [...acc, { card, list, board }];
          }

          return [...acc];
        },
        []
      );
      setSearchResult(result);
    } else {
      setSearchResult([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="search" onClick={() => searchRef.current?.focus()}>
      <input
        ref={searchRef}
        placeholder="Search"
        className="search__input"
        type="text"
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default connect(
  ({ search, cardsById, listById, boards }: State) => ({
    searchValue: search.searchValue,
    listsObj: listById,
    cardsObj: cardsById,
    boards: boards.boards,
  }),
  { changeSearchValue, setSearchResult }
)(Search);

interface SearchResultProps {
  searchValue: string;
  listsObj: State['listById'];
  cardsObj: State['cardsById'];
  boards: State['boards']['boards'];
  changeSearchValue: (searchValue: string) => void;
  setSearchResult: (result: State['search']['searchResult']) => void;
}
