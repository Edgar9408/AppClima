import React from 'react';
import Logo from '../clima.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({ onSearch }) {
  return (
    <div class="navBar">
      <div class="IconTittle">
        <img id="clima" class="icon" src={Logo} />
        <h4 class="h4">Edgar - Weather App</h4>
      </div>
      <div class="search">
        <SearchBar onSearch={onSearch}></SearchBar>
      </div>
    </div>
  );
};

export default Nav;