import { legacy_createStore as createStore, combineReducers } from 'redux';
import { boardsReducer } from './reducers/boardsReducer';
import { listsByIdReducer } from './reducers/listsById';
import { cardsByIdReducer } from './reducers/cardsByIdReducer';
import { throttle } from '../helpers/helpers';
import { editorReducer } from './reducers/editorResucer';
import { commentsReducer } from './reducers/commentsReducer';

const reducers = combineReducers({
  boards: boardsReducer,
  listById: listsByIdReducer,
  cardsById: cardsByIdReducer,
  editor: editorReducer,
  comments: commentsReducer,
});

const saveState = (state: State) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const persistedState = loadState();
const store = createStore(reducers, persistedState);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

window.store = store;
export type Store = typeof store;
export type State = ReturnType<Store['getState']>;

export default store;

declare global {
  interface Window {
    store: Store;
  }
}
