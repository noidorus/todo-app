import { createRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { setCardDesc } from '../../../redux/actions/cardsByIdActions';
import { State } from '../../../redux/store';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import { DescriptionContent } from './DescriptionContent';
import descIcon from '../../../assets/images/description-icon.svg';
import { DescriptionEditor } from './DescriptionEditor';
import {
  setEditorContent,
  setEditorVisible,
} from '../../../redux/actions/editorActions';

const Description = ({
  editorVisible,
  id,
  content,
  setCardDesc,
  description,
  setEditorContent,
  setEditorVisible,
}: DescriptionProps) => {
  const descRef = createRef<HTMLDivElement>();

  const updateDescription = () => {
    setEditorVisible(false);
    setCardDesc(id, content);
  };

  useOnClickOutside(descRef, (e) => {
    const { classList } = e.target as HTMLElement;
    if (
      classList.contains('ck-link-form') ||
      classList.contains('ck-button') ||
      classList.contains('ck-icon') ||
      classList.contains('ck-input')
    ) {
      return;
    } else if (editorVisible) {
      updateDescription();
    }
  });

  useEffect(() => {
    setEditorContent(description);

    return () => {
      setEditorContent('');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [description]);

  const onClickCloseEditor = () => {
    setEditorVisible(false);
    setEditorContent(description);
  };

  return (
    <div className="card-modal__description" ref={descRef}>
      <div className="description-title__wrapper">
        <img className="icon" width={20} src={descIcon} alt="desc-icon" />
        <h3 className="description-title">Description</h3>
      </div>

      {editorVisible ? (
        <DescriptionEditor
          onClickCloseEditor={onClickCloseEditor}
          content={content}
          setContent={setEditorContent}
          onClickSaveDescription={updateDescription}
        />
      ) : (
        <DescriptionContent
          description={description}
          setEditorVisible={setEditorVisible}
        />
      )}
    </div>
  );
};

interface DescriptionProps {
  id: string;
  description: string;
  editorVisible: boolean;
  content: string;
  setCardDesc: (id: string, desc: string) => void;
  setEditorVisible: (visible: boolean) => void;
  setEditorContent: (content: string) => void;
}

export default connect(
  ({ cardsById, editor }: State, { id }: { id: string }) => ({
    description: cardsById[id].description,
    ...editor,
  }),
  { setCardDesc, setEditorVisible, setEditorContent }
)(Description);
