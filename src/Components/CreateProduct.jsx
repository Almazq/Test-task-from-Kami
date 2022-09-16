import React , { Component, useState } from 'react'
import PropTypes from 'prop-types';
import './Styles/CreateProduct.css';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Wysiwyg from './Wysiwyg'


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
        <div className="Wysiwyg"><Wysiwyg /></div>
        <div className="status-create-profuct"></div>
      </div>
    </div>
  )
}

export default CreateProduct
