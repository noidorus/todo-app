import { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import { State } from '../../../../redux/store';
import { setError, setFile } from '../../../../redux/actions/uploadFileActions';
import { addFileToCard } from '../../../../redux/actions/cardsByIdActions';
import { EditButtons } from '../../../Commons/EditButtons/EditButtons';
import { addFile } from '../../../../redux/actions/filesActions';
import { FileType } from '../../../../types';

import './UploadFilePopUp.scss';

const UploadFilePopUp = ({
  file,
  error,
  id,
  setFile,
  setError,
  addFileToCard,
  closePopUp,
  addFile,
}: UploadFilePopUpProps) => {
  const maxFiles = 1;

  useEffect(() => {
    return () => {
      file && URL.revokeObjectURL(file.preview);
      setFile(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickButton = () => {
    if (file) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        if (reader.result) {
          const file = {
            id: nanoid(10),
            url: reader.result as string,
          };

          addFileToCard(id, file.id);
          addFile(file);
          setFile(null);
          if (closePopUp) closePopUp();
        }
      });
      reader.readAsDataURL(file);
    }
  };

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length === maxFiles) {
      setFile(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        })
      );
    } else {
      setError(`Max files count: ${maxFiles}`);
    }
  };

  const { getRootProps, getInputProps /*isDragActive*/ } = useDropzone({
    accept: {
      'image/*': [],
    },
    maxFiles,
    onDrop: onDrop,
  });

  const onClickClose = () => {
    if (closePopUp) closePopUp();
  };

  return (
    <div className="upload-file__popup">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        {file ? (
          <img className="preview" src={file.preview} alt="preview" />
        ) : (
          <p className="dropzone-placeholder">
            Drag 'n' drop some files here, or click to select files
          </p>
        )}
      </div>
      {/*     
      <p>{error}</p> */}

      <EditButtons
        btnDisabled={!file}
        name="Upload"
        onClickClose={onClickClose}
        onClickBtn={onClickButton}
      />
    </div>
  );
};

export default connect(
  ({ uploadFile }: State) => ({
    ...uploadFile,
  }),
  { setFile, setError, addFileToCard, addFile }
)(UploadFilePopUp);

interface UploadFilePopUpProps {
  id: string;
  error: string;
  file: State['uploadFile']['file'];
  closePopUp?: () => void;
  setFile: (file: File | null) => void;
  setError: (error: string) => void;
  addFileToCard: (id: string, file: string) => void;
  addFile: (file: FileType) => void;
}
