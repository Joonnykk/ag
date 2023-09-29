import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function uploadAdapter(loader) {
  return {
    upload: () => {
      return new Promise(async (resolve, reject) => {
        try {
          const file = await loader.file;
          const response = await fetch( `/api/v1/uploads/`, {
            method: "POST",
            data: {
              files: file
            },
            headers: {
              // "Content-Type": "multipart/form-data"
            }
          });
          resolve({
            default: `/${response.data.filename}`
          });
        } catch (error) {
          reject("Hello");
        }
      })
    }
  }
}

function uploadPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return uploadAdapter(loader)
  }
}

export default function Editor() {
    return (
        <CKEditor
            config={{
                extraPlugins: [uploadPlugin]
            }}
            editor={ ClassicEditor }
            data="<p>Hello from CKEditor&nbsp;5!</p>"
            onReady={ editor => {
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
            } }
            onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
            } }
        />
    )
}