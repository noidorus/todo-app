import { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { connect } from 'react-redux';
import { State } from '../../../../redux/store';
// import classNames from 'classnames';
import { setError, setFile } from '../../../../redux/actions/uploadFileActions';
import './UploadFilePopUp.scss';
import { addFile } from '../../../../redux/actions/cardsByIdActions';

const UploadFilePopUp = ({
  file,
  error,
  id,
  setFile,
  setError,
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

  const uploadImage = async (file: File) => {
    const arrayBuffer = await file.arrayBuffer();
    const blob = new Blob([new Uint8Array(arrayBuffer)], { type: file.type });
    addFile(id, blob);
  };

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length === maxFiles) {
      setFile(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        })
      );
      uploadImage(acceptedFiles[0]);
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
    </div>
  );
};

export default connect(
  ({ uploadFile }: State) => ({
    ...uploadFile,
  }),
  { setFile, setError, addFile }
)(UploadFilePopUp);

interface UploadFilePopUpProps {
  id: string;
  error: string;
  file: State['uploadFile']['file'];
  setFile: (file: File | null) => void;
  setError: (error: string) => void;
  addFile: (id: string, file: Blob) => void;
}
