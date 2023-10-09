import { createRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { setCardDesc } from '../../../redux/actions/cardsByIdActions';
import { State } from '../../../redux/store';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import { DescriptionContent } from './DescriptionContent';
import { DescriptionEditor } from './DescriptionEditor';
import {
  setEditorContent,
  setEditorVisible,
} from '../../../redux/actions/editorActions';
import { Button } from '../../Commons/Button/Button';
import './Description.scss';

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
  // console.log('render');
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
    <div className="description" ref={descRef}>
      <div className="description__title-wrapper">
        <h3>Description</h3>
        {!!description && !editorVisible && (
          <Button name="Edit" onClick={() => setEditorVisible(true)} />
        )}
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
