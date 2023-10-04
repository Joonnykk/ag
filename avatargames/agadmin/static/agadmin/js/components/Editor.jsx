import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Cookies } from 'react-cookie'
import MyCustomUploadAdapterPlugin from "../helpers/EditorUploader";

const cookie = new Cookies()

// const AppEditor = new Editor('div', {
//     simpleUpload: {
//          uploadUrl: '/api/v1/uploads/image/',
//          withCredentials: true,
//          headers: {
//             'X-CSRF-TOKEN': cookie.get("csrftoken")
//         }
//     }
// })

console.log(ClassicEditor)

export default function AppEditor() {
    return (
        <CKEditor
            config={{
                plugins: [MyCustomUploadAdapterPlugin],
                removePlugins: [ 'CKBox' ]
                // simpleUpload: {
                //      uploadUrl: '/api/v1/uploads/image/',
                //      withCredentials: true,
                //      headers: {
                //         'X-CSRF-TOKEN': cookie.get("csrftoken")
                //     }
                // }
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