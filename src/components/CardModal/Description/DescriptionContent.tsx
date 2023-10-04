import parse from 'html-react-parser';
import { MouseEvent } from 'react';

export const DescriptionContent = (props: DescriptionContentProps) => {
  const handleClickContent = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName !== 'A') {
      props.onClickContent();
    }
  };

  return (
    <div
      style={{ display: props.editorVisible ? 'none' : 'block' }}
      className="description-content"
      onClick={handleClickContent}
    >
      {!!props.description ? (
        parse(props.description)
      ) : (
        <p className="content-empty">Write additional description...</p>
      )}
    </div>
  );
};

interface DescriptionContentProps {
  description: string;
  editorVisible: boolean;
  onClickContent: () => void;
}
