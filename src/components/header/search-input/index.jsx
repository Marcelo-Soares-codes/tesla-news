import React from 'react';
import './style.css';

export const SearchTitle = ({ searchValue, handleChange }) => (
  <div className='containerInput' data-testid='search-title'>
    <img src="search.svg" className='iconSearch' alt="Search" />
    <input
      className='inputSearch'
      type=""
      placeholder='Search'
      onChange={(event) => handleChange(event.target.value)}
      value={searchValue}
    />
  </div>
);
