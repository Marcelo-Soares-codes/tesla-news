import React from 'react';
import './style.css';
import { SearchTitle } from './search-input';

export const Header = ({ searchValue, handleChange }) => (
  <header data-testid="header">
    <div className="header">
      <div className="spacer"></div>
      <h1 className='titulo'>TeslaNews</h1>
      <div className="spacer">
        <SearchTitle searchValue={searchValue} handleChange={handleChange} />
      </div>
    </div>
    <div className="navBar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">News</a></li>
        <li><a href="https://www.tesla.com/" target='_blank' rel="noreferrer">Tesla</a></li>
      </ul>
    </div>
  </header>
);
