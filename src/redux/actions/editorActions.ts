export const SET_EDITOR_VISIBLE = 'SET_EDITOR_VISIBLE';
export const SET_EDITOR_CONTENT = 'SET_EDITOR_CONTENT';

export const setEditorVisible = (visible: boolean): SetEditorVisible => ({
  type: SET_EDITOR_VISIBLE,
  payload: visible,
});

export const setEditorContent = (content: string): SetEditorContent => ({
  type: SET_EDITOR_CONTENT,
  payload: content,
});

interface SetEditorVisible {
  type: typeof SET_EDITOR_VISIBLE;
  payload: boolean;
}
interface SetEditorContent {
  type: typeof SET_EDITOR_CONTENT;
  payload: string;
}

export type EditorActions = SetEditorVisible | SetEditorContent;
