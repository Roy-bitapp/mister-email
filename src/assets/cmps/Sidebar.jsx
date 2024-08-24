import React, { useState } from 'react';
import compose from "/src/assets/imgs/sidebar/compose.png";
import draft from "/src/assets/imgs/sidebar/draft.png";
import inbox from "/src/assets/imgs/sidebar/inbox.png";
import sent from "/src/assets/imgs/sidebar/sent.png";
import sentExpanded from "/src/assets/imgs/sidebar/sentExpanded.png";
import star from "/src/assets/imgs/sidebar/star.png";
import trash from "/src/assets/imgs/sidebar/trash.png";
import trashExpanded from "/src/assets/imgs/sidebar/trashExpanded.png";

const FILTERS = {
  inbox: { icon: inbox, label: 'Inbox' },
  star: { icon: star, label: 'Starred' },
  sent: { icon: sent, iconExpanded: sentExpanded, label: 'Sent' },
  trash: { icon: trash, iconExpanded: trashExpanded, label: 'Trash' }
};

export function Sidebar({ inboxNumber, isExpanded, setFilterBy, filterBy, onComposeEmailClicked }) {
  const [selectedFilter, setSelectedFilter] = useState(filterBy.status);

  function onFilterClick(filterType) {
    setFilterBy({ ...filterBy, status: filterType });
    setSelectedFilter(filterType);
  }

  return (
    <div>
      <button
        className={`compose-button ${isExpanded ? 'expanded' : ''}`}
        onClick={onComposeEmailClicked}
      >
        <img className='compose-icon' src={compose} alt="Compose" />
        {isExpanded && <div className="compose-button-text">Compose</div>}
      </button>

      {Object.keys(FILTERS).map((filterKey) => {
        const { icon, iconExpanded, label } = FILTERS[filterKey];
        const isSelected = filterKey === selectedFilter;
        return (
          <div
            key={filterKey}
            onClick={() => onFilterClick(filterKey)}
            className={`sidebar-item ${isSelected ? 'selected' : ''}`}
          >
            <img className="menu-icon" src={isExpanded && iconExpanded ? iconExpanded : icon} alt={label} />
            {isExpanded && <div className="sidebar-item-text">{label}</div>}
            {filterKey === 'inbox' && isExpanded && <span className="inbox-number"><strong>{inboxNumber}</strong></span>}
          </div>
        );
      })}
    </div>
  );
}
