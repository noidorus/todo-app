import { FileType } from '../../types';

export const ADD_FILE = 'ADD_FILE';
export const DELETE_FILES = 'DELETE_FILES';

export const addFile = (file: FileType): AddFile => ({
  type: ADD_FILE,
  payload: { file },
});

export const deleteFiles = (ids: string[]): DeleteFiles => ({
  type: DELETE_FILES,
  payload: { ids },
});

interface AddFile {
  type: typeof ADD_FILE;
  payload: { file: FileType };
}
interface DeleteFiles {
  type: typeof DELETE_FILES;
  payload: { ids: string[] };
}

export type FilesActions = AddFile | DeleteFiles;
