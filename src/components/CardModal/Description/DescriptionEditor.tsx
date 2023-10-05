import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { EditButtons } from '../../Buttons/EditButtons/EditButtons';

export const DescriptionEditor = (props: DescriptionEditorProps) => {
  return (
    <div className="description-editor">
      <CKEditor
        editor={ClassicEditor}
        data={props.content}
        config={{
          toolbar: [
            'undo',
            'redo',
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
          ],
        }}
        onChange={(e, editor) => {
          props.setContent(editor.getData());
        }}
      />

      <EditButtons
        name="Save"
        onClickBtn={props.onClickSaveDescription}
        onClickClose={props.onClickCloseEditor}
      />
    </div>
  );
};

interface DescriptionEditorProps {
  content: string;
  onClickCloseEditor: () => void;
  setContent: (content: string) => void;
  onClickSaveDescription: () => void;
}
