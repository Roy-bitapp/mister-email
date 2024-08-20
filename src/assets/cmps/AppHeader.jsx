import React, { useState } from 'react';
import gmail from "/src/assets/imgs/header/gmail.png";
import search from "/src/assets/imgs/header/search.png";
import help from "/src/assets/imgs/header/help.png";
import settings from "/src/assets/imgs/header/settings.png";
import apps from "/src/assets/imgs/header/apps.png";
import menu from "/src/assets/imgs/header/menu.png";
import searchOptions from "/src/assets/imgs/header/searchOptions.png";

export function AppHeader({ setIsExpanded, getFilteredEmailsByText }) {
  const [searchText, setSearchText] = useState('');

  // Handle input changes
  const handleInputChange = (ev) => {
    const text = ev.target.value
    setSearchText(text);
  };

  // Handle form submission
  const onSearchTextSubmit = (ev) => {
    ev.preventDefault();
    getFilteredEmailsByText(searchText);
  };

  return (
    <div className="header">
      <div className="header-left">
        <img
          onClick={() => setIsExpanded(isExpanded => !isExpanded)}
          className="menu-icon"
          src={menu}
          alt=""
        />
        <img className="gmail-image" src={gmail} alt="" />
      </div>

      <div className="header-middle">
        <span className="search-icon">
          <img className="input-icons" src={search} alt="" />
        </span>
        <form onSubmit={onSearchTextSubmit} className="header-input-container">
          <input
            type="text"
            value={searchText}
            onChange={handleInputChange}
            placeholder="Search mail"
            className="header-input"
          />
          <img className="input-search-options" src={searchOptions} alt="" />
        </form>
      </div>

      <div className="header-right">
        <img className="icons" src={help} alt="" />
        <img className="icons" src={settings} alt="" />
        <img className="icons" src={apps} alt="" />
      </div>
    </div>
  );
}
