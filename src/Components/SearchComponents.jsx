import React from 'react'
import PropTypes from 'prop-types';
import './Styles/SearchComponents.css';

const SearchComponents = (props) => {
  return (
    <div className="search-box">
      <div >
        <form className="input-search-box">
        <input type="search" className="input-search" placeholder="Search"/>
        </form>
      </div>
      <div className="similar-menu">
        <input type="checkbox" />
        <p style={{width: "50%" , textAlign: "center"}}>Name</p>
        <p style={{width: "25%" ,textAlign: "center"}}>Status</p>
        <p style={{width: "15%"}}>Price</p>
      </div>
    </div>
  )
}

export default SearchComponents;
