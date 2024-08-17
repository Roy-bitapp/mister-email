import React, { useState } from 'react';
import compose  from "/src/assets/imgs/sidebar/compose.png";
import draft  from "/src/assets/imgs/sidebar/draft.png";
import inbox  from "/src/assets/imgs/sidebar/inbox.png";
import sent  from "/src/assets/imgs/sidebar/sent.png";
import sentExpanded  from "/src/assets/imgs/sidebar/sentExpanded.png";
import star  from "/src/assets/imgs/sidebar/star.png";
import trash  from "/src/assets/imgs/sidebar/trash.png";
import trashExpanded  from "/src/assets/imgs/sidebar/trashExpanded.png";




export function Sidebar(){

  const [isExpanded, setIsExpanded] = useState(false);

  function toggleSidebar(){
    setIsExpanded(isExpanded => !isExpanded);
  };

  return(    
    <div 
    className={`sidebar ${isExpanded ? 'expanded' : ''}`} 
    onMouseEnter={toggleSidebar} 
    onMouseLeave={toggleSidebar}>

    <button 
      className={`compose-button ${isExpanded ? 'expanded' : ''}`} >
        <img className='compose-icon' src={compose} alt="" />
        {isExpanded && <div className="compose-button-text">Compose</div>}
    </button>
      
      <div className="sidebar-item">
      <img className="menu-icon" src={inbox} alt="" />
      {isExpanded && <div className="sidebar-item-text">Inbox</div>}
      </div>

      <div className="sidebar-item">
      <img className="menu-icon" src={star} alt="" />
      {isExpanded && <div className="sidebar-item-text">Starred</div>}

      </div>
      <div className="sidebar-item">
      <img className="menu-icon" src={isExpanded ? sentExpanded : sent} alt="" />
      {isExpanded && <div className="sidebar-item-text">Sent</div>}

      </div>
      <div className="sidebar-item">
      <img className="menu-icon" src={draft} alt="" />
      {isExpanded && <div className="sidebar-item-text">Drafts</div>}

      </div>
      <div className="sidebar-item">
      <img className="menu-icon" src={isExpanded ? trashExpanded : trash} alt="" />
      {isExpanded && <div className="sidebar-item-text">Trash</div>}
      </div>
  </div>
  )
}