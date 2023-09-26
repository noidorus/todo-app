import { legacy_createStore as createStore, combineReducers } from 'redux';
import { boardsReducer } from './reducers/boardsReducer';
import { listsByIdReducer } from './reducers/listsById';

const reducers = combineReducers({
  boards: boardsReducer,
  listById: listsByIdReducer,
});

const store = createStore(reducers);

window.store = store;
export type Store = typeof store;
export type State = ReturnType<Store['getState']>;

export default store;

declare global {
  interface Window {
    store: Store;
  }
}
