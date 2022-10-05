import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import React from 'react';
const configuration = {
  heading: {
    options: [
      {
        model: 'heading1',
        view: {
          name: 'h1',
          classes: 'text-zinc-400	',
        },
        title: 'Tieu de',
        class: 'ck-heading_heading1',
      },
      { model: 'paragraph', title: 'Noi dung', class: 'ck-heading_paragraph' },
      {
        model: 'heading2',
        view: 'h2',
        title: 'Heading 2',
        class: 'ck-heading_heading2',
      },
    ],
  },
  toolbar: {
    items: [
      'bold',
      'italic',
      '|',
      'undo',
      'redo',
      '-',
      'numberedList',
      'bulletedList',
      'link',
      'heading',
      'indent',
      'outdent',
      'mediaEmbed',
    ],
  },
};
export default function CreateArticle() {
  const [data, setData] = React.useState(null);
  const handleChange = (event, editor) => {
    const data = editor.getData();
    console.log(data);
    setData(data);
  };
  const onReady = (editor) => {
    setEditor(editor);
  };
  const [editor, setEditor] = React.useState(null);
  React.useEffect(() => {
    if (editor) {
      console.log(Array.from(editor.ui.componentFactory.names()));
    }
  }, [editor]);
  return (
    <div className="basis-1/2 bg-red-100">
      <CKEditor
        editor={ClassicEditor}
        onChange={handleChange}
        onReady={onReady}
        data={data}
        config={configuration}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
    </div>
  );
}
