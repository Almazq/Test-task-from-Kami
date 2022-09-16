import React from 'react'
import PropTypes from 'prop-types'
import './Styles/ProductsComponent.css'

const ProductsComponent = (props) => {
  return (
    <div>
      <div className="product">
        <input type="checkbox" name='checkbox-product' className="product-checkbox"/>
        <div className="product-img-box"><img src="https://www.inform.kz/radmin/news/2022/03/14/220314175314167e.jpg" className="product-img"/></div>
        <p className="product-name" >Sugar</p>
        <p className="product-status" >ACTIVE</p>
        <p className="product-price" >800 tg/gramm</p>
      </div>
    </div>
  )
}

export default ProductsComponent
