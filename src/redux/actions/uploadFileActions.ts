export const SET_FILE = 'SET_FILE';
export const SET_ERROR = 'SET_ERROR';

export const setFile = (file: File | null) => ({
  type: SET_FILE,
  payload: { file },
});

export const setError = (error: string) => ({
  type: SET_ERROR,
  payload: { error },
});

interface SetFile {
  type: typeof SET_FILE;
  payload: { file: (File & { preview: string }) | null };
}
interface SetError {
  type: typeof SET_ERROR;
  payload: { error: string };
}

export type UploadFileActions = SetFile | SetError;
