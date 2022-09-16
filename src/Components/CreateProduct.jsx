import React , { Component } from 'react'
import PropTypes from 'prop-types';
import './Styles/CreateProduct.css';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
// import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';
import CKEditor from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';



const CreateProduct = (props) => {
  return (
    <div>
      <div className="header-creat-product">
        <button> &#8592; </button>
        <h2>Add Product</h2>
      </div>
      <div className="formik-create-product">
        <form>
          <p>Name:</p><input type="text" name="name-product" />
          <p>Осписания:</p>
        </form>
                <h2>CKEditor 5 using a custom build - decoupled editor</h2>
                <CKEditor
                    onReady={ editor => {
                        console.log( 'Editor is ready to use!', editor );

                        // Insert the toolbar before the editable area.
                        editor.ui.getEditableElement().parentElement.insertBefore(
                            editor.ui.view.toolbar.element,
                            editor.ui.getEditableElement()
                        );

                        this.editor = editor;
                    } }
                    onError={ ( error, { willEditorRestart } ) => {

                        if ( willEditorRestart ) {
                            this.editor.ui.view.toolbar.element.remove();
                        }
                    } }
                    onChange={ ( event, editor ) => console.log( { event, editor } ) }
                    editor={ DecoupledEditor }
                    data="<p>Hello from CKEditor 5's decoupled editor!</p>"
                />
      </div>
    </div>
  )
}

export default CreateProduct
