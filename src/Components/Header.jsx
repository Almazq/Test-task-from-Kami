import React from 'react'
import PropTypes from 'prop-types'
import './Styles/Header.css'

const Header = (props) => {
  return (
    <div className="header">
      <h1>Products</h1>
      <button className="header-btn">Add Product</button>
    </div>
  )
}

export default Header
