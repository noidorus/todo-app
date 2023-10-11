import { connect } from 'react-redux';
import { State } from '../../../redux/store';
import { useEffect } from 'react';

const Files = ({ id, files }: FilesProps) => {
  const filesUrl = URL.createObjectURL(files[0].file);

  // useEffect(() => {
  //   return () => {
  //     URL.revokeObjectURL(filesUrl);
  //   };
  // });

  return (
    <div>
      <img src={filesUrl} alt="card file" />
    </div>
  );
};

export default connect(({ cardsById }: State, { id }: { id: string }) => ({
  files: cardsById[id].files,
}))(Files);

interface FilesProps {
  id: string;
  files: { file: Blob }[];
}
