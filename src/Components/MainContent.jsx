import React from 'react'
import PropTypes from 'prop-types';
import SearchComponents from './SearchComponents';
import ProductsComponent from './ProductsComponent';
import './Styles/MainContent.css'

const MainContent = (props) => {
  return (
    <div className="main-content">
      <SearchComponents />
      <ProductsComponent />
    </div>
  )
}

export default MainContent
