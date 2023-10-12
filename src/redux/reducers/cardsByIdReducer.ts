import { Reducer } from 'redux';
import { CardType } from '../../types';
import {
  CardsByIdActions,
  ADD_CARD_TO_CARDS,
  CHANGE_CARD_TITLE,
  SET_CARD_DESC,
  SET_PRIORITY_SELECTOR,
  CHANGE_END_DATE,
  ADD_TASK,
  CHANGE_TASK_STATUS,
  DELETE_TASK,
  SET_TIMER,
  PAUSE_TIMER,
  RESET_TIMER,
  ADD_FILE_TO_CARD,
  DELETE_FILE_FROM_CARD,
  ADD_COMMENT_TO_CARD,
  DELETE_COMMENTS_FROM_CARD,
} from '../actions/cardsByIdActions';

interface CardsByIdState {
  [key: string]: CardType;
}

export const cardsByIdReducer: Reducer<CardsByIdState, CardsByIdActions> = (
  state = {},
  { type, payload }
) => {
  switch (type) {
    case ADD_CARD_TO_CARDS:
      const newCard: CardType = {
        ...payload,
        description: '',
        priority: '±0',
        taskList: [],
        files: [],
        comments: [],
        timer: {
          startedTime: null,
          duration: 0,
        },
        date: { createdDate: Date.now(), endDate: null },
      };
      return { ...state, [payload.id]: newCard };
    case CHANGE_CARD_TITLE:
      return {
        ...state,
        [payload.id]: { ...state[payload.id], title: payload.title },
      };
    case SET_CARD_DESC:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          description: payload.desc,
        },
      };
    case SET_PRIORITY_SELECTOR:
      return {
        ...state,
        [payload.id]: { ...state[payload.id], priority: payload.priority },
      };
    case CHANGE_END_DATE:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          date: {
            ...state[payload.id].date,
            endDate: payload.endDate,
          },
        },
      };
    case ADD_TASK:
      const task = { id: payload.taskId, title: payload.title, checked: false };
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          taskList: [...state[payload.id].taskList, task],
        },
      };
    case CHANGE_TASK_STATUS:
      const newTaskList = state[payload.id].taskList.map((task) =>
        task.id === payload.taskId
          ? { ...task, checked: payload.checked }
          : task
      );

      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          taskList: newTaskList,
        },
      };
    case DELETE_TASK:
      const filteredList = state[payload.id].taskList.filter(
        ({ id }) => id !== payload.taskId
      );

      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          taskList: filteredList,
        },
      };
    case SET_TIMER:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          timer: {
            ...state[payload.id].timer,
            startedTime: payload.startedTime,
          },
        },
      };
    case PAUSE_TIMER:
      const duration = state[payload.id].timer.duration + payload.duration;
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          timer: {
            duration: duration,
            startedTime: null,
          },
        },
      };
    case RESET_TIMER:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          timer: {
            duration: 0,
            startedTime: null,
          },
        },
      };
    case ADD_FILE_TO_CARD:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          files: [...state[payload.id].files, payload.fileId],
        },
      };
    case DELETE_FILE_FROM_CARD:
      const files = state[payload.id].files.filter(
        (id) => id !== payload.fileId
      );

      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          files,
        },
      };
    case ADD_COMMENT_TO_CARD:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          comments: [...state[payload.id].comments, payload.commentId],
        },
      };
    case DELETE_COMMENTS_FROM_CARD:
      const comments = state[payload.id].comments.filter(
        (id) => !payload.commentsIds.includes(id)
      );

      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          comments,
        },
      };
    default:
      return state;
  }
};
