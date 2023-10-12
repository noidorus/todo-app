import { FileType } from '../../types';

export const ADD_FILE = 'ADD_FILE';
export const DELETE_FILE = 'DELETE_FILE';

export const addFile = (file: FileType): AddFile => ({
  type: ADD_FILE,
  payload: { file },
});

export const deleteFile = (id: string): DeleteFile => ({
  type: DELETE_FILE,
  payload: { id },
});

interface AddFile {
  type: typeof ADD_FILE;
  payload: { file: FileType };
}
interface DeleteFile {
  type: typeof DELETE_FILE;
  payload: { id: string };
}

export type FilesActions = AddFile | DeleteFile;
