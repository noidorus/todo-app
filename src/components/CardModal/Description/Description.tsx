import { createRef, useState } from 'react';
import { connect } from 'react-redux';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { setCardDesc } from '../../../redux/actions/cardsByIdActions';
import { State } from '../../../redux/store';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import { DescriptionContent } from './DescriptionContent';
import descIcon from '../../../assets/images/description-icon.svg';

const Description = (props: DescriptionProps) => {
  const [content, setContent] = useState(props.description);
  const [editorVisible, setEditorVisible] = useState(false);
  const descRef = createRef<HTMLDivElement>();

  useOnClickOutside(descRef, () => {
    setEditorVisible(false);
    props.setCardDesc(props.id, content);
  });

  const onClickContent = () => {
    setEditorVisible(true);
  };

  return (
    <div className="card-modal__description" ref={descRef}>
      <div className="description-title__wrapper">
        <img className="icon" width={20} src={descIcon} alt="desc-icon" />
        <h3 className="description-title">Description</h3>
      </div>

      <div
        className="description-editor"
        style={{ display: !editorVisible ? 'none' : 'block' }}
      >
        <CKEditor
          editor={ClassicEditor}
          data={content}
          onChange={(event, editor) => {
            setContent(editor.getData());
          }}
        />
      </div>

      <DescriptionContent
        onClickContent={onClickContent}
        description={props.description}
        editorVisible={editorVisible}
      />
    </div>
  );
};

interface DescriptionProps {
  id: string;
  description: string;
  setCardDesc: (id: string, desc: string) => void;
}

export default connect(
  ({ cardsById }: State, { id }: { id: string }) => ({
    description: cardsById[id].description,
  }),
  { setCardDesc }
)(Description);
